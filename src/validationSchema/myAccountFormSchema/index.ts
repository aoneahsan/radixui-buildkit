import { UserAccountDataFormFieldsEnum } from "@enums/formData";
import { z as ZOD } from "zod";

export const userAccountFormValidationSchema: ZOD.ZodObject<
  {
    name: ZOD.ZodString;
  },
  "strip",
  ZOD.ZodTypeAny,
  {
    name: string;
  },
  {
    name: string;
  }
> = ZOD.object({
  [UserAccountDataFormFieldsEnum.name]: ZOD.string()
    .trim()
    .min(1, { message: "Name is Required." })
    .max(255),
});
