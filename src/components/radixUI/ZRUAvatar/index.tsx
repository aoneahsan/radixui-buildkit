// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Avatar } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { ZRURadiusE, ZRUColorE } from "@src/types/radixUI";
import { Responsive } from "@radix-ui/themes/dist/cjs/props";
interface ZRUAvatarI {
  className?: string;
  src?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
  color?: ZRUColorE;
  highContrast?: boolean;
  radius?: ZRURadiusE;
  variant?: "solid" | "soft";
  fallback: NonNullable<React.ReactNode>;
  size?: Responsive<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">;
}
// #endregion

/**
 * A customized Radix Avatar component.
 */
const ZRUAvatar: React.FC<ZRUAvatarI> = (props) => {
  return (
    <Avatar
      {...props}
      variant={props?.variant ?? "solid"}
      radius={props?.radius ?? ZRURadiusE.full}
      color={props?.color ?? ZRUColorE.gray}
    />
  );
};

export default ZRUAvatar;
