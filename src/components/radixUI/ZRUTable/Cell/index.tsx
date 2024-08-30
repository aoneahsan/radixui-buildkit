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

const ZRUCell: React.FC<IZRUColumnCell> = (props) => {
  return <Table.Cell {...props}>{props?.children}</Table.Cell>;
};

export default ZRUCell;
