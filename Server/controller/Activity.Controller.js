import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { PrismaClient } from "../generated/client/client.js"

const prisma = new PrismaClient();


export const getActivities = async (req, res) => {
    try {
        const activities = await prisma.userActivity.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        if (!activities || activities.length === 0) {
            throw new ApiError(404, "No activities found");
        }

        return res.status(200).json(new ApiResponse(200, activities, "Activities fetched successfully"));

    } catch (error) {
        console.error("Error fetching activities:", error);
        throw new ApiError(500, "Internal Server Error");
    }
}

export const createActivity = async (req, res) => {
    try {
        const { activityType } = req.body;
        const resourceId = req.params.resourceId; // Assuming resourceId is passed in the URL
        const userId = req.user.id; // Assuming user ID is available in req.user after authentication   

        if (!userId || !activityType || !resourceId) {
            throw new ApiError(400, "Missing required fields: userId, activityType, or resourceId");
        }

        const existing = await prisma.userActivity.findFirst({
            where: {
                userId: Number(userId),
                resourceId: Number(resourceId),
                type: activityType
            }
        });

        if (existing) {
            return new ApiResponse(401, null, `Resource Already ${activityType}ED`)
        }

        const activity = await prisma.userActivity.create({
            data: {
                userId: Number(userId),
                type: activityType,
                resourceId: Number(resourceId)
            }
        });

        if (!activity) {
            throw new ApiError(500, "Failed to create activity");
        }

        return res.status(201).json(new ApiResponse(201, activity, "Activity created successfully"));

    } catch (error) {
        console.error("Error creating activity:", error);
        throw new ApiError(500, "Internal Server Error");
    }
}

export const deleteActivity = async (req, res) => {
    try {
        const { itemId } = req.params; // Get itemId from route params
        const userId = req.user.id; // Assuming user is authenticated and userId is available

        if (!itemId) {
            throw new ApiError(400, "Missing required parameter: itemId");
        }

        // Check if the resource exists
        const resource = await prisma.resource.findUnique({
            where: { id: Number(itemId) }
        });

        if (!resource) {
            throw new ApiError(404, "Resource not found");
        }

        // Check if a SAVE activity exists for this user and resource
        const activity = await prisma.userActivity.findFirst({
            where: {
                userId: Number(userId),
                resourceId: Number(itemId),
                type: "SAVE"
            }
        });

        if (!activity) {
            throw new ApiError(404, "No SAVE activity found for this resource and user");
        }

        // Delete the SAVE activity
        const deleted = await prisma.userActivity.delete({
            where: { id: activity.id }
        });

        return res.status(200).json(new ApiResponse(200, deleted, "Activity deleted successfully"));
    } catch (error) {
        console.error("Error deleting activity:", error);
        if (error.code === 'P2025') {
            throw new ApiError(404, "Activity not found");
        }
        throw new ApiError(500, "Internal Server Error");
    }
};

export const getActivityByUserId = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is available in req.user after authentication

        if (!userId) {
            throw new ApiError(400, "Missing required field: userId");
        }

        const activities = await prisma.userActivity.findMany({
            where: {
                userId: userId
            },
            include: {
                resource: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });

        if (!activities || activities.length === 0) {
            throw new ApiError(404, "No activities found for this user");
        }

        return res.status(200).json(new ApiResponse(200, activities, "Activities fetched successfully"));

    } catch (error) {
        console.error("Error fetching activities:", error);
        throw new ApiError(500, "Internal Server Error");
    }
}

export const getUserActivityCountByType = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is available in req.user after authentication

        if (!userId) {
            throw new ApiError(400, "Missing required field: userId");
        }

        const activityCount = await prisma.userActivity.groupBy({
            by: ['type'],
            _count: {
                type: true
            },
            where: {
                userId: userId
            }
        });

        if (!activityCount || activityCount.length === 0) {
            throw new ApiError(404, "No activities found for this user");
        }

        console.log("Activity Count:", activityCount);

        return res.status(200).json(new ApiResponse(200, activityCount, "Activity count fetched successfully"));

    } catch (error) {
        console.error("Error fetching activity count:", error);
        throw new ApiError(500, "Internal Server Error");
    }
}

export const getAllActivityCountByType = async (req, res) => {
    try {

        const activityCount = await prisma.userActivity.groupBy({
            by: ['type'],
            _count: {
                type: true
            }
        });

        if (!activityCount || activityCount.length === 0) {
            throw new ApiError(404, "No activities found");
        }

        console.log("All Activity Count:", activityCount);

        return res.status(200).json(new ApiResponse(200, activityCount, "All activity count fetched successfully"));

    } catch (error) {
        console.error("Error fetching activity count:", error);
        throw new ApiError(500, "Internal Server Error");
    }
}

export const getUploadedResourceCount = async (req, res) => {
    try {

        const userId = req.user.id;

        console.log(req.user);


        const uploadedActivity = await prisma.userActivity.groupBy({
            by: ['type'],
            _count: {
                type: true
            },
            where: {
                AND: [
                    {
                        userId: userId
                    },
                    {
                        type: {
                            in: ["UPLOAD"]
                        }
                    }
                ]

            }
        });

        if (!uploadedActivity) {
            throw new ApiError(401, "No Activity Found.")
        }

        return res.status(200).json(
            new ApiResponse(200, uploadedActivity, "Uploaded Resource Count Fetched .")
        )

    } catch (error) {
        throw new ApiError(501, error.message)
    }
}

export const getDownloadedResourceCount = async (req, res) => {
    try {

        const userId = req.user.id;

        const downloadedActivity = await prisma.userActivity.groupBy({
            by: ['type'],
            _count: {
                type: true
            },
            where: {
                AND: [
                    {
                        userId: userId
                    },
                    {
                        type: {
                            in: ["DOWNLOAD"]
                        }
                    }
                ]

            }
        });

        if (!downloadedActivity) {
            throw new ApiError(401, "No Activity Found.")
        }

        return res.status(200).json(
            new ApiResponse(200, downloadedActivity, "Downloaded Resource Count Fetched .")
        )

    } catch (error) {
        throw new ApiError(501, error.message)
    }
}

export const getAllDownloadedResourceCount = async (req, res) => {
    try {

        const downloadedActivity = await prisma.userActivity.groupBy({
            by: ['type'],
            _count: {
                type: true
            },
            where: {
                type: {
                    in: ["DOWNLOAD"]
                }
            }
        });

        if (!downloadedActivity) {
            throw new ApiError(401, "No Activity Found.")
        }

        return res.status(200).json(
            new ApiResponse(200, downloadedActivity, "Downloaded Resource Count Fetched .")
        )

    } catch (error) {
        throw new ApiError(501, error.message)
    }
}

export const getSavedResourceCount = async (req, res) => {
    try {

        const userId = req.user.id;

        const savedActivity = await prisma.userActivity.groupBy({
            by: ['type'],
            _count: {
                type: true
            },
            where: {
                AND: [
                    {
                        userId: userId
                    },
                    {
                        type: {
                            in: ["SAVE"]
                        }
                    }
                ]

            }
        });

        if (!savedActivity) {
            throw new ApiError(401, "No Activity Found.")
        }

        return res.status(200).json(
            new ApiResponse(200, savedActivity, "Saved Resource Count Fetched .")
        )

    } catch (error) {
        throw new ApiError(501, error.message)
    }
}

export const getRecentActivitiesByUser = async (req, res) => {
    try {
        const userId = req.user.id;

        if (!userId) {
            throw new ApiError(400, "Missing required field: userId");
        }

        const uploads = await prisma.userActivity.findMany({
            where: {
                userId: userId,
            },
            include: {
                resource: {
                    select: {
                        id: true,
                        name: true,
                        createdAt: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 5 // adjust as needed for "recent"
        });

        if (!uploads || uploads.length === 0) {
            throw new ApiError(404, "No uploaded resources found for this user");
        }

        // Extract resources from activities and include activity type
        const resources = uploads
            .map(activity => ({
                ...activity.resource,
                activityType: activity.type, // Include the activity type
                createdAt: activity.createdAt
            }))
            .filter(resource => resource !== null);

        return res.status(200).json(
            new ApiResponse(200, resources, "Recent resources fetched successfully")
        );
    } catch (error) {
        console.error("Error fetching recent uploaded resources:", error);
        throw new ApiError(500, "Internal Server Error");
    }
};