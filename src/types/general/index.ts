import { ReactNode } from "react";

export { ZCanI } from "./ZCan";
export { IZImage } from "./ZImage";
export {
  ZCurrencyI,
  ZPrizeInputOnChange,
  ZPrizeInputStateI,
} from "./ZPrizeInput";
export { ZRSelectI } from "./ZRSelect";

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
