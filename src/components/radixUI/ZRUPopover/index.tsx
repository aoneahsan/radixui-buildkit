// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Popover } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { type Responsive } from "@radix-ui/themes/dist/cjs/props";
import { type ZRUShowable } from "@src/types";
interface ZRUPopoverI extends ZRUShowable {
  children?: React.ReactNode;
  disabled?: boolean;
  asChild?: boolean;
  className?: string;
  size?: Responsive<"1" | "2" | "3" | "4">;
  width?: Responsive<string>;
  maxWidth?: Responsive<string>;
  minWidth?: Responsive<string>;
  height?: Responsive<string>;
  maxHeight?: Responsive<string>;
  minHeight?: Responsive<string>;
  highContrast?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
  trigger?: {
    children?: React.ReactNode;
  };
}
// #endregion

/**
 * A customized Radix popover Close component.
 */
const ZRUPopover: React.FC<ZRUPopoverI> = ({
  children,
  asChild,
  className,
  size,
  width,
  maxWidth = "28.125rem",
  minWidth,
  height,
  maxHeight,
  minHeight,
  open,
  defaultOpen,
  onOpenChange,
  show = true,
  trigger = {
    children: null,
  },
}) => {
  // Return null if show is false
  if (show === false) {
    return null;
  }
  return (
    <Popover.Root
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
    >
      {trigger?.children !== null &&
      trigger?.children !== undefined &&
      trigger?.children !== false ? (
        <Popover.Trigger>
          <button className="focus:outline-none">{trigger?.children}</button>
        </Popover.Trigger>
      ) : null}

      <Popover.Content
        maxWidth={maxWidth}
        className={className}
        size={size}
        width={width}
        maxHeight={maxHeight}
        minHeight={minHeight}
        minWidth={minWidth}
        height={height}
        asChild={asChild}
      >
        {children}
      </Popover.Content>
    </Popover.Root>
  );
};

export default ZRUPopover;
