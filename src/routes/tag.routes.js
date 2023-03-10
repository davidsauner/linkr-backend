import { Router } from "express";
import { getTrending, getTaggedPosts, teste } from "../controllers/tag.controllers.js";

const TagRoutes = Router();

TagRoutes.get("/trending", getTrending);
TagRoutes.get("/hashtag/:id", getTaggedPosts);
TagRoutes.post("/teste", teste)

export default TagRoutes;
