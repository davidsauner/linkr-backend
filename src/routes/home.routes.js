import { Router } from "express";
import { getPosts,postPosts } from "../controllers/home.controllers.js";
import { validateSchema } from "../middlewares/validate.schema.js";
import { homeSchema } from "../schemas/home.schema.js";

const Homeroutes = Router();

Homeroutes.get("/posts",getPosts)
Homeroutes.post("/posts",postPosts)

export default Homeroutes;