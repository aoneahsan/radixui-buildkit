// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Text } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { type Responsive } from "@radix-ui/themes/dist/cjs/props";
import ZCan from "@src/components/general/ZCan";
import {
  type ZRUColorE,
  type ZRUGeneralAlignE,
  type ZRUTextAsE,
  type ZRUTrimE,
  type ZRUWeightE,
  type ZRUWrapE,
} from "@src/enums/radixUI";
import type { ZCanI, ZRUMarginI, ZRUShowable, ZRUTextSizeT } from "@src/types";
interface ZRUTextI extends ZRUMarginI, ZRUShowable, Omit<ZCanI, "children"> {
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
  style?: Record<string, unknown>;
  as?: ZRUTextAsE;
  size?: Responsive<ZRUTextSizeT>;
  weight?: Responsive<ZRUWeightE>;
  align?: Responsive<ZRUGeneralAlignE>;
  trim?: Responsive<ZRUTrimE>;
  truncate?: boolean;
  wrap?: Responsive<ZRUWrapE>;
  color?: ZRUColorE;
  highContrast?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
// #endregion

const ZRUText: React.FC<ZRUTextI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return (
    <ZCan
      roles={props?.roles}
      permissions={props?.permissions}
      checkMode={props?.checkMode}
      returnPermissionDeniedView={props?.returnPermissionDeniedView}
    >
      <Text
        asChild={props.asChild}
        className={props.className}
        style={props.style}
        as={props.as}
        size={props.size}
        weight={props.weight}
        align={props.align}
        trim={props.trim}
        truncate={props.truncate}
        wrap={props.wrap}
        color={props.color}
        highContrast={props.highContrast}
        onClick={props.onClick}
      >
        {props?.children}
      </Text>
    </ZCan>
  );
};

export default ZRUText;
