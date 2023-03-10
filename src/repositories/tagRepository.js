import { db } from "../config/data.js";

export async function getTags() {
  return db.query(
    `SELECT "tag" FROM "hashtags" ORDER BY "timesPosted" DESC LIMIT 10;`
  );
}

export async function getPostsByTag(tagId) {
  return db.query(
    `SELECT * FROM "posts" JOIN "hashtags"."tag" ON "hashtags"."id" = "posts"."tagId" WHERE "posts"."tagId" = $1 ORDER BY "posts"."id" DESC;`,
    [tagId]
  );
}
