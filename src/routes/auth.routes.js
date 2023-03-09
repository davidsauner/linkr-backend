import { Router } from "express";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validate.schema.js";
import { createUser } from "../controllers/auth.controllers.js";

const AuthRoutes = Router();

AuthRoutes.post ("signin", validateSchema(signinSchema), () => {})
AuthRoutes.post ("signup", validateSchema(signupSchema), createUser)

export default AuthRoutes;