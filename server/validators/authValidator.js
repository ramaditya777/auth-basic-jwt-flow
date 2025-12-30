import Joi from "joi";

//Signup Validator
export const signupSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),

  email: Joi.string().email().required(),

  password: Joi.string().min(4).required(),
});

//Login Validator
export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
