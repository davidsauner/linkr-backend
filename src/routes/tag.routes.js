import { Router } from "express";
import { getTrending } from "../controllers/tag.controllers";

const TagRoutes = Router();

TagRoutes.get("/trending", getTrending);

export default Tagroutes;
