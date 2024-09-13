// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import * as Accordion from "@radix-ui/react-accordion";
import { ZChevronDown } from "@src/assets";
import { ZClassNames } from "zaions-react-tool-kit";

// #endregion
import type { ZRUShowable } from "@src/types";

/**
 * A customized Radix According Trigger component.
 */
const ZRUAccordionTrigger: React.FC<
  { showIcon?: boolean } & Accordion.AccordionTriggerProps &
    React.RefAttributes<HTMLButtonElement> &
    ZRUShowable
> = React.forwardRef(
  (
    { showIcon = true, show = true, children, className, ...props },
    forwardedRef
  ) => {
    // Return null if show is false
    if (show === false) {
      return null;
    }

    return (
      <Accordion.Header className="z-ru-accordion-header">
        <Accordion.Trigger
          className={ZClassNames(
            "z-ru-accordion-trigger flex items-center justify-between w-full",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          {children}
          {showIcon ? (
            <ZChevronDown
              className="z-ru-accordion-content-chevron"
              aria-hidden
            />
          ) : null}
        </Accordion.Trigger>
      </Accordion.Header>
    );
  }
);

export default ZRUAccordionTrigger;
