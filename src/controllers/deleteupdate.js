export async function deletePost(req, res) {
    const { id } = req.params;
    const { user } = res.locals;
  
    try {
      const result = await db.query(`SELECT * FROM posts WHERE id = $1`, [id]);
  
      if (result.rowCount === 0) return res.sendStatus(404);
  
      const [post] = result.rows;
  
      if (post.userId !== user.id) return res.sendStatus(401);
  
      await db.query("DELETE FROM posts WHERE id=$1", [id]);
  
      res.sendStatus(204); 
    } catch (error) {
      console.log(error);
      return res.status(500).send(error.message);
    }
}  

export async function updatePost(req, res) {}