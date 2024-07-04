// #region ---- Core Imports ----
import React, { useCallback, useMemo, useState } from "react";

// #endregion

// #region ---- Packages Imports ----
import { TextField } from "@radix-ui/themes";
import { isZNonEmptyString } from "zaions-tool-kit";
import { ZClassNames } from "zaions-react-tool-kit";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

// #endregion

// #region ---- Custom Imports ----
import ZRUBox from "../ZRUBox";
import ZRUText from "../ZRUText";

// #endregion

// #region ---- Types Imports ----
import { Responsive } from "@radix-ui/themes/dist/cjs/props";
import {
  ZRUTextAsE,
  ZRUColorE,
  type ZRURadiusE,
  ZRUInputTypeE,
  ZRUSideE,
  ZRUVariantE,
} from "@src/types/radixUI";
import ZRUInputSlot from "./Slot";
import ZRUIconButton from "../ZRUIconButton";

type ZRUInputI = {
  children?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  style?: Record<string, unknown>;
  value?: string | number;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  size?: Responsive<"1" | "2" | "3">;
  color?: ZRUColorE;
  radius?: ZRURadiusE;
  isTouched?: boolean;
  errorMessage?: string;
  infoText?: string;
  label?: string;
  name?: string;
  type?: ZRUInputTypeE;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

// #endregion

/**
 * A customized Radix Input component.
 */
const ZRUInput: React.FC<ZRUInputI> = ({
  children,
  className,
  inputClassName,
  labelClassName,
  style,
  value,
  disabled,
  required,
  placeholder,
  size = "3",
  color,
  radius,
  isTouched,
  errorMessage,
  infoText,
  label,
  name,
  type,
  onChange,
  onBlur,
}) => {
  // if type is password
  const [showPassword, setShowPassword] = useState(false);

  // const _value = useMemo(
  //   () =>
  //     type === ZRUInputTypeE.password
  //       ? showPassword
  //         ? value
  //         : "*".repeat(String(value)?.length ?? 0)
  //       : value,
  //   [type, value, showPassword]
  // );

  const _type = useMemo(
    () =>
      type === ZRUInputTypeE.password
        ? showPassword
          ? ZRUInputTypeE.text
          : type
        : type,
    [type, showPassword]
  );

  const _isError = useMemo(
    () =>
      Array.isArray(errorMessage)
        ? errorMessage?.length > 0
        : typeof errorMessage === "string"
        ? isZNonEmptyString(errorMessage)
        : false,
    [errorMessage]
  );

  return (
    <ZRUBox className={className}>
      {isZNonEmptyString(label) ? (
        <ZRUText as={ZRUTextAsE.label} className={ZClassNames(labelClassName)}>
          {label}
          {required ? (
            <ZRUText
              as={ZRUTextAsE.span}
              className="ms-1"
              color={ZRUColorE.tomato}
            >
              *
            </ZRUText>
          ) : null}
        </ZRUText>
      ) : null}
      <TextField.Root
        className={ZClassNames(inputClassName, {
          "z-date-input": type === ZRUInputTypeE.date,
        })}
        style={style}
        value={value}
        disabled={disabled}
        // required={required}
        placeholder={placeholder}
        size={size}
        color={color}
        radius={radius}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        type={_type}
      >
        {children}
        {type === ZRUInputTypeE.password ? (
          <ZRUInputSlot side={ZRUSideE.right}>
            <ZRUIconButton
              variant={ZRUVariantE.ghost}
              onClick={() => {
                setShowPassword((oldValue) => !oldValue);
              }}
            >
              {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </ZRUIconButton>
          </ZRUInputSlot>
        ) : null}
      </TextField.Root>

      {/* Error */}
      {isTouched && _isError ? (
        <ZRUText
          as={ZRUTextAsE.span}
          size="1"
          color={ZRUColorE.tomato}
          className="font-medium"
        >
          {Array.isArray(errorMessage) ? errorMessage[0] : errorMessage}
        </ZRUText>
      ) : null}

      {/* Info */}
      {!isTouched && isZNonEmptyString(infoText) ? (
        <ZRUText
          as={ZRUTextAsE.span}
          size="1"
          color={ZRUColorE.gold}
          className="font-medium"
        >
          {infoText}
        </ZRUText>
      ) : null}
    </ZRUBox>
  );
};

export default ZRUInput;
