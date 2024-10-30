import { LoginFormFieldsEnum, RegisterFormFieldsEnum } from "@enums/formData";
import { z as ZOD } from "zod";

export const registerFormValidationSchema: ZOD.ZodEffects<
  ZOD.ZodObject<
    {
      name: ZOD.ZodString;
      email: ZOD.ZodString;
      password: ZOD.ZodString;
      passwordConfirmation: ZOD.ZodString;
    },
    "strip",
    ZOD.ZodTypeAny,
    {
      name: string;
      email: string;
      password: string;
      passwordConfirmation: string;
    },
    {
      name: string;
      email: string;
      password: string;
      passwordConfirmation: string;
    }
  >,
  {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  },
  {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }
> = ZOD.object({
  [RegisterFormFieldsEnum.name]: ZOD.string()
    .trim()
    .min(1, { message: "Name is Required." })
    .max(255),
  [RegisterFormFieldsEnum.email]: ZOD.string().email().max(255),
  [RegisterFormFieldsEnum.password]: ZOD.string().min(6).max(30),
  [RegisterFormFieldsEnum.passwordConfirmation]: ZOD.string().min(6).max(30),
}).superRefine((values, ctx) => {
  if (
    values[RegisterFormFieldsEnum.passwordConfirmation] !==
    values[RegisterFormFieldsEnum.password]
  ) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: [RegisterFormFieldsEnum.passwordConfirmation],
    });
  }
});

export const loginFormValidationSchema: ZOD.ZodObject<
  {
    email: ZOD.ZodString;
    password: ZOD.ZodString;
  },
  "strip",
  ZOD.ZodTypeAny,
  {
    email: string;
    password: string;
  },
  {
    email: string;
    password: string;
  }
> = ZOD.object({
  [LoginFormFieldsEnum.email]: ZOD.string().email().max(255),
  [LoginFormFieldsEnum.password]: ZOD.string().min(6).max(30),
});
