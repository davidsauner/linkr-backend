import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { db } from "../config/data.js";

export async function signUp(req, res) {
  const { email, password, username, pictureurl } = req.body;

  try {
    const existingUser = await db.query(
      `
        SELECT * FROM "user" WHERE "email" = $1
      `,
      [email]
    );

    if (existingUser.rowCount > 0) return res.sendStatus(409);

    const passwordHash = bcrypt.hashSync(password, 10);

    await db.query(
      `
        INSERT INTO "user" ("email", "password", "username", "pictureUrl")
        VALUES ($1, $2, $3, $4)
      `,
      [email, passwordHash, username, pictureurl]
    );

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  const user = await db.query(
    `SELECT * FROM "user" WHERE "email" = $1 `,
    [email]
  );
  if (user.rows.length == 0) {
    return res.sendStatus(401);
  }

  if (bcrypt.compareSync(password, user.rows[0].password)) {
    const token = uuid();
    await db.query(
      `
     INSERT INTO sessions (token, "userId") VALUES ($1, $2)`,
      [token, user.rows[0].id]
    );
    return res.send({ token });
  }

  res.sendStatus(401);
}
