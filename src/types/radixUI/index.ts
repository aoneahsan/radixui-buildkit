import { ZRUOverflowE, ZRUPositionE } from "@enums/radixUI";
import { Responsive } from "@radix-ui/themes/props";

// #region ===== Interfaces =====
export interface ZRUStyleI {
  p?: Responsive<string>;
  px?: Responsive<string>;
  py?: Responsive<string>;
  pt?: Responsive<string>;
  pr?: Responsive<string>;
  pb?: Responsive<string>;
  pl?: Responsive<string>;
  width?: Responsive<string>;
  minWidth?: Responsive<string>;
  maxWidth?: Responsive<string>;
  height?: Responsive<string>;
  minHeight?: Responsive<string>;
  maxHeight?: Responsive<string>;
  position?: Responsive<ZRUPositionE>;
  inset?: Responsive<string>;
  top?: Responsive<string>;
  right?: Responsive<string>;
  bottom?: Responsive<string>;
  left?: Responsive<string>;
  overflow?: Responsive<ZRUOverflowE>;
  overflowX?: Responsive<ZRUOverflowE>;
  overflowY?: Responsive<ZRUOverflowE>;
  flexBasis?: Responsive<string>;
  flexShrink?: Responsive<string>;
  flexGrow?: Responsive<string>;
  gridColumn?: Responsive<string>;
  gridColumnStart?: Responsive<string>;
  gridColumnEnd?: Responsive<string>;
  gridRow?: Responsive<string>;
  gridRowStart?: Responsive<string>;
  gridRowEnd?: Responsive<string>;
}

export interface ZRUMarginI {
  m?: Responsive<string>;
  mx?: Responsive<string>;
  my?: Responsive<string>;
  mt?: Responsive<string>;
  mr?: Responsive<string>;
  mb?: Responsive<string>;
  ml?: Responsive<string>;
}

export interface ZRUPaddingI {
  p?: Responsive<string>;
  px?: Responsive<string>;
  py?: Responsive<string>;
  pt?: Responsive<string>;
  pr?: Responsive<string>;
  pb?: Responsive<string>;
  pl?: Responsive<string>;
}

export interface ZRUSelectValueI {
  value: string;
  label: string;
}
// #endregion

// #region ===== Types =====

/**
 * Type representing the responsive value of radix ui elements.
 */
export type ResponsiveT<T> = T | Record<string, T>;

/**
 * Type representing the size of radix ui button element.
 */
export type ZRUSizeT = "1" | "2" | "3" | "4";

/**
 * Type representing the size of radix ui button element.
 */
export type ZRUTextSizeT = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

/**
 * Type representing the margin of radix ui elements.
 */
export type ZRUMarginT =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "-1"
  | "-2"
  | "-3"
  | "-4"
  | "-5"
  | "-6"
  | "-7"
  | "-8"
  | "-9";

export interface ZRUShowable {
  show?: boolean;
}

// #endregion
