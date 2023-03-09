import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRoutes from "./routes/auth.routes.js";
import Homeroutes from "./routes/home.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use([AuthRoutes]);
app.use(Homeroutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`O server está rodando na porta: ${port}`));