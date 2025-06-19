import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { PrismaClient } from "../generated/client/client.js";

const prisma = new PrismaClient();


export const createSemester = async (req, res) => {
    try {

        const { number } = req.body;
        const deptId = req.params.deptId;


        const deptExist = await prisma.department.findFirstOrThrow({
            where: {
                id: Number(deptId)
            }
        })

        if (!deptExist) {
            throw new ApiError(402, "Department Does not exist.")
        }


        const existedSem = await prisma.semester.findFirst({
            where: {
                Number: Number(number),
                departmentId: Number(deptId)
            }
        })

        if (existedSem) {
            throw new ApiError(401, "Semester Already Exist.")
        }

        const newSem = await prisma.semester.create({
            data: {
                Number: Number(number),
                departmentId: Number(deptId)
            }
        })

        res.status(200).json(
            new ApiResponse(200, newSem, "Semester Created Successfully.")
        )


    } catch (error) {
        console.error(error);
    }
}

export const deleteSemester = async (req, res) => {
    try {

        const semId = req.params.semId;

        const semester = await prisma.semester.delete({
            where: {
                id: Number(semId)
            }
        })

        res.status(200).json(
            new ApiResponse(200, semester, "Semester deleted successfully.")
        )

    } catch (error) {
        console.error(error);
    }
}

export const getSemestersByDepartment = async (req, res) => {
    try {

        const deptId = req.params.deptId;

        const semesters = await prisma.semester.findMany({
            where: {
                departmentId: Number(deptId)
            }
        })

        res.status(200).json(
            new ApiResponse(200, semesters, "Semesters fetched successfully.")
        )

    } catch (error) {
        console.error(error);
    }
}

export const getSemesterById = async (req, res) => {
    try {

        const semId = req.params.semId;

        const semester = await prisma.semester.findFirstOrThrow({
            where: {
                id: Number(semId)
            }
        })

        res.status(200).json(
            new ApiResponse(200, semester, "Semester fetched successfully.")
        )

    } catch (error) {
        console.error(error);
    }
}