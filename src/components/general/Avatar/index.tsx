// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { ChevronDownIcon } from "@radix-ui/themes";
import { ZClassNames } from "zaions-react-tool-kit";
import { isZNonEmptyString } from "zaions-tool-kit";

// #endregion

// #region ---- Custom Imports ----
import {
  ZAvatar,
  ZButton,
  ZFlex,
  ZPopover,
  ZText,
} from "@src/components/radixUI";

// #endregion

// #region ---- Types Imports ----
import { ZRUAlignE, ZRUAvatarVariantE, ZRUColorE } from "@src/types";
import ZRUBox from "@src/components/radixUI/ZRUBox";

// #endregion

// #region ---- Images Imports ----

// #endregion

interface ZUserAvatarI {
  className?: string;
  avatarClassName?: string;
  variant?: ZRUAvatarVariantE;
  color?: ZRUColorE;
  src?: string;
  fallback: string;
  textClassName?: string;
  text?: string;
  arrowDownClassName?: string;
  onClick?: () => void;
  logoutBtnClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

const ZUserAvatar: React.FC<ZUserAvatarI> = ({
  className,
  avatarClassName,
  variant = ZRUAvatarVariantE.soft,
  color = ZRUColorE.violet,
  src,
  fallback,
  textClassName,
  text,
  arrowDownClassName,
  onClick,
  logoutBtnClickHandler,
}) => {
  return (
    <ZPopover
      trigger={{
        children: (
          <ZFlex
            gap="2"
            className={ZClassNames(className, "gap-3 cursor-pointer")}
            align={ZRUAlignE.center}
            onClick={onClick}
          >
            <ZAvatar
              className={ZClassNames(avatarClassName)}
              variant={variant}
              color={color}
              src={src}
              fallback={fallback}
            />
            {isZNonEmptyString(text) ? (
              <ZFlex
                align={ZRUAlignE.center}
                className="gap-2 hover:text-gray8"
              >
                <ZText className={ZClassNames(textClassName)}>{text}</ZText>
                <ChevronDownIcon
                  className={ZClassNames(arrowDownClassName, "w-3 h-3")}
                />
              </ZFlex>
            ) : null}
          </ZFlex>
        ),
      }}
    >
      <ZRUBox className="space-y-2">
        <ZButton
          onClick={logoutBtnClickHandler}
          className="w-full"
          color={ZRUColorE.purple}
        >
          Logout
        </ZButton>
      </ZRUBox>
    </ZPopover>
  );
};

export default ZUserAvatar;
