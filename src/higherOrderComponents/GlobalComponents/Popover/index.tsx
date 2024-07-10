// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { useRecoilState } from "recoil";

// #endregion

// #region ---- Custom Imports ----
import { ZPopover } from "@src/components";

// #endregion

// #region ---- Types Imports ----

// #endregion

// #region ---- Store Imports ----
import { ZPopoverRStateAtom } from "@src/store";

// #endregion

// #region ---- Images Imports ----

// #endregion

const ZHOPopover: React.FC = () => {
  const [ZPopoverRState, setZPopoverRState] =
    useRecoilState(ZPopoverRStateAtom);
  return (
    <ZPopover
      maxWidth={ZPopoverRState?.width}
      maxHeight={ZPopoverRState?.height}
      className={ZPopoverRState?.containerClassName}
      open={ZPopoverRState?.isOpen}
      onOpenChange={(open) => {
        setZPopoverRState((oldValues) => ({
          ...oldValues,
          isOpen: open,
        }));
      }}
    >
      {ZPopoverRState?.component !== undefined ? (
        <ZPopoverRState.component {...ZPopoverRState?.componentProps} />
      ) : null}
    </ZPopover>
  );
};

export default ZHOPopover;
