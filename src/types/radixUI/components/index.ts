import {
  ZRUAsE,
  ZRUBoxDisplayE,
  ZRUCellJustifyE,
  ZRUColorE,
  ZRUCommonVariantE,
  ZRUInputTypeE,
  ZRURadiusE,
  ZRUVariantE,
} from "@enums/radixUI";
import type { Responsive } from "@radix-ui/themes/props";
import { ZCanI } from "@src/types/general/ZCan";
import type {
  ZRUMarginI,
  ZRUPaddingI,
  ZRUShowable,
  ZRUSizeT,
  ZRUStyleI,
} from "@src/types/radixUI";
import { CSSProperties } from "react";

export interface ZRUButtonI
  extends ZRUMarginI,
    ZRUShowable,
    Omit<ZCanI, "children"> {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
  size?: Responsive<ZRUSizeT>;
  variant?: ZRUVariantE;
  color?: ZRUColorE;
  highContrast?: boolean;
  radius?: ZRURadiusE;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ZRURadioCardsGroupI extends ZRUShowable {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
  size?: Responsive<"1" | "2" | "3">;
  variant?: ZRUCommonVariantE;
  color?: ZRUColorE;
  highContrast?: boolean;
  columns?: Responsive<string>;
  gap?: Responsive<string>;
  defaultValue?: string;
  value?: string | null;
  onChange?: React.FormEventHandler<HTMLDivElement>;
  onValueChange?: (value: string) => void;
}

export interface ZRURadioCardsItemI extends ZRUShowable {
  value: string;
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
}

export interface ZRUBoxI
  extends ZRUStyleI,
    ZRUShowable,
    Omit<ZCanI, "children"> {
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: ZRUAsE;
  display?: Responsive<ZRUBoxDisplayE>;
  onClick?: () => void;
}
export interface ZRUAspectRatioI extends ZRUShowable {
  ratio?: number;
  className?: string;
  children?: React.ReactNode;
}

export interface ZRUSkeletonI {
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
  width?: Responsive<string>;
  minWidth?: Responsive<string>;
  maxWidth?: Responsive<string>;
  height?: Responsive<string>;
  minHeight?: Responsive<string>;
  maxHeight?: Responsive<string>;
}

export interface ZRUInputI extends ZRUShowable {
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
}

export interface IZRUColumnCell extends ZRUPaddingI, ZRUShowable {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  justify?: ZRUCellJustifyE;
  width?: Responsive<string>;
  minWidth?: Responsive<string>;
  maxWidth?: Responsive<string>;
}
