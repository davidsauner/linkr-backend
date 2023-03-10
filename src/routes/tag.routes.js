import { Router } from "express";
import { getTrending, getTaggedPosts } from "../controllers/tag.controllers.js";

const TagRoutes = Router();

TagRoutes.get("/trending", getTrending);
TagRoutes.get("/hashtag/:id", getTaggedPosts);

export default TagRoutes;
