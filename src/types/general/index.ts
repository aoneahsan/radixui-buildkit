import { ReactNode } from "react";

export type { ZCanI } from "./ZCan";
export type { IZImage } from "./ZImage";
export type {
  ZCurrencyI,
  ZPrizeInputOnChange,
  ZPrizeInputStateI,
} from "./ZPrizeInput";
export type { ZRSelectI } from "./ZRSelect";

export type ZGenericObject<T> = Record<string, T>;

export interface ZRSelectOptions {
  readonly value?: string | number;
  readonly label?: ReactNode | string | number;
  readonly color?: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
  readonly className?: string;
  readonly extraData?: string;

  // others
  readonly symbol?: string;
}
