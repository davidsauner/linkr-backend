import { Router } from "express";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validate.schema.js";
import {signUp, signIn } from "../controllers/auth.controllers.js";

const AuthRoutes = Router();

AuthRoutes.post ("/signin", validateSchema(signinSchema), signIn)
AuthRoutes.post ("/signup", validateSchema(signupSchema), signUp)

export default AuthRoutes;