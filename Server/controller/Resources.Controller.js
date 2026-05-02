import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { PrismaClient } from '../generated/client/client.js';
import { uploadToR2 } from '../utils/r2.js';
import { generateEmbedding, formatEmbeddingForSql } from '../utils/embedding.js';

const prisma = new PrismaClient();


export const createResource = async (req, res) => {
    try {

        const { name } = req.body;
        let tags = [];
        if (req.body.keywords) {
            tags = req.body.keywords.split(',').map(tag => tag.trim());
        }
        // console.log(tags);
        const deptId = req.params.deptId;
        const userId = req.user.id

        if (!name || !deptId) {
            throw new ApiError(400, 'Resource name and course ID are required');
        }

        // Validate department ID
        const department = await prisma.department.findFirst({
            where: { id: Number(deptId) },
        });

        if (!department) {
            throw new ApiError(404, 'Department not found');
        }


        // console.log('Files received:', req.files);

        let fileUploadResponse = null;
        let imageUploadResponse = null;


        if (req.files.file) {
            const fileLocalPath = req.files.file[0].path;
            fileUploadResponse = await uploadToR2(fileLocalPath);
            if (!fileUploadResponse) {
                throw new ApiError(500, 'Failed to upload file to Cloudflare R2');
            }
        }

        if (req.files.image) {
            const imageLocalPath = req.files.image[0].path;
            imageUploadResponse = await uploadToR2(imageLocalPath);
            if (!imageUploadResponse) {
                throw new ApiError(500, 'Failed to upload image to Cloudflare R2');
            }
        }


        // Create the resource in the database
        const resource = await prisma.resource.create({
            data: {
                name,
                departmentId: Number(deptId),
                tags: tags,
                File: fileUploadResponse?.url,
                image: imageUploadResponse?.url,
                userId: userId
            },
        });

        // Generate and store embedding for semantic search
        try {
            // Fetch department name for richer context
            const dept = await prisma.department.findUnique({
                where: { id: Number(deptId) },
                select: { name: true }
            });

            const embeddingText = `Resource: ${name}. Department: ${dept?.name || ""}. Tags: ${tags.join(", ")}`;
            const embedding = await generateEmbedding(embeddingText);
            if (embedding) {
                const formattedEmbedding = formatEmbeddingForSql(embedding);
                await prisma.$executeRaw`UPDATE "Resource" SET "embedding" = ${formattedEmbedding}::vector WHERE "id" = ${resource.id}`;
            }
        } catch (embeddingError) {
            console.error("Failed to generate embedding for resource:", embeddingError);
            // We don't throw here to ensure the resource creation still succeeds
        }

        // console.log('Resource created:', resource);


        // Send success response
        return res.status(201).json(
            new ApiResponse(201, resource, 'Resource created successfully')
        );



    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const getResources = async (req, res) => {
    try {
        const deptId = req.params.deptId;
        // console.log(req.query);
        const page = parseInt(req.query.page, 10) || 1;
        // console.log(page);
        const pageSize = 6;

        if (!deptId) {
            throw new ApiError(400, 'Department ID is required');
        }

        // Validate department ID
        const department = await prisma.department.findFirst({
            where: { id: Number(deptId) },
        });

        if (!department) {
            throw new ApiError(404, 'Course not found');
        }

        // Count total resources for pagination info
        const totalResources = await prisma.resource.count({
            where: {
                AND: [
                    { departmentId: Number(deptId) },
                    {
                        publishStatus: {
                            in: ["PUBLISHED"]
                        }
                    }
                ]
            },
        });

        // Fetch paginated resources
        const resources = await prisma.resource.findMany({
            where: {
                AND: [
                    { departmentId: Number(deptId) },
                    {
                        publishStatus: {
                            in: ["PUBLISHED"]
                        }
                    }
                ]
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
        });

        // Send success response with pagination info
        return res.status(200).json(
            new ApiResponse(200, {
                resources,
                page,
                pageSize,
                totalResources,
                totalPages: Math.ceil(totalResources / pageSize)
            }, 'Resources fetched successfully')
        );

    } catch (error) {
        console.error('Error fetching resources:', error);
        throw new ApiError(500, 'Internal Server Error', error.message);
    }
}

export const deleteResource = async (req, res) => {
    try {
        const resourceId = req.params.resourceId;

        if (!resourceId) {
            throw new ApiError(400, 'Resource ID is required');
        }

        // Validate resource ID
        const resource = await prisma.resource.findFirst({
            where: { id: Number(resourceId) },
        });

        if (!resource) {
            throw new ApiError(404, 'Resource not found');
        }

        // Delete the resource
        const deletedResource = await prisma.resource.delete({
            where: { id: Number(resourceId) },
        });

        // Send success response
        return res.status(200).json(
            new ApiResponse(200, deletedResource, 'Resource deleted successfully')
        );

    } catch (error) {
        throw new ApiError(500, 'Internal Server Error', error.message);
    }
}

export const toggleResourcePublicationStatus = async (req, res) => {
    try {


        const resourceId = req.params.resourceId;
        const publishStatus = req.body.publishStatus;



        if (!resourceId) {
            throw new ApiError(400, 'Resource ID is required');
        }

        // Validate resource ID
        const resource = await prisma.resource.findFirst({
            where: { id: Number(resourceId) },
        });

        if (!resource) {
            throw new ApiError(404, 'Resource not found');
        }

        const validStatuses = ["PUBLISHED", "WAITING_FOR_APPROVAL", "REJECTED"];

        if (!validStatuses.includes(publishStatus)) {
            throw new ApiError(400, 'Invalid publishStatus value');
        }

        // Toggle publication status
        const updatedResource = await prisma.resource.update({
            where: { id: Number(resourceId) },
            data: { publishStatus },
        });

        // Send success response
        return res.status(200).json(
            new ApiResponse(200, updatedResource, 'Resource publication status toggled successfully')
        );

    } catch (error) {
        throw new ApiError(500, 'Internal Server Error', error.message);
    }
}

export const getResourcesBySearch = async (req, res) => {
    try {
        const { searchQuery } = req.body;
        const deptId = req.params.deptId;
        const page = parseInt(req.query.page, 10) || 1;
        const pageSize = 6;

        const department = await prisma.department.findFirst({
            where: { id: Number(deptId) },
        });

        if (!department) {
            throw new ApiError(404, 'Department not found');
        }

        let semanticResources = [];
        let keywordResources = [];

        // 1. Semantic Search (Looser threshold for better discovery)
        if (searchQuery && searchQuery.length > 2) {
            try {
                const queryEmbedding = await generateEmbedding(searchQuery);
                if (queryEmbedding) {
                    const formattedEmbedding = formatEmbeddingForSql(queryEmbedding);
                    
                    semanticResources = await prisma.$queryRaw`
                        SELECT id, name, "File", image, "publishStatus", "departmentId", "userId", "createdAt", tags, 
                               ("embedding" <=> ${formattedEmbedding}::vector) as distance
                        FROM "Resource"
                        WHERE "departmentId" = ${Number(deptId)}
                        AND "publishStatus" = 'PUBLISHED'
                        AND ("embedding" <=> ${formattedEmbedding}::vector) < 0.6
                        ORDER BY distance ASC
                        LIMIT 40
                    `;
                }
            } catch (semanticError) {
                console.error("Semantic search failed:", semanticError);
            }
        }

        // 2. Keyword Search (Fallback/Supplement)
        const searchFilter = {
            departmentId: Number(deptId),
            publishStatus: 'PUBLISHED',
            OR: [
                { name: { contains: searchQuery, mode: 'insensitive' } },
                { tags: { has: searchQuery } }
            ]
        };

        keywordResources = await prisma.resource.findMany({
            where: searchFilter,
            take: 40
        });

        // 3. Combine and Rank
        const combinedMap = new Map();
        
        // Add keyword results first (usually most exact)
        keywordResources.forEach(res => {
            combinedMap.set(res.id, { ...res, score: 1.0, searchType: 'keyword' });
        });

        // Add/Update with semantic results
        semanticResources.forEach(res => {
            const existing = combinedMap.get(res.id);
            const semanticScore = 1 - res.distance; // distance to similarity
            
            if (existing) {
                existing.score += semanticScore; // Boost items found by both
                existing.searchType = 'hybrid';
            } else {
                combinedMap.set(res.id, { ...res, score: semanticScore, searchType: 'semantic' });
            }
        });

        let allResources = Array.from(combinedMap.values())
            .sort((a, b) => b.score - a.score);

        // 4. Pagination
        const totalResources = allResources.length;
        const resources = allResources.slice((page - 1) * pageSize, page * pageSize);

        if (resources.length === 0) {
            // If still nothing, return empty but not 404 to avoid frontend errors
            return res.status(200).json(
                new ApiResponse(200, {
                    resources: [],
                    page,
                    totalResources: 0,
                    totalPages: 0
                }, 'No resources found')
            );
        }

        return res.status(200).json(
            new ApiResponse(200, {
                resources,
                page,
                totalResources,
                totalPages: Math.ceil(totalResources / pageSize)
            }, 'Resources fetched successfully')
        );

    } catch (error) {
        console.error('Search error:', error);
        throw new ApiError(500, 'Internal Server Error');
    }
}

export const UpdateResource = async (req, res) => {

    try {
        const { Name } = req.body
        const resourceId = req.params.resourceId;

        const resource = await prisma.resource.findFirstOrThrow({
            where: {
                id: resourceId
            }
        })

        const updatedResource = await prisma.resource.update({
            where: {
                id: resourceId
            },
            data: {
                name: Name
            }
        })

        return res.status(200).json(
            new ApiResponse(200, updatedResource, "Resource Updated Successfully.")
        )

    } catch (error) {
        throw new ApiError(500, 'Internal Server Error', error.message);
    }
}

export const getSavedResourcesOfUser = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await prisma.user.findFirst({
            where: { id: userId }
        });

        if (!user) {
            throw new ApiError(500, 'User Not Found.');
        }

        // Get all SAVE activities for the user
        const activitySaveType = await prisma.userActivity.findMany({
            where: {
                userId: userId,
                type: "SAVE"
            },
            select: {
                resourceId: true,
                createdAt: true
            }
        });

        if (!activitySaveType || activitySaveType.length === 0) {
            new ApiResponse(400, null, 'Cannot Find Resources.');
        }

        // Get all resource IDs
        const resourceIds = activitySaveType.map(a => a.resourceId);

        // Fetch all resources in one query
        const resources = await prisma.resource.findMany({
            where: {
                id: { in: resourceIds }
            }
        });

        // Map resourceId to createdAt for quick lookup
        const resourceIdToCreatedAt = {};
        activitySaveType.forEach(a => {
            resourceIdToCreatedAt[a.resourceId] = a.createdAt;
        });

        // Attach the activity's createdAt to each resource
        const savedResources = resources.map(resource => ({
            ...resource,
            savedAt: resourceIdToCreatedAt[resource.id]
        }));

        return res.status(200).json(
            new ApiResponse(200, savedResources, "Saved Resources Fetched Successfully.")
        );

    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const getAllResourcesCount = async (req, res) => {
    try {
        const AllResourcesCount = await prisma.resource.findMany()

        return res.status(200).json(
            new ApiResponse(200, AllResourcesCount, "All Users Count Fetched.")
        )

    } catch (error) {
        throw new ApiError(501, "Internal Server Error", error)
    }
}

export const getAllUploadedResources = async (req, res) => {
    try {

        const resources = await prisma.resource.findMany({
            where: {
                publishStatus: 'WAITING_FOR_APPROVAL'
            },
            include: {
                department: {
                    select: { name: true }
                },
                user: {
                    select: { username: true }
                }
            }
        });

        const result = resources.map(resource => ({
            ...resource,
            departmentName: resource.department?.name || null,
            username: resource.user.username || null
        }));

        return res.status(200).json(
            new ApiResponse(200, result, "All uploaded resources with status 'WAITING_FOR_APPROVAL' fetched successfully.")
        );
    } catch (error) {
        throw new ApiError(500, "Internal Server Error", error.message);
    }
}


