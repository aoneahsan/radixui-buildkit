// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import * as Accordion from "@radix-ui/react-accordion";
import { ZClassNames } from "zaions-react-tool-kit";

// #endregion
import type { ZRUShowable } from "@src/types";

/**
 * A customized Radix According Content component.
 */
const ZRUAccordionContent: React.FC<
  Accordion.AccordionContentProps &
    React.RefAttributes<HTMLDivElement> &
    ZRUShowable
> = React.forwardRef(
  ({ children, className, show = true, ...props }, forwardedRef) => {
    // Return null if show is false
    if (show === false) {
      return null;
    }

    return (
      <Accordion.Content
        {...props}
        className={ZClassNames("z-ru-accordion-content", className)}
        ref={forwardedRef}
      >
        <div className="z-ru-accordion-content-text">{children}</div>
      </Accordion.Content>
    );
  }
);

export default ZRUAccordionContent;
