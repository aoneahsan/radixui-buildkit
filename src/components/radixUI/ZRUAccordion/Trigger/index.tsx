// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import * as Accordion from "@radix-ui/react-accordion";
import { ZClassNames } from "zaions-react-tool-kit";
import { ZChevronDown } from "@src/assets";

// #endregion

/**
 * A customized Radix According Trigger component.
 */
const ZRUAccordionTrigger: React.FC<
  { showIcon?: boolean } & Accordion.AccordionTriggerProps &
    React.RefAttributes<HTMLButtonElement>
> = React.forwardRef(
  ({ showIcon = true, children, className, ...props }, forwardedRef) => (
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
  )
);

export default ZRUAccordionTrigger;
