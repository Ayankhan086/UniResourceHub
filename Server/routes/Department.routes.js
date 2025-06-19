import Router from "express"
import { createDepartment, deleteDepartment, getAllDepartments, getDepartmentById, updateDepartment, getDepartmentBySearch } from "../controller/Department.Controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js"
import { getResourcesBySearch } from "../controller/Resources.Controller.js"

const router = Router()


router.post("/create",  verifyJWT, createDepartment)
router.delete("/:deptId", verifyJWT, deleteDepartment)
router.post("/search", verifyJWT, getDepartmentBySearch)
router.get("/all", verifyJWT, getAllDepartments)
router.get("/:deptId", verifyJWT, getDepartmentById)
router.put("/:deptId", verifyJWT, updateDepartment)

export default router