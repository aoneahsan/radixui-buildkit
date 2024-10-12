// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { DataList } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { Responsive } from "@radix-ui/themes/dist/cjs/props";
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUOrientationE,
  ZRUShowable,
  ZRUTrimE,
} from "@src/types";

interface ZRUDataListI extends ZRUShowable {
  orientation?: Responsive<ZRUOrientationE>;
  size?: Responsive<"1" | "2" | "3">;
  trim?: ZRUTrimE;
  className?: string;
  dataList: Array<
    {
      label: React.ReactNode;
      align?: ZRUAlignE;
      className?: string;
      labelProps?: {
        className?: string;
        width?: Responsive<string>;
        minWidth?: Responsive<string>;
        maxWidth?: Responsive<string>;
        color?: ZRUColorE;
        highContrast?: boolean;
      };
      value: React.ReactNode;
      valueProps?: {
        className?: string;
      };
    } & ZRUShowable
  >;
}
// #endregion

const ZRUDataList: React.FC<ZRUDataListI> = ({
  dataList,
  orientation,
  size,
  trim,
  className,
  show = true,
}) => {
  // Return null if show is false
  if (show === false) {
    return null;
  }

  return (
    <DataList.Root
      orientation={orientation}
      size={size}
      trim={trim}
      className={className}
    >
      {dataList?.map((el, index) => {
        if (el?.show === false) {
          return null;
        }
        return (
          <DataList.Item
            align={el?.align}
            key={index}
            className={el?.className}
          >
            <DataList.Label {...el?.labelProps}>{el?.label}</DataList.Label>
            <DataList.Value {...el?.valueProps}>{el?.value}</DataList.Value>
          </DataList.Item>
        );
      })}
    </DataList.Root>
  );
};

export default ZRUDataList;
