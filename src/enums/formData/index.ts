import { checkForDuplicateEnumValues } from "zaions-tool-kit";

export enum RegisterFormFieldsEnum {
  name = "name",
  email = "email",
  password = "password",
  passwordConfirmation = "passwordConfirmation",
}

export enum LoginFormFieldsEnum {
  email = "email",
  password = "password",
}

export enum UserAccountDataFormFieldsEnum {
  name = "name",
}

export enum ZFormModeE {
  edit = "edit",
  add = "add",
}

// Check for duplicates
checkForDuplicateEnumValues(
  RegisterFormFieldsEnum,
  "Duplicate RegisterFormFieldsEnum value found:"
);
checkForDuplicateEnumValues(
  LoginFormFieldsEnum,
  "Duplicate LoginFormFieldsEnum value found:"
);
checkForDuplicateEnumValues(
  UserAccountDataFormFieldsEnum,
  "Duplicate UserAccountDataFormFieldsEnum value found:"
);
checkForDuplicateEnumValues(ZFormModeE, "Duplicate ZFormModeE value found:");
