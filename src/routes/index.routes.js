import {Router} from "express";
import PostRoutes from "./post.routes.js"
import AuthRoutes from "./auth.routes.js"
import TagRoutes from "./tag.routes.js"

const router = Router();

router.use(AuthRoutes);
router.use(PostRoutes);
router.use(TagRoutes)

export default router;
