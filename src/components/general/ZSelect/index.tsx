// #region ---- Core Imports ----
import React, { useMemo } from "react";

// #endregion

// #region ---- Packages Imports ----
import Select, { type ActionMeta, type MultiValue } from "react-select";
import { isZNonEmptyString } from "zaions-tool-kit";
import { ZClassNames } from "zaions-react-tool-kit";
import { ZBox, ZButton, ZFlex, ZText } from "@src/components/radixUI";

// #endregion

// #region ---- Types Imports ----
import type { ZRSelectOptions } from "@src/types/general";
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUJustifyE,
  ZRUTextAsE,
} from "@src/types/radixUI";
import type { ZRSelectI } from "@src/types/general/ZRSelect";

// #endregion

export const ZRSelect: React.FC<ZRSelectI> = ({
  defaultValue,
  isMulti = false,
  name,
  placeholder,
  isClearable,
  isDisabled,
  isRtl,
  isSearchable,
  options,
  value,
  className,
  classNamePrefix,
  styles,
  components,
  label,
  labelClassName,
  required = false,
  isTouched,
  errorMessage,
  infoText,
  selectClassName,
  menuIsOpen,
  showLabelBtn,
  labelBtnProps,
  onFocus,
  onBlur,
  onChange,
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
    <ZBox className={className}>
      <ZFlex align={ZRUAlignE.center} justify={ZRUJustifyE.between}>
        {label && label?.trim()?.length > 0 ? (
          <ZText
            as={ZRUTextAsE.label}
            size="1"
            className={ZClassNames("text-base block", labelClassName)}
          >
            {label}
            {required ? (
              <ZText
                as={ZRUTextAsE.span}
                className="ms-1"
                color={ZRUColorE.tomato}
              >
                *
              </ZText>
            ) : null}
          </ZText>
        ) : null}

        {showLabelBtn ? (
          <ZButton
            {...labelBtnProps}
            size={labelBtnProps?.size ?? "1"}
            className={ZClassNames("mb-1 me-2", labelBtnProps?.className)}
          >
            {labelBtnProps?.children}
          </ZButton>
        ) : null}
      </ZFlex>

      <Select
        styles={styles}
        defaultValue={defaultValue}
        isMulti={isMulti}
        name={name}
        components={components}
        placeholder={placeholder}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isRtl={isRtl}
        isSearchable={isSearchable}
        options={options ?? []}
        value={value}
        menuIsOpen={menuIsOpen}
        className={ZClassNames(selectClassName, "w-full")}
        classNamePrefix={classNamePrefix}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(value, actionMeta: ActionMeta<ZRSelectOptions>) => {
          if (onChange !== undefined) {
            const _value = value as ZRSelectOptions &
              MultiValue<ZRSelectOptions>;
            onChange(_value, actionMeta);
          }
        }}
      />

      {/* Error */}
      {isTouched && _isError ? (
        <ZText
          as={ZRUTextAsE.span}
          size="1"
          color={ZRUColorE.tomato}
          className="font-medium"
        >
          {errorMessage}
        </ZText>
      ) : null}

      {/* Info */}
      {(!isTouched && isZNonEmptyString(infoText)) ||
      (infoText !== null && infoText !== undefined) ? (
        <ZText
          as={ZRUTextAsE.span}
          size="1"
          color={ZRUColorE.gold}
          className="font-medium"
        >
          {infoText}
        </ZText>
      ) : null}
    </ZBox>
  );
};

export default ZRSelect;
