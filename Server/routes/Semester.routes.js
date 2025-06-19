import Router from "express"
import { verifyJWT } from "../middleware/auth.middleware.js"
import { createSemester, deleteSemester, getSemestersByDepartment, getSemesterById } from "../controller/Semester.Controller.js"


const router = Router()


router.post("/create/:deptId",  verifyJWT, createSemester)
router.delete("/:semId", verifyJWT, deleteSemester)
router.get("/:deptId", verifyJWT, getSemestersByDepartment)
router.get("/getsem/:semId", verifyJWT, getSemesterById)


export default router;


