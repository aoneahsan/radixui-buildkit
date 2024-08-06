// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Skeleton } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import type { ZRUSkeletonI } from "@src/types";

// #endregion

const ZRUSkeleton: React.FC<ZRUSkeletonI> = ({
  children,
  className,
  loading,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
}) => {
  return (
    <Skeleton
      className={className}
      loading={loading}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
    >
      {children}
    </Skeleton>
  );
};

export default ZRUSkeleton;
