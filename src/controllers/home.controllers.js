import { db } from "../config/data.js";

export async function postPosts(req,res){
    
    const { id_usu,link,texto } = req.body

    try {
        await db.query(`insert into posts (user_id,link,"desc") values ('${id_usu}','${link}','${texto}')`)
        res.sendStatus(201)
        
    } catch (error) {
        console.log("Erro");
        res.status(500).send(error.message);
    }
}

export async function getPosts(req,res){

    const {id_usu} = req.body

    try {
        const dados = await db.query(`SELECT * FROM posts where user_id = '${id_usu}'`)
        res.status(201).send(dados.rows);
    } catch (error) {
        console.log("Erro");
        res.status(500).send(error.message);
    }

}