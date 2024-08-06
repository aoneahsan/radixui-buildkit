// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Avatar } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----
import { ZSpinner } from "..";

// #endregion

// #region ---- Types Imports ----
import { ZRURadiusE, ZRUColorE, ZRUAvatarVariantE } from "@src/types/radixUI";
import { Responsive } from "@radix-ui/themes/dist/cjs/props";
interface ZRUAvatarI {
  className?: string;
  src?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
  color?: ZRUColorE;
  highContrast?: boolean;
  radius?: ZRURadiusE;
  variant?: ZRUAvatarVariantE;
  fallback: NonNullable<React.ReactNode>;
  loading?: boolean;
  size?: Responsive<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">;
}
// #endregion

/**
 * A customized Radix Avatar component.
 */
const ZRUAvatar: React.FC<ZRUAvatarI> = ({
  className,
  src,
  style,
  asChild,
  color = ZRUColorE.gray,
  highContrast,
  radius = ZRURadiusE.full,
  variant = ZRUAvatarVariantE.solid,
  fallback,
  size,
  loading,
}) => {
  return (
    <Avatar
      className={className}
      src={src}
      style={style}
      asChild={asChild}
      highContrast={highContrast}
      fallback={loading ? <ZSpinner size="3" /> : fallback}
      size={size}
      variant={variant}
      radius={radius}
      color={color}
    />
  );
};

export default ZRUAvatar;
