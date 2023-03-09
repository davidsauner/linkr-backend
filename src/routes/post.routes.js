import { Router } from "express";
import { deletePost, updatePost } from "../controllers/deleteupdate.js";
import { validateToken } from "../middlewares/validate.token.js";
const router= Router();

router.delete("/timeline", validateToken, deletePost)
router.update("/timeline", validateToken, updatePost)
export default router;

