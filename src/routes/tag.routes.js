import { Router } from "express";
import { getTrending } from "../controllers/tag.controllers.js";

const TagRoutes = Router();

TagRoutes.get("/trending", getTrending);

export default TagRoutes;
