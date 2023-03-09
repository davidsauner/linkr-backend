import { db } from "../config/data.js";

export async function getTags() {
    return db.query(`SELECT "tag" FROM "hashtags" ORDER BY "timesPosted" DESC LIMIT 10;`);
  }