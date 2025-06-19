import { createActivity, deleteActivity, getActivities, getActivityByUserId,  getAllActivityCountByType, getAllDownloadedResourceCount, getDownloadedResourceCount, getRecentActivitiesByUser,  getSavedResourceCount, getUploadedResourceCount, getUserActivityCountByType } from "../controller/Activity.Controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { Router } from "express";

const router = Router();

router.post("/create_activity/:resourceId", verifyJWT, createActivity);
router.delete("/delete_activity/:itemId", verifyJWT, deleteActivity);
router.get("/get_activity_By_userId", verifyJWT, getActivityByUserId);
router.get("/get_activities", verifyJWT, getActivities);
router.get("/get_activity_By_type_User", verifyJWT, getUserActivityCountByType);
router.get("/get_all_activity_By_type", verifyJWT, getAllActivityCountByType);
router.get("/getuploadedActivity", verifyJWT, getUploadedResourceCount)
router.get("/getdownloadedActivity", verifyJWT, getDownloadedResourceCount)
router.get("/getalldownloadedActivity", verifyJWT, getAllDownloadedResourceCount)
router.get("/getsavedActivity", verifyJWT, getSavedResourceCount)
router.get("/recentActivity", verifyJWT, getRecentActivitiesByUser)

export default router;