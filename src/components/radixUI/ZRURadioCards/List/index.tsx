// #region ---- Core Imports ----
import React, { useMemo } from "react";

// #endregion

// #region ---- Packages Imports ----
import { ZClassNames } from "zaions-react-tool-kit";
import { isZNonEmptyString } from "zaions-tool-kit";

// #endregion

// #region ---- Custom Imports ----
import { ZBox, ZRadioCardsGroup, ZRadioCardsItem } from "../..";

// #endregion

// #region ---- Types Imports ----
import { ZRUColorE, ZRUTextAsE } from "@enums/radixUI";
import {
  ZRURadioCardsGroupI,
  ZRURadioCardsItemI,
  ZRUShowable,
} from "@src/types";
import ZRUText from "../../ZRUText";

// #endregion

const ZRURadioCardList: React.FC<
  Omit<ZRURadioCardsGroupI, "children"> & {
    items: Array<
      Omit<ZRURadioCardsItemI, "children"> & {
        label: string;
      }
    >;
    labelClassName?: string;
    label?: string;
    required?: boolean;
    isTouched?: boolean;
    errorMessage?: string;
    infoText?: string;
  } & ZRUShowable
> = ({
  className,
  style,
  asChild,
  size,
  variant,
  color,
  highContrast,
  columns,
  gap,
  defaultValue,
  value,
  items,
  isTouched,
  errorMessage,
  infoText,
  label,
  labelClassName,
  required,
  show = true,
  onChange,
  onValueChange,
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
    <ZBox show={show}>
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

      <ZRadioCardsGroup
        className={ZClassNames(
          "*:w-max justify-start flex *:h-8 flex-wrap",
          className
        )}
        style={style}
        asChild={asChild}
        size={size}
        variant={variant}
        color={color}
        highContrast={highContrast}
        columns={columns}
        gap={gap}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onValueChange={onValueChange}
      >
        {items?.map((el, index) => (
          <ZRadioCardsItem key={index} {...el}>
            {el?.label}
          </ZRadioCardsItem>
        ))}
      </ZRadioCardsGroup>

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
    </ZBox>
  );
};

export default ZRURadioCardList;
