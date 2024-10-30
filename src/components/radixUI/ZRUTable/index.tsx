// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Table } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { ZRUTableLayoutE, ZRUTableVariantE } from "@enums/radixUI";
import type { Responsive } from "@radix-ui/themes/props";
import type { ZRUShowable } from "@src/types";
interface IZRUTable extends ZRUShowable {
  children?: React.ReactNode;
  size?: Responsive<"1" | "2" | "3">;
  variant?: ZRUTableVariantE;
  layout?: ZRUTableLayoutE;
  lang?: string;
  className?: string;
  style?: Record<string, unknown>;
}
// #endregion

const ZRUTable: React.FC<IZRUTable> = ({
  size,
  variant,
  layout,
  lang,
  className,
  style,
  children,
  show = true,
}) => {
  // Return null if show is false
  if (show === false) {
    return null;
  }

  return (
    <Table.Root
      size={size}
      variant={variant}
      layout={layout}
      lang={lang}
      className={className}
      style={style}
    >
      {children}
    </Table.Root>
  );
};

export default ZRUTable;
