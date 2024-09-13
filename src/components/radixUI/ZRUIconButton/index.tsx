// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { IconButton } from "@radix-ui/themes";

// #endregion

// #region ---- Types Imports ----
import type { Responsive } from "@radix-ui/themes/dist/cjs/props";
import type {
  ZRUColorE,
  ZRURadiusE,
  ZRUShowable,
  ZRUSizeT,
  ZRUVariantE,
} from "@src/types/radixUI";
interface ZRUIconButtonI extends ZRUShowable {
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
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
// #endregion

/**
 * A customized Radix Icon Button component.
 */
const ZRUIconButton: React.FC<ZRUIconButtonI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return (
    <IconButton type="button" {...props}>
      {props?.children}
    </IconButton>
  );
};

export default ZRUIconButton;
