// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { useZMediaQueryScale, ZClassNames } from "zaions-react-tool-kit";

// #endregion

// #region ---- Custom Imports ----
import { ZButton, ZFlex, ZText } from "@src/components/radixUI";

// #endregion

// #region ---- Images Imports ----

// #endregion

// #region ---- Types Imports ----
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { ZEllipsisHorizontalSvg } from "@src/assets";
import { ZRUAlignE, ZRUJustifyE, ZRUVariantE } from "@src/enums/radixUI";
interface ZPaginationI {
  disablePrevious?: boolean;
  disableNext?: boolean;
  disableFirst?: boolean;
  disableLast?: boolean;
  currentPage?: number;
  paginationItems?: Array<string | number>;
  firstOnClick?: React.MouseEventHandler<HTMLElement>;
  lastOnClick?: React.MouseEventHandler<HTMLElement>;
  previousOnClick?: () => void;
  nextOnClick?: () => void;
  itemOnClick?: (e: number) => void;
}

// #endregion

const ZPagination: React.FC<ZPaginationI> = ({
  disablePrevious = false,
  disableNext = false,
  disableFirst = false,
  disableLast = false,
  currentPage,
  paginationItems,
  firstOnClick,
  lastOnClick,
  previousOnClick,
  nextOnClick,
  itemOnClick,
}) => {
  const { isMdScale, isXsScale } = useZMediaQueryScale();
  return (
    <ZFlex
      align={ZRUAlignE.center}
      className={ZClassNames(
        "gap-3 font-medium maxMd:w-full w-max maxXs:*:w-full maxXs:flex-col",
        {
          "flex-col *:w-full": !isXsScale,
          "px-3 py-2": isXsScale,
        }
      )}
    >
      <ZText
        onClick={!disableFirst ? firstOnClick : undefined}
        className={ZClassNames("md:text-xs", {
          "opacity-75 cursor-not-allowed": disableFirst,
          "cursor-pointer": !disableFirst,
        })}
      >
        {isMdScale ? (
          "FIRST"
        ) : isXsScale ? (
          <DoubleArrowLeftIcon className="w-5 h-5" />
        ) : (
          <ZButton className="w-full" variant={ZRUVariantE.soft}>
            First
          </ZButton>
        )}
      </ZText>
      <ZFlex
        align={ZRUAlignE.center}
        onClick={!disablePrevious ? previousOnClick : undefined}
        className={ZClassNames("gap-1 text-sm", {
          "opacity-75 cursor-not-allowed": disablePrevious,
          "cursor-pointer": !disablePrevious,
        })}
      >
        {isXsScale ? (
          <>
            <ChevronLeftIcon className="w-5 h-5" />
            {isMdScale ? " PREV" : null}
          </>
        ) : (
          <ZButton className="w-full" variant={ZRUVariantE.soft}>
            Prev
          </ZButton>
        )}
      </ZFlex>

      <ZFlex
        align={ZRUAlignE.center}
        className="mx-1 gap-2 *:text-sm text-tertiary maxMd:flex-1 maxMd:justify-center"
      >
        {paginationItems?.map((el, index) => {
          if (typeof el === "number") {
            return (
              <ZFlex
                key={index}
                className={ZClassNames("w-5 h-5 rounded-full cursor-pointer", {
                  "text-white bg-primary": currentPage === el,
                })}
                align={ZRUAlignE.center}
                justify={ZRUJustifyE.center}
                onClick={() => {
                  itemOnClick !== undefined && itemOnClick(el);
                }}
              >
                {el}
              </ZFlex>
            );
          } else if (typeof el === "string") {
            return (
              <ZFlex
                key={index}
                className="w-5 h-5 text-tertiary"
                align={ZRUAlignE.center}
                justify={ZRUJustifyE.center}
              >
                <ZEllipsisHorizontalSvg className="w-10 h-10" />
              </ZFlex>
            );
          } else {
            return null;
          }
        })}
      </ZFlex>

      <ZFlex
        align={ZRUAlignE.center}
        onClick={!disableNext ? nextOnClick : undefined}
        className={ZClassNames("gap-1 text-sm", {
          "opacity-75 cursor-not-allowed": disableNext,
          "cursor-pointer": !disableNext,
        })}
      >
        {isXsScale ? (
          <>
            {isMdScale ? "NEXT" : null} <ChevronRightIcon className="w-5 h-5" />
          </>
        ) : (
          <ZButton className="w-full" variant={ZRUVariantE.soft}>
            Next
          </ZButton>
        )}
      </ZFlex>
      <ZText
        onClick={!disableLast ? lastOnClick : undefined}
        className={ZClassNames("md:text-xs", {
          "opacity-75 cursor-not-allowed": disableLast,
          "cursor-pointer": !disableLast,
        })}
      >
        {isMdScale ? (
          "LAST"
        ) : isXsScale ? (
          <DoubleArrowRightIcon className="w-5 h-5" />
        ) : (
          <ZButton className="w-full" variant={ZRUVariantE.soft}>
            Last
          </ZButton>
        )}
      </ZText>
    </ZFlex>
  );
};

export default ZPagination;
