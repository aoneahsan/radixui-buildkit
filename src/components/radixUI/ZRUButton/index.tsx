// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Button } from "@radix-ui/themes";
import { ZClassNames } from "zaions-react-tool-kit";

// #endregion

// #region ---- Types Imports ----
import { ZRUButtonI } from "@src/types";

// #endregion

/**
 * A customized Radix Button component.
 */
const ZRUButton: React.FC<ZRUButtonI> = (props) => {
  return (
    <Button
      {...props}
      disabled={props?.disabled || props?.loading}
      className={ZClassNames(props?.className, {
        "!cursor-pointer": !props?.disabled,
        "!cursor-not-allowed": props?.disabled,
      })}
    >
      {props?.children}
    </Button>
  );
};

export default ZRUButton;
