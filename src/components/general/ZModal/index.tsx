// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Dialog } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----
import { ZDialog, ZFlex, ZText } from "@src/components/radixUI";
import { ZRUAlignE, ZRUColorE, ZRUJustifyE } from "@src/types";

// #endregion

// #region ---- Types Imports ----

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----
import { ZCloseSvg } from "@src/assets";
import { ZClassNames } from "zaions-react-tool-kit";

// #endregion
interface ZModalI {
  children: React.ReactNode;
  open?: boolean;
  className?: string;
  title?: string;
  disableCrossBtn?: boolean;
  onOpenChange?: (open: boolean) => void;
  crossOnClick?: React.MouseEventHandler<SVGSVGElement>;
}

const ZModal: React.FC<ZModalI> = ({
  children,
  className,
  open,
  disableCrossBtn = false,
  title = "Title here",
  onOpenChange,
  crossOnClick,
}) => {
  return (
    <ZDialog open={open} className={className} onOpenChange={onOpenChange}>
      <ZFlex
        align={ZRUAlignE.center}
        justify={ZRUJustifyE.between}
        className="mb-5"
      >
        <Dialog.Title className="text-[1.7rem] mb-0">{title}</Dialog.Title>

        <ZText color={disableCrossBtn ? ZRUColorE.gray : undefined}>
          <ZCloseSvg
            className={ZClassNames("w-6 h-6 text-inherit", {
              "cursor-not-allowed": disableCrossBtn,
              "cursor-pointer": !disableCrossBtn,
            })}
            onClick={(e) => !disableCrossBtn && crossOnClick && crossOnClick(e)}
          />
        </ZText>
      </ZFlex>
      {children}
    </ZDialog>
  );
};

export default ZModal;
