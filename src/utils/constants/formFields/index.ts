import { ZRUInputTypeE } from "@enums/radixUI";
import { FormFieldsEnum } from "zaions-tool-kit";

export const loginFormFields: {
  readonly email: {
    readonly type: ZRUInputTypeE.email;
    readonly placeholder: "Email";
  };
  readonly password: {
    readonly type: ZRUInputTypeE.password;
    readonly placeholder: "Password";
  };
} = {
  [FormFieldsEnum.email]: {
    type: ZRUInputTypeE.email,
    placeholder: "Email",
  },
  [FormFieldsEnum.password]: {
    type: ZRUInputTypeE.password,
    placeholder: "Password",
  },
} as const;

export const registerFormFields: {
  readonly passwordConfirmation: {
    readonly type: FormFieldsEnum.password;
    readonly placeholder: "Password Confirmation";
  };
  readonly email: {
    readonly type: ZRUInputTypeE.email;
    readonly placeholder: "Email";
  };
  readonly password: {
    readonly type: ZRUInputTypeE.password;
    readonly placeholder: "Password";
  };
  readonly name: {
    readonly type: ZRUInputTypeE.text;
    readonly placeholder: "Name";
  };
} = {
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

export const userAccountDataFormFields: {
  readonly name: {
    readonly type: ZRUInputTypeE.text;
    readonly placeholder: "Name";
  };
} = {
  [FormFieldsEnum.name]: {
    type: ZRUInputTypeE.text,
    placeholder: "Name",
  },
} as const;
