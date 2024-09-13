// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Table } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import type { IZRUColumnCell } from "@src/types";

// #endregion

const ZRURowHeaderCell: React.FC<IZRUColumnCell> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return (
    <Table.RowHeaderCell {...props}>{props?.children}</Table.RowHeaderCell>
  );
};

export default ZRURowHeaderCell;
