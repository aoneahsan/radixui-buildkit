// #region ---- Core Imports ----
import React, { useCallback, useEffect, useState } from "react";

// #endregion

// #region ---- Packages Imports ----
import {
  ZBox,
  ZFlex,
  ZInput,
  ZInputSlot,
  ZSelect,
  ZText,
} from "@src/components/radixUI";
import { ZClassNames } from "zaions-react-tool-kit";

// #endregion

// #region ---- Custom Imports ----
import ZCurrenciesData from "@src/data/currencies.data";
import { defaultCurrency } from "@utils/constants";

// #endregion

// #region ---- Types Imports ----
import {
  ZPrizeInputOnChange,
  ZPrizeInputStateI,
  ZRUAlignE,
  ZRUColorE,
  ZRUTextAsE,
} from "@src/types";

export interface ZPrizeInputI {
  onChange?: ZPrizeInputOnChange;
  value?: ZPrizeInputStateI;
  className?: string;
  labelClassName?: string;
  required?: boolean;
  isTouched?: boolean;
  errorMessage?: string;
  infoText?: string;
}
// #endregion

const ZPrizeInput: React.FC<ZPrizeInputI> = ({
  onChange,
  value,
  className,
  labelClassName,
  required = false,
  isTouched = true,
  errorMessage,
  infoText,
}) => {
  const [compState, setCompState] = useState<ZPrizeInputStateI>({
    currency: defaultCurrency,
    prize: "0",
  });

  const handleCurrencyChange = useCallback(
    (newValue: string) => {
      const selectedCurrency = ZCurrenciesData.find(
        (currency) => currency?.value === newValue
      );
      if (selectedCurrency) {
        const updatedState = {
          ...compState,
          currency: selectedCurrency,
        };
        setCompState(() => updatedState);
        if (onChange) {
          onChange(updatedState);
        }
      }
    },
    [compState, onChange]
  );

  const handlePrizeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const updatedState = {
        ...compState,
        prize: e?.target?.value,
      };
      setCompState(() => updatedState);
      if (onChange) {
        onChange(updatedState);
      }
    },
    [compState, onChange]
  );

  useEffect(() => {
    if (value !== undefined && value !== null) {
      setCompState(() => ({
        ...value,
      }));
    }
  }, []);

  return (
    <ZBox className={ZClassNames(className)}>
      <ZText
        as={ZRUTextAsE.label}
        className={ZClassNames(labelClassName, "maxSm:!text-sm")}
      >
        Prize
        {required ? (
          <ZText as={ZRUTextAsE.span} className="ms-1" color={ZRUColorE.tomato}>
            *
          </ZText>
        ) : null}
      </ZText>
      <ZFlex align={ZRUAlignE.start} gap="1" className="maxSm:flex-col">
        <ZSelect
          size="3"
          className="maxSm:w-full sm:w-20"
          options={ZCurrenciesData}
          value={compState?.currency?.value}
          triggerClassName="w-full"
          onValueChange={handleCurrencyChange}
        />
        <ZInput
          size="3"
          className="flex-1 maxSm:w-full"
          isTouched={isTouched}
          errorMessage={errorMessage}
          infoText={infoText} 
          onChange={handlePrizeChange}
        >
          <ZInputSlot>
            <ZText className="ps-1">{compState?.currency?.symbol}</ZText>
          </ZInputSlot>
        </ZInput>
      </ZFlex>
    </ZBox>
  );
};

export default ZPrizeInput;
