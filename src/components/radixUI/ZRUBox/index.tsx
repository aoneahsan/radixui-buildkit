// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Box } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { type Responsive } from "@radix-ui/themes/dist/cjs/props";
import {
  type ZRUAsE,
  type ZRUBoxDisplayE,
  type ZRUStyleI,
} from "@src/types/radixUI";
import ZCan from "@src/components/general/ZCan";
import { ZRUBoxI } from "@src/types";
// #endregion

const ZRUBox: React.FC<ZRUBoxI> = (props) => {
  return (
    <ZCan
      havePermissions={props?.havePermissions}
      checkMode={props?.checkMode}
      returnPermissionDeniedView={props?.returnPermissionDeniedView}
    >
      <Box
        asChild={props.asChild}
        className={props.className}
        style={props.style}
        as={props.as}
        display={props.display}
        onClick={props.onClick}
        p={props.p}
        px={props.px}
        py={props.py}
        pt={props.pt}
        pr={props.pr}
        pb={props.pb}
        pl={props.pl}
        width={props.width}
        minWidth={props.minWidth}
        maxWidth={props.maxWidth}
        height={props.height}
        minHeight={props.minHeight}
        maxHeight={props.maxHeight}
        position={props.position}
        inset={props.inset}
        top={props.top}
        right={props.right}
        bottom={props.bottom}
        left={props.left}
        overflow={props.overflow}
        overflowX={props.overflowX}
        overflowY={props.overflowY}
        flexBasis={props.flexBasis}
        flexShrink={props.flexShrink}
        flexGrow={props.flexGrow}
        gridColumn={props.gridColumn}
        gridColumnStart={props.gridColumnStart}
        gridColumnEnd={props.gridColumnEnd}
        gridRow={props.gridRow}
        gridRowStart={props.gridRowStart}
        gridRowEnd={props.gridRowEnd}
      >
        {props?.children}
      </Box>
    </ZCan>
  );
};

export default ZRUBox;
