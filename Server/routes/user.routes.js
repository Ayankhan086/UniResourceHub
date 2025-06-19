import { Router } from "express";
import { getAllUsersCount, loginUser, logoutUser, registerUser } from "../controller/User.Controller.js";
import {verifyJWT} from "../middleware/auth.middleware.js"


const router = Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/logout", verifyJWT, logoutUser)
router.get("/all", verifyJWT, getAllUsersCount)

export default router;