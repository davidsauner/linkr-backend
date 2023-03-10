import { Router } from "express";
import { getPosts,postPosts } from "../controllers/home.controllers.js";
import { validateSchema } from "../middlewares/validate.schema.js";
import { homeSchema } from "../schemas/home.schema.js";

const Homeroutes = Router();

Homeroutes.get("/",getPosts)
Homeroutes.post("/",postPosts)

export default Homeroutes;