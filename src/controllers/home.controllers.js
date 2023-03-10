import { db } from "../config/data.js";

export async function postPosts(req, res) {
  const { id_usu, link, texto } = req.body;

  try {
    let description = texto.split(" ");
    let tags = [];

    for (i = 0; i < description.length; i++) {
      if (description[i].charAt(0) == "#") {
        let tag = description[i].substring(1);
        let hashtags = await db.query(
          `SELECT * FROM "hashtags" WHERE "tag" = $1`,
          [tag]
        );
        if (hashtags.rows.length == 0) {
          await db.query(
            `INSERT INTO "hashtags" ("tag","timesPosted") VALUES ($1,$2)`,
            [tag, 1]
          );
          hashtags = await db.query(
            `SELECT * FROM "hashtags" WHERE "tag" = $1`,
            [tag]
          );
          tags.push(hashtags.rows[0].id);
        } else {
          await db.query(
            `UPDATE "hashtags" set "timesPosted"=$1 WHERE "tag"=$2`,
            [hashtags.rows[0].timesPosted + 1, tag]
          );
          tags.push(hashtags.rows[0].id);
        }
      }
      hashtags = undefined;
    }

    if (tags === []) {
      await db.query(
        `insert into posts ("userId","url","content") values ($1,$2,$3)`,
        [id_usu, link, texto]
      );
      res.sendStatus(201);
    } else {
      await db.query(
        `insert into posts ("tagId","userId","url","content") values ($1,$2,$3,$4)`,
        [tags, id_usu, link, texto]
      );
      res.sendStatus(201);
    }
  } catch (error) {
    console.log("Erro");
    res.status(500).send(error.message);
  }
}

export async function getPosts(req, res) {
  try {
    const dados = await db.query(`SELECT * FROM "posts"`);
    res.status(201).send(dados.rows);
  } catch (error) {
    console.log("Erro");
    res.status(500).send(error.message);
  }
}
