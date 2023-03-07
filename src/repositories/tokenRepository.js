import { db } from "../config/data.js";

export async function getSession(token) {
  return db.query(`SELECT "userId" FROM sessions WHERE token=$1`, [token]);
}
