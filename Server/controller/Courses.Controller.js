import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { PrismaClient } from "../generated/client/client.js";

const prisma = new PrismaClient();


export const createCourse = async (req, res) => {

    try {
         
        const { name } = req.body;
        const semId = req.params.semId;


        if (!name || !semId) {
            return res.status(400).json(ApiResponse.error("Course name and semester ID are required"));
        }

        // Validate semester ID

        const semester = await prisma.semester.findUnique({
            where: { id: Number(semId) },
        });

       

        if (!semester) {
            throw new ApiError(404, "Semester not found");
        }

        // Check if the course already exists

        const existingCourse = await prisma.course.findFirst({
            where: { name: name },
        });

        if (existingCourse) {
            throw new ApiError(400, "Course already exists");
        }

        // Create the course

        const course = await prisma.course.create({
            data: {
                name: name,
                semesterId: Number(semId),
            },
        });


        return res.status(201).json(
            new ApiResponse(201, course, "Course created successfully")
        )


    } catch (error) {
        throw new ApiError(500, "Internal Server Error", error.message);
    }
}

export const deleteCourse = async (req, res) => {
    try {
        const courseId = req.params.id;

        // Validate course ID
        const course = await prisma.course.findUnique({
            where: { id: Number(courseId) },
        });

        if (!course) {
            throw new ApiError(404, "Course not found");
        }

        // Delete the course
        const deletedCourse = await prisma.course.delete({
            where: { id: Number(courseId) },
        });

        return res.status(200).json(
            new ApiResponse(200, deletedCourse, "Course deleted successfully")
        );

    } catch (error) {
        throw new ApiError(500, "Internal Server Error", error);
    }
}

export const getAllCoursesBySemester = async (req, res) => {
    try {
        const semId = req.params.semId;
        // Validate semester ID 
        const semester = await prisma.semester.findUnique({
            where: { id: Number(semId) },
        });

        if (!semester) {
            throw new ApiError(404, "Semester not found");
        }

        const courses = await prisma.course.findMany({
            where: { semesterId: Number(semId) },
            include: {
                semester: true
            }
        });

        return res.status(200).json(
            new ApiResponse(200, courses, "Courses retrieved successfully")
        );

    } catch (error) {
        throw new ApiError(500, "Internal Server Error", error);
    }
}

export const getCourseById = async (req, res) => {
    try {

        const courseId = req.params.id;
        
        

        // Validate course ID
        const course = await prisma.course.findUnique({
            where: { id: Number(courseId) },
            include: {
                resources: true,
            }
        });

        

        if (!course) {
            throw new ApiError(404, "Course not found");
        }

        return res.status(200).json(
            new ApiResponse(200, course, "Course retrieved successfully")
        );

    } catch (error) {
        throw new ApiError(500, "Internal Server Error", error);
    }
}

export const updateCourse = async (req, res) => {
    try {
        const courseId = req.params.id;
        const { name } = req.body;

        // Validate course ID
        const course = await prisma.course.findUnique({
            where: { id: Number(courseId) },
        });

        if (!course) {
            throw new ApiError(404, "Course not found");
        }

        // Update the course
        const updatedCourse = await prisma.course.update({
            where: { id: Number(courseId) },
            data: { name: name },
        });

        return res.status(200).json(
            new ApiResponse(200, updatedCourse, "Course updated successfully")
        );

    } catch (error) {
        throw new ApiError(500, "Internal Server Error", error);
    }
}