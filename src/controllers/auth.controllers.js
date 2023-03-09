import bcrypt from "bcrypt";
//import { v4 as uuid } from "uuid";
import { db } from "../config/data.js";

export async function createUser(req, res) {
    const { email, password, username, pictureurl } = req.body

    try {
        const existingUser = await db.query(`
            SELECT * FROM user WHERE email = $1
        `, [email])

        if (existingUser.rowCount > 0) return res.sendStatus(409)

        const passwordHash = bcrypt.hashSync(password, 10)

        await db.query(`
            INSERT INTO user (email, password, username, pictureurl)
            VALUES ($1, $2, $3, $4)
      `, [email, passwordHash, username, pictureurl])
      
      res.sendStatus(201)

    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)

    }
}
