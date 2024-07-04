// #region ---- Core Imports ----
import React from "react";
import { ZClassNames } from "zaions-react-tool-kit";

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
interface IZPage {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Represents a generic page layout component.
 *
 * @param className - Additional CSS classes to be applied to the page container.
 * @param helmet - Optional metadata for the document head provided through ReactHelmet.
 */
const ZPage: React.FC<IZPage> = ({ children, className }) => {
  return (
    <div
      className={ZClassNames(
        "w-full min-h-screen flex flex-col overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ZPage;
