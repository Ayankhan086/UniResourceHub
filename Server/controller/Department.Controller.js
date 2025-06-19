import { PrismaClient } from "../generated/client/client.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const prisma = new PrismaClient()

export const createDepartment = async (req, res) => {

    try {

        const { name } = req.body

        let tags = [];
        if (req.body.tags) {
            tags = req.body.tags.split(',').map(tag => tag.trim());
        }
        // console.log(tags);

        if (!name) {
            throw new ApiError(400, "Name is required.")
        }




        const Dept = await prisma.department.create({
            data: {
                name: name,
                tags: tags
            }
        })

        res.status(200).json(
            new ApiResponse(200, Dept, "Department Created Successfully.")
        )

    } catch (error) {
        console.error(error);
    }
}

export const deleteDepartment = async (req, res) => {
    try {
        const { deptId } = req.params

        const department = await prisma.department.delete({
            where: {
                id: Number(deptId)
            }
        })

        res.status(200).json(
            new ApiResponse(200, department, "department deleted")
        )

    } catch (error) {
        console.error(error);
    }
}

export const getAllDepartments = async (req, res) => {
    try {
        const departments = await prisma.department.findMany({
            include: {
                _count: {
                    select: {
                        courses: true,
                        resources: true,
                    },
                },
                resources: {
                    where: {
                        publishStatus: 'PUBLISHED',
                    },
                },
            },
        });

        const departmentsWithPublishedResourceCount = departments.map(department => ({
            ...department,
            publishedResourceCount: department.resources.length,
            _count: {
                ...department._count,
                resources: undefined // Remove the original resources count
            },
            resources: undefined // Remove the resources array
        }));

        res.status(200).json(
            new ApiResponse(200, departmentsWithPublishedResourceCount, "All Departments")
        );
    } catch (error) {
        console.error(error);
        throw new ApiError(500, "Internal Server Error");
    }
}

export const getDepartmentById = async (req, res) => {
    try {

        const deptId = req.params.deptId

        if (!deptId) {
            throw new ApiError(400, "Department ID is required.")
        }

        const department = await prisma.department.findFirst({
            where: {
                id: Number(deptId)
            },
            include: {
                semesters: true // Include related semesters if needed
            }
        })

        if (!department) {
            throw new ApiError(404, "Department not found.")
        }

        res.status(200).json(
            new ApiResponse(200, department, "Department found")
        )

    } catch (error) {
        console.error(error);
    }
}

export const updateDepartment = async (req, res) => {
    try {
        const { deptId } = req.params
        const { name } = req.body

        if (!deptId || !name) {
            throw new ApiError(400, "Department ID and name are required.")
        }

        const updatedDepartment = await prisma.department.update({
            where: {
                id: Number(deptId)
            },
            data: {
                name: name
            }
        })

        res.status(200).json(
            new ApiResponse(200, updatedDepartment, "Department updated successfully.")
        )

    } catch (error) {
        console.error(error);
    }
}

export const getDepartmentBySearch = async (req, res) => {

    try {

        const searchQuery = req.body.searchQuery;

        // console.log(searchQuery);


        const departments = await prisma.department.findMany({
            where: {
                OR: [
                    {
                        tags: {
                            has: searchQuery
                        }
                    }
                ]
            },
            include: {
                _count: {
                    select: {
                        courses: true,
                        resources: true
                    }
                }
            }
        });

        if (!departments || departments.length === 0) {
            throw new ApiError(401, "No Resource Found.")
        }

        return res.status(200).json(
            new ApiResponse(200, departments, 'Resources fetched successfully')
        );

    } catch (error) {
        throw new ApiError(500, error.message);
    }
}