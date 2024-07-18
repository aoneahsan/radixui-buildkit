// #region ---- Core Imports ----
import React, { useMemo } from "react";

// #endregion

// #region ---- Packages Imports ----
import { Select } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----
import ZRUBox from "../ZRUBox";
import ZRUText from "../ZRUText";
import { ZClassNames } from "zaions-react-tool-kit";

// #endregion

// #region ---- Types Imports ----
import {
  ZRUColorE,
  type ZRUBasicVariantE,
  type ZRURadiusE,
  type ZRUMarginI,
  type ZRUSelectValueI,
  type ZRUSelectContentPositionE,
  ZRUTextAsE,
  ZRUOrientationE,
} from "@src/types/radixUI";
import { Responsive } from "@radix-ui/themes/dist/cjs/props";
import { isZNonEmptyString } from "zaions-tool-kit";

interface ZRUSelectI {
  children?: React.ReactNode;
  label?: string;
  asChild?: boolean;
  className?: string;
  labelClassName?: string;
  style?: Record<string, unknown>;
  size?: Responsive<"1" | "2" | "3">;
  defaultOpen?: boolean;
  defaultValue?: string;
  autoComplete?: string;
  disabled?: boolean;
  name?: string;
  open?: boolean;
  required?: boolean;
  value?: string;
  isTouched?: boolean;
  errorMessage?: string;
  infoText?: string;
  onOpenChange?(open: boolean): void;
  onValueChange?(value: string): void;

  trigger?: {
    variant?: ZRUBasicVariantE;
    color?: ZRUColorE;
    radius?: ZRURadiusE;
    placeholder?: string;
    className?: string;
  } & ZRUMarginI;

  content?: {
    color?: ZRUColorE;
    highContrast?: boolean;
    position?: ZRUSelectContentPositionE;
  };

  options?: Array<ZRUSelectValueI>;
  labelOrientation?: ZRUOrientationE;
  position?: "item-aligned" | "popper";
}
// #endregion

const ZRUSelect: React.FC<ZRUSelectI> = (props) => {
  const _isError = useMemo(
    () =>
      Array.isArray(props?.errorMessage)
        ? props?.errorMessage?.length > 0
        : typeof props?.errorMessage === "string"
        ? isZNonEmptyString(props?.errorMessage)
        : false,
    [props?.errorMessage]
  );

  return (
    <ZRUBox
      className={ZClassNames(props?.className, {
        "flex items-center gap-1":
          props?.labelOrientation === ZRUOrientationE.horizontal,
      })}
    >
      {props?.label !== undefined && props?.label?.trim()?.length > 0 ? (
        <ZRUText
          as={ZRUTextAsE.label}
          size="1"
          className={ZClassNames("block", props?.labelClassName)}
        >
          {props?.label}
          {props?.required ? (
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

      <Select.Root
        size={props.size}
        name={props.name}
        open={props.open}
        value={props.value}
        disabled={props.disabled}
        required={props.required}
        defaultOpen={props.defaultOpen}
        defaultValue={props.defaultValue}
        autoComplete={props.autoComplete}
        onOpenChange={props.onOpenChange}
        onValueChange={props.onValueChange}
      >
        <Select.Trigger {...props?.trigger} />

        <Select.Content {...props?.content} position={props?.position}>
          {props?.options?.map((option, index) => {
            return (
              <Select.Item value={option?.value} key={index}>
                {option?.label}
              </Select.Item>
            );
          })}
        </Select.Content>
      </Select.Root>

      {/* Error */}
      {props?.isTouched && _isError ? (
        <ZRUText
          as={ZRUTextAsE.span}
          size="1"
          color={ZRUColorE.tomato}
          className="font-medium"
        >
          {Array.isArray(props?.errorMessage)
            ? props?.errorMessage[0]
            : props?.errorMessage}
        </ZRUText>
      ) : null}

      {/* Info */}
      {!props?.isTouched && isZNonEmptyString(props?.infoText) ? (
        <ZRUText
          as={ZRUTextAsE.span}
          size="1"
          color={ZRUColorE.gold}
          className="font-medium"
        >
          {props?.infoText}
        </ZRUText>
      ) : null}
    </ZRUBox>
  );
};

export default ZRUSelect;
