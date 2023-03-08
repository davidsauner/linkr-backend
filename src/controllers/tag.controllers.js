import { getTags } from "../repositories/tagRepository.js";

export async function getTrending(req, res) {
    try {
      const trendingTags = getTags(); 
      return res.status(200).send(trendingTags.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }