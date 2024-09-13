// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import type { Responsive } from "@radix-ui/themes/dist/cjs/props";
import type { ZRUCalloutVariantE, ZRUColorE, ZRUShowable } from "@src/types";
interface IZRUCallout extends ZRUShowable {
  asChild?: boolean;
  className?: string;
  size?: Responsive<"1" | "2" | "3">;
  variant?: ZRUCalloutVariantE;
  color?: ZRUColorE;
  highContrast?: boolean;
  icon?: React.ReactNode;
  content?: React.ReactNode;
  showIcon?: boolean;
  contentClassName?: string;
  iconClassName?: string;
}
// #endregion

const ZRUCallout: React.FC<IZRUCallout> = ({
  asChild,
  size,
  variant,
  color,
  highContrast,
  icon,
  content,
  className,
  showIcon = true,
  contentClassName,
  iconClassName,
  show = true,
}) => {
  // Return null if show is false
  if (show === false) {
    return null;
  }
  return (
    <Callout.Root
      className={className}
      asChild={asChild}
      size={size}
      variant={variant}
      color={color}
      highContrast={highContrast}
    >
      {showIcon ? (
        <Callout.Icon className={iconClassName}>
          {icon ?? <InfoCircledIcon />}
        </Callout.Icon>
      ) : null}
      <Callout.Text className={contentClassName}>{content}</Callout.Text>
    </Callout.Root>
  );
};

export default ZRUCallout;
