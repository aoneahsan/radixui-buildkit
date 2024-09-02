// #region ---- Core Imports ----
import {
  ZRUAlignE,
  ZRUDirectionE,
  ZRUHeadingAsE,
  ZRUJustifyE,
} from "@src/types";
import React from "react";

// #endregion

// #region ---- Custom Imports ----
import { ZButton, ZFlex, ZHeading, ZText } from "@src/components/radixUI";

// #endregion

// #region ---- Images Imports ----
import { ZError404Icon } from "@src/assets";

// #endregion

const ZNotFound: React.FC<{
  showHomeBtn?: boolean;
  homeBtnOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ showHomeBtn = false, homeBtnOnClick }) => {
  return (
    <ZFlex
      align={ZRUAlignE.center}
      justify={ZRUJustifyE.center}
      direction={ZRUDirectionE.column}
      className="px-4 text-center sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <ZError404Icon className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
      <ZHeading
        as={ZRUHeadingAsE.h3}
        className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
      >
        Not Found
      </ZHeading>
      <ZText className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
        The page that you are looking for is not found.
      </ZText>

      {showHomeBtn ? (
        <ZButton className="uppercase mt-9" onClick={homeBtnOnClick}>
          Go to Home
        </ZButton>
      ) : null}
    </ZFlex>
  );
};

export default ZNotFound;
