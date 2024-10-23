import { ZSideE } from "@enums/general";
import { ZGenericObject } from "../general";

// app vise sidebar interface
export interface ZSidebarI {
  isOpen?: boolean;
  component?: React.FC<unknown>;
  containerClassName?: string;
  rootConStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  componentProps?: ZGenericObject<unknown>;

  //
  width?: string;
  shouldBackdropClose?: boolean;
  side?: ZSideE;
}

// app vise popover interface
export interface ZPopoverI {
  isOpen?: boolean;
  component?: React.FC<unknown>;
  componentProps?: ZGenericObject<unknown>;
  containerClassName?: string;
  width?: string;
  height?: string;
}
