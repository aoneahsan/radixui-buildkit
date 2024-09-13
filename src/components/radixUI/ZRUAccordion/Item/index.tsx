// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import * as Accordion from "@radix-ui/react-accordion";
import { ZClassNames } from "zaions-react-tool-kit";

// #endregion
import type { ZRUShowable } from "@src/types";

/**
 * A customized Radix According Item component.
 */
const ZRUAccordionItem: React.FC<
  Accordion.AccordionItemProps &
    React.RefAttributes<HTMLDivElement> &
    ZRUShowable
> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }
  return (
    <Accordion.Item
      {...props}
      className={ZClassNames("z-ru-accordion-item", props?.className)}
    >
      {props?.children}
    </Accordion.Item>
  );
};

export default ZRUAccordionItem;
