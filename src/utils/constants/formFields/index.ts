import { ZRUInputTypeE } from "@enums/radixUI";
import { FormFieldsEnum } from "zaions-tool-kit";

export const loginFormFields = {
  [FormFieldsEnum.email]: {
    type: ZRUInputTypeE.email,
    placeholder: "Email",
  },
  [FormFieldsEnum.password]: {
    type: ZRUInputTypeE.password,
    placeholder: "Password",
  },
} as const;

export const registerFormFields = {
  [FormFieldsEnum.name]: {
    type: ZRUInputTypeE.text,
    placeholder: "Name",
  },
  ...loginFormFields,
  [FormFieldsEnum.passwordConfirmation]: {
    type: FormFieldsEnum.password,
    placeholder: "Password Confirmation",
  },
} as const;

export const userAccountDataFormFields = {
  [FormFieldsEnum.name]: {
    type: ZRUInputTypeE.text,
    placeholder: "Name",
  },
} as const;
