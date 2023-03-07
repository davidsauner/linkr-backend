import { Router } from "express";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validate.schema.js";

const AuthRoutes = Router();

export default AuthRoutes;