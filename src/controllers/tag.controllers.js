import { getTags, getPostsByTag } from "../repositories/tagRepository.js";
import { db } from "../config/data.js";

export async function getTrending(req, res) {
  try {
    const trendingTags = await getTags();
    return res.status(200).send(trendingTags.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getTaggedPosts(req, res) {
  const tagId = Number(req.params.id);
  try {
    const posts = await getPostsByTag(tagId);
    res.send(posts.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function teste(req, res) {
  const {tagId, url, content} = req.body;
  try {
    await db.query(
      `INSERT INTO "posts" ("tagId", "url", "content") VALUES($1, $2, $3)`,
      [tagId, url, content]
    );
    res.sendstatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
