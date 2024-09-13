// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Checkbox } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { type Responsive } from "@radix-ui/themes/dist/cjs/props";
import type {
  ZRUColorE,
  ZRUShowable,
  ZRUTriggerVariantE,
} from "@src/types/radixUI";
interface ZRUCheckboxI extends ZRUShowable {
  checked?: boolean;
  defaultChecked?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
  variant?: ZRUTriggerVariantE;
  color?: ZRUColorE;
  size?: Responsive<"1" | "2" | "3">;
  disabled?: boolean;
  onChange?: React.FormEventHandler<HTMLButtonElement>;
  onCheckedChange?(checked: boolean): void;
}
// #endregion

/**
 * A customized Radix Checkbox component.
 */
const ZRUCheckbox: React.FC<ZRUCheckboxI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return <Checkbox {...props} />;
};

export default ZRUCheckbox;
