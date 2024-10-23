// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Table } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { ZRUTableRowAlignE } from "@enums/radixUI";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props";
import type { ZRUShowable } from "@src/types";
interface IZRUTableRow extends ZRUShowable {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  align?: Responsive<ZRUTableRowAlignE>;
}
// #endregion

const ZRUTableRow: React.FC<IZRUTableRow> = ({
  className,
  style,
  align,
  children,
  show = true,
}) => {
  // Return null if show is false
  if (show === false) {
    return null;
  }
  return (
    <Table.Row className={className} style={style} align={align}>
      {children}
    </Table.Row>
  );
};

export default ZRUTableRow;
