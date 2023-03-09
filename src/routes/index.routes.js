import {Router} from "express";
import {postRouter} from "./post.routes.js"

const router = Router();

router.use(postRouter);

export default router;