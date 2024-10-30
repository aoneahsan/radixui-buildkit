// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Switch } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { Responsive } from "@radix-ui/themes/props";
import {
  type ZRUColorE,
  type ZRURadiusE,
  type ZRUTriggerVariantE,
} from "@src/enums/radixUI";
interface ZRUSwitchI {
  className?: string;
  style?: Record<string, unknown>;
  size?: Responsive<"1" | "2" | "3">;
  variant?: ZRUTriggerVariantE;
  color?: ZRUColorE;
  highContrast?: boolean;
  radius?: ZRURadiusE;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.FormEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}
// #endregion

/**
 * A customized Radix Switch component.
 */
const ZRUSwitch: React.FC<ZRUSwitchI> = (props) => {
  return <Switch {...props} />;
};

export default ZRUSwitch;
