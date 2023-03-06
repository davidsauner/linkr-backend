import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRoutes from "./routes/auth.routes.js";
import UrlRoutes from "./routes/url.routes.js";
import UserRoutes from "./routes/user.routes.js";
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Servidor funfando na porta: ${PORT}`))