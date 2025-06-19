import { PrismaClient } from "../generated/client/client.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const prisma = new PrismaClient()


const registerUser = async (req, res) => {


    try {

        const { username, email, password } = req.body

        if ([email, username, password].some((field) => field?.trim() === "")) {
            throw new ApiError(402, "All fields are required.")
        }



        const existedUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: username },
                    { email: email }
                ]
            }
        })


        const hashedPassword = await bcrypt.hash(password, 10)



        if (existedUser) {
            throw new ApiError(401, "User already existed.")
        }




        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            },
            select: {
                id: true,
                username: true,
                email: true,
                createdAt: true, // add other fields you want to return
                // password: false // password is excluded by not listing it
            }
        })

        return res.status(200)
            .json(
                new ApiResponse(200, user, "User Created.")
            )

    } catch (error) {
        console.error(error);
        throw new ApiError(501, "Internal Server Error.")
    }
}

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body



        const loggedInUser = await prisma.user.findUnique({
            where: {
                email: email
            },
            select: {
                id: true,
                email: true,
                createdAt: true, // add other fields you want to return
                password: true 
            }
        })

        if (!loggedInUser) {
            throw new ApiError(401, "User does not exist.")
        }

        const isPasswordCorrect = await bcrypt.compare(password, loggedInUser.password)

        if (!isPasswordCorrect) {
            throw new ApiError(401, "Email or Password is Incorrect.")
        }

        const accessToken = jwt.sign(
            {
                email: email,
                password: password
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }
        )

        const options = {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
        }

        return res.status(200)
            .cookie("accessToken", accessToken, options)
            .json(
                new ApiResponse(200,
                    {
                        user: loggedInUser, accessToken
                    },
                    "User Logged In.")
            )


    } catch (error) {
        console.error(error);
        throw new ApiError(501, "Internal Server Error.")
    }

}

const logoutUser = async (req, res) => {
    try {

        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            throw new ApiError(401, "You are not logged in.")
        }

        const blacklistToken = await prisma.blackListedToken.create({
            data: {
                token: accessToken
            }
        })

        return res.status(200)
            .cookie("accessToken", "", { expires: new Date(0) })
            .json(
                new ApiResponse(200, blacklistToken, "User Logged Out.")
            )

    } catch (error) {
        console.error(error);
        throw new ApiError(501, "Internal Server Error.")
    }
}

const getAllUsersCount = async (req, res) => {
     try {
        const AllUsersCount = await prisma.user.findMany()

        return res.status(200).json(
            new ApiResponse(200, AllUsersCount, "All Users Count Fetched.")
        )

     } catch (error) {
        throw new ApiError(501, "Internal Server Error", error)
     }
}




export {
    registerUser,
    loginUser,
    logoutUser,
    getAllUsersCount
}