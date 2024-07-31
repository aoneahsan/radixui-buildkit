// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Button } from "@radix-ui/themes";
import { ZClassNames } from "zaions-react-tool-kit";

// #endregion

// #region ---- Types Imports ----
import { ZRUButtonI } from "@src/types";
import ZCan from "@src/components/general/ZCan";

// #endregion

/**
 * A customized Radix Button component.
 */
const ZRUButton: React.FC<ZRUButtonI> = (props) => {
  return (
    <ZCan
      havePermissions={props?.havePermissions}
      checkMode={props?.checkMode}
      returnPermissionDeniedView={props?.returnPermissionDeniedView}
    >
      <Button
        m={props.m}
        mx={props.mx}
        my={props.my}
        mt={props.mt}
        mr={props.mr}
        mb={props.mb}
        ml={props.ml}
        style={props.style}
        asChild={props.asChild}
        size={props.size}
        variant={props.variant}
        color={props.color}
        highContrast={props.highContrast}
        radius={props.radius}
        loading={props.loading}
        type={props.type}
        onClick={props.onClick}
        disabled={props?.disabled || props?.loading}
        className={ZClassNames(props?.className, {
          "!cursor-pointer": !props?.disabled,
          "!cursor-not-allowed": props?.disabled,
        })}
      >
        {props?.children}
      </Button>
    </ZCan>
  );
};

export default ZRUButton;
