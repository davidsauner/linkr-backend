import joi from "joi";

export const homeSchema = joi.object({
  id_usu: joi.number().required(),
  link: joi.string().required(),
  texto: joi.string()
});