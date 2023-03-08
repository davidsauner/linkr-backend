import { Router } from "express";
import { getTrending } from "../controllers/tag.controllers";

const TagRoutes = Router();

TagRoutes.post("/trending", getTrending);

export default Tagroutes;
