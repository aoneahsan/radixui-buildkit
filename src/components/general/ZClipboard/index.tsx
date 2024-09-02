// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { zrtkMessages, zWriteToClipboard } from "zaions-react-tool-kit";
import { isZNonEmptyString } from "zaions-tool-kit";

// #endregion

// #region ---- Custom Imports ----
import { ReactToastifyTypeEnum } from "@enums/reactPackages";
import { CopyIcon } from "@radix-ui/react-icons";
import { ZBadge } from "@src/components/radixUI";
import { ZRUColorE } from "@src/types";
import { showNotification } from "@utils/helpers";

// #endregion

/**
 * ZClipboard Component
 *
 * This component renders a badge that, when clicked, copies the provided text to the clipboard
 * and displays a notification to inform the user that the text has been successfully copied.
 *
 * @param {string} text - The text to be copied to the clipboard. If the text is not provided or is an empty string, the clipboard action will not be performed.
 */
const ZClipboard: React.FC<{
  text?: string;
}> = ({ text }) => {
  return (
    <ZBadge
      color={ZRUColorE.cyan}
      size="3"
      className="cursor-pointer"
      onClick={async () => {
        if (isZNonEmptyString(text)) {
          await zWriteToClipboard(text);

          showNotification(
            zrtkMessages.generic.copied,
            ReactToastifyTypeEnum.info
          );
        }
      }}
    >
      <CopyIcon />
      {text}
    </ZBadge>
  );
};

export default ZClipboard;
