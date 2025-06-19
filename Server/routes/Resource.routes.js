import Router from 'express';
import { verifyJWT } from "../middleware/auth.middleware.js"
import { upload } from '../middleware/multer.middleware.js';
import { createResource, deleteResource, getAllResourcesCount, getAllUploadedResources, getResources, getResourcesBySearch, getSavedResourcesOfUser, toggleResourcePublicationStatus, UpdateResource } from '../controller/Resources.Controller.js';

const router = Router();

router.post('/upload/:deptId', verifyJWT, upload.fields([{ name: 'file', maxCount: 1 }, { name: 'image', maxCount: 1 }]), createResource);
router.get("/getresources/:deptId", verifyJWT, getResources);
router.delete("/deleteresource/:resourceId", verifyJWT, deleteResource);
router.put("/togglePublication/:resourceId", verifyJWT, toggleResourcePublicationStatus)
router.post("/search/:deptId", verifyJWT, getResourcesBySearch)
router.post("/update/:resourceId", verifyJWT, UpdateResource)
router.get("/getSavedResources", verifyJWT, getSavedResourcesOfUser)
router.get("/all", verifyJWT, getAllResourcesCount)
router.get("/allwaitingresources", verifyJWT, getAllUploadedResources)


export default router;