import { Router } from "express";
import { deletePost, updatePost } from "../controllers/deleteupdate.js";
import { validateToken } from "../middlewares/validate.token.js";

const PostRoutes= Router();

PostRoutes.delete("/timeline", validateToken, deletePost)
//PostRoutes.update("/timeline", validateToken, updatePost)
export default PostRoutes;

