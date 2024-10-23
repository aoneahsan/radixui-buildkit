import { checkForDuplicateEnumValues } from "zaions-tool-kit";

export enum ZPermissionCheckModeEnum {
  every = "every", // user must have every permissions that have passed.
  any = "any", // user must have any permissions that have passed.
}

export enum ZSideE {
  start = "start",
  end = "end",
}

// Check for duplicates
checkForDuplicateEnumValues(
  ZPermissionCheckModeEnum,
  "Duplicate ZPermissionCheckModeEnum value found:"
);

checkForDuplicateEnumValues(ZSideE, "Duplicate ZSideE value found:");
