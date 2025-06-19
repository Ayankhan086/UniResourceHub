import { Router } from "express";
import { createCourse, deleteCourse, getAllCoursesBySemester, getCourseById, updateCourse } from "../controller/Courses.Controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/create/:semId", verifyJWT, createCourse);
router.get("/:semId", verifyJWT, getAllCoursesBySemester);
router.delete("/:id", verifyJWT, deleteCourse);
router.get("/getcoursebyId/:id", verifyJWT, getCourseById);
router.put("/:id", verifyJWT, updateCourse);

export default router;
