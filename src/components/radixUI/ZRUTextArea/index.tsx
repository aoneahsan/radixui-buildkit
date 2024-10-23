// #region ---- Core Imports ----
import React, { useMemo } from "react";

// #endregion

// #region ---- Packages Imports ----
import { TextArea } from "@radix-ui/themes";
import { isZNonEmptyString } from "zaions-tool-kit";

// #endregion

// #region ---- Custom Imports ----
import ZRUBox from "../ZRUBox";
import ZRUText from "../ZRUText";

// #endregion

// #region ---- Types Imports ----
import { type Responsive } from "@radix-ui/themes/dist/cjs/props";
import {
  type ZRURadiusE,
  type ZRUTriggerVariantE,
  ZRUColorE,
  ZRUTextAsE,
} from "@src/enums/radixUI";
interface ZRUTextAreaI {
  className?: string;
  labelClassName?: string;
  textAriaClassName?: string;
  textAriaStyle?: Record<string, unknown>;
  style?: Record<string, unknown>;
  value?: string;
  size?: Responsive<"1" | "2" | "3">;
  variant?: ZRUTriggerVariantE;
  color?: ZRUColorE;
  name?: string;
  radius?: ZRURadiusE;
  required?: boolean;
  label?: string;
  placeholder?: string;
  rows?: number;
  isTouched?: boolean;
  errorMessage?: string;
  infoText?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
}
// #endregion

/**
 * A customized Radix TextArea component.
 */
const ZRUTextArea: React.FC<ZRUTextAreaI> = ({
  className,
  textAriaClassName,
  labelClassName,
  textAriaStyle,
  style,
  value,
  size,
  variant,
  color,
  name,
  radius,
  required,
  label,
  placeholder,
  rows,
  isTouched,
  errorMessage,
  infoText,
  onChange,
  onBlur,
}) => {
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
    <ZRUBox className={className} style={style}>
      {isZNonEmptyString(label) ? (
        <ZRUText as={ZRUTextAsE.label} className={labelClassName}>
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
      <TextArea
        placeholder={placeholder}
        className={textAriaClassName}
        style={textAriaStyle}
        value={value}
        size={size}
        variant={variant}
        color={color}
        name={name}
        radius={radius}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
      />

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

export default ZRUTextArea;
