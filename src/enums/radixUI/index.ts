// #region ===== Enums =====

import { checkForDuplicateEnumValues } from "zaions-tool-kit";

/**
 * Enum representing the side of radix ui elements.
 */
export enum ZRUSideE {
  left = "left",
  right = "right",
}

/**
 * Enum representing the variant of radix ui elements.
 */
export enum ZRUCommonVariantE {
  classic = "classic",
  surface = "surface",
}

/**
 * Enum representing the variant of radix ui table element.
 */
export enum ZRUTableVariantE {
  ghost = "ghost",
  surface = "surface",
}

/**
 * Enum representing the layout of radix ui table element.
 */
export enum ZRUTableLayoutE {
  auto = "auto",
  fixed = "fixed",
}

/**
 * Enum representing the variant of radix Callout elements.
 */
export enum ZRUCalloutVariantE {
  surface = "surface",
  soft = "soft",
  outline = "outline",
}

/**
 * Enum representing the variant of radix ui elements.
 */
export enum ZRUBasicVariantE {
  classic = "classic",
  surface = "surface",
  ghost = "ghost",
}

/**
 * Enum representing the variant of radix Avatar elements.
 */
export enum ZRUAvatarVariantE {
  soft = "soft",
  solid = "solid",
}

/**
 * Enum representing the variant of radix ui elements.
 */
export enum ZRUTriggerVariantE {
  classic = "classic",
  surface = "surface",
  soft = "soft",
}

/**
 * Enum representing the variant of radix ui Badge element.
 */
export enum ZRUBadgeVariantE {
  solid = "solid",
  soft = "soft",
  surface = "surface",
  outline = "outline",
}

/**
 * Enum representing the variant of radix ui button element.
 */
export enum ZRUVariantE {
  classic = "classic",
  solid = "solid",
  soft = "soft",
  surface = "surface",
  outline = "outline",
  ghost = "ghost",
}

/**
 * Enum representing the color of radix ui elements.
 */
export enum ZRUColorE {
  gray = "gray",
  gold = "gold",
  bronze = "bronze",
  brown = "brown",
  yellow = "yellow",
  amber = "amber",
  orange = "orange",
  tomato = "tomato",
  red = "red",
  ruby = "ruby",
  crimson = "crimson",
  pink = "pink",
  plum = "plum",
  purple = "purple",
  violet = "violet",
  iris = "iris",
  indigo = "indigo",
  blue = "blue",
  cyan = "cyan",
  teal = "teal",
  jade = "jade",
  green = "green",
  grass = "grass",
  lime = "lime",
  mint = "mint",
  sky = "sky",
}

/**
 * Enum representing the radius of radix ui button element.
 */
export enum ZRURadiusE {
  none = "none",
  small = "small",
  medium = "medium",
  large = "large",
  full = "full",
}

export enum ZRUInputTypeE {
  number = "number",
  search = "search",
  time = "time",
  text = "text",
  hidden = "hidden",
  date = "date",
  datetimeLocal = "datetime-local",
  email = "email",
  month = "month",
  password = "password",
  tel = "tel",
  url = "url",
  week = "week",
}

/**
 * Enum representing the scrollbars of radix ui ScrollArea element.
 */
export enum ZRUScrollbarsE {
  vertical = "vertical",
  horizontal = "horizontal",
  both = "both",
}

/**
 * Enum representing the orientation of radix ui Separator element.
 */
export enum ZRUOrientationE {
  vertical = "vertical",
  horizontal = "horizontal",
}

/**
 * Enum representing the type of radix ui ScrollArea element.
 */
export enum ZRUScrollbarTypeE {
  auto = "auto",
  always = "always",
  scroll = "scroll",
  hover = "hover",
}

/**
 * Enum representing the 'as' of radix ui elements.
 */
export enum ZRUAsE {
  div = "div",
  span = "span",
}

/**
 * Enum representing the 'as' of radix ui Text elements.
 */
export enum ZRUTextAsE {
  div = "div",
  span = "span",
  label = "label",
  p = "p",
}

/**
 * Enum representing the 'as' of radix ui Heading elements.
 */
export enum ZRUHeadingAsE {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

/**
 * Enum representing the 'direction' of radix ui flex element.
 */
export enum ZRUDirectionE {
  row = "row",
  column = "column",
  rowRevers = "row-reverse",
  columnRevers = "column-reverse",
}

/**
 * Enum representing the 'position' of radix ui flex element.
 */
export enum ZRUPositionE {
  static = "static",
  relative = "relative",
  absolute = "absolute",
  fixed = "fixed",
  sticky = "sticky",
}

/**
 * Enum representing the 'display' of radix ui flex element.
 */
export enum ZRUDisplayE {
  none = "none",
  inlineFlex = "inline-flex",
  flex = "flex",
}

/**
 * Enum representing the 'display' of radix ui container element.
 */
export enum ZRUContainerDisplayE {
  none = "none",
  initial = "initial",
}

/**
 * Enum representing the 'display' of radix ui box element.
 */
export enum ZRUBoxDisplayE {
  none = "none",
  inline = "inline",
  inlineBlock = "inline-block",
  block = "block",
}

/**
 * Enum representing the 'align' of radix ui table row element.
 */
export enum ZRUTableRowAlignE {
  start = "start",
  center = "center",
  end = "end",
  baseline = "baseline",
}

/**
 * Enum representing the 'align' of radix ui flex element.
 */
export enum ZRUAlignE {
  start = "start",
  center = "center",
  end = "end",
  baseline = "baseline",
  stretch = "stretch",
}

/**
 * Enum representing the alignment options for various radix UI elements.
 */
export enum ZRUGeneralAlignE {
  left = "left",
  center = "center",
  right = "right",
}

/**
 * Enum representing the trim options for various radix UI elements.
 */
export enum ZRUTrimE {
  normal = "normal",
  start = "start",
  end = "end",
  both = "both",
}

/**
 * Enum representing the 'justify' of radix ui flex element.
 */
export enum ZRUJustifyE {
  start = "start",
  center = "center",
  end = "end",
  between = "between",
}

/**
 * Enum representing the 'justify' of radix ui table cell element.
 */
export enum ZRUCellJustifyE {
  start = "start",
  center = "center",
  end = "end",
}

/**
 * Enum representing the 'wrap' of radix ui flex element.
 */
export enum ZRUWrapFlexE {
  nowrap = "nowrap",
  wrap = "wrap",
  wrapReverse = "wrap-reverse",
}

/**
 * Enum representing the 'wrap' of radix ui flex element.
 */
export enum ZRUWrapE {
  nowrap = "nowrap",
  wrap = "wrap",
  pretty = "pretty",
  balance = "balance",
}

/**
 * Enum representing the 'overflow' of radix ui flex element.
 */
export enum ZRUOverflowE {
  visible = "visible",
  hidden = "hidden",
  clip = "clip",
  scroll = "scroll",
  auto = "auto",
}

/**
 * Enum representing the 'weight' of radix ui flex element.
 */
export enum ZRUWeightE {
  light = "light",
  regular = "regular",
  medium = "medium",
  bold = "bold",
}

/**
 * Enum representing the 'position' of radix ui Select.Content element.
 */
export enum ZRUSelectContentPositionE {
  itemAligned = "item-aligned",
  popper = "popper",
}
// #endregion

/**
 * Enum representing the 'type' of radix ui According element.
 */
export enum ZRUAccordingTypeE {
  single = "single",
  multiple = "multiple",
}

/**
 * Enum representing the 'wrap' of radix ui Link element.
 */
export enum ZRUUnderlineLinkE {
  auto = "auto",
  always = "always",
  hover = "hover",
  none = "none",
}

/**
 * Enum representing the 'wrap' of radix ui Link element.
 */
export enum ZRUWrapLinkE {
  wrap = "wrap",
  nowrap = "nowrap",
  pretty = "pretty",
  balance = "balance",
}

/**
 * Enum representing the 'weight' of radix ui Link element.
 */
export enum ZRULinkWeightE {
  light = "light",
  regular = "regular",
  medium = "medium",
  bold = "bold",
}
// #endregion

// Check for duplicates
checkForDuplicateEnumValues(ZRUSideE, "Duplicate ZRUSideE value found:");
checkForDuplicateEnumValues(
  ZRUCommonVariantE,
  "Duplicate ZRUCommonVariantE value found:"
);
checkForDuplicateEnumValues(
  ZRUTableVariantE,
  "Duplicate ZRUTableVariantE value found:"
);
checkForDuplicateEnumValues(
  ZRUTableLayoutE,
  "Duplicate ZRUTableLayoutE value found:"
);
checkForDuplicateEnumValues(
  ZRUCalloutVariantE,
  "Duplicate ZRUCalloutVariantE value found:"
);
checkForDuplicateEnumValues(
  ZRUBasicVariantE,
  "Duplicate ZRUBasicVariantE value found:"
);
checkForDuplicateEnumValues(
  ZRUAvatarVariantE,
  "Duplicate ZRUAvatarVariantE value found:"
);
checkForDuplicateEnumValues(
  ZRUTriggerVariantE,
  "Duplicate ZRUTriggerVariantE value found:"
);
checkForDuplicateEnumValues(
  ZRUBadgeVariantE,
  "Duplicate ZRUBadgeVariantE value found:"
);
checkForDuplicateEnumValues(ZRUVariantE, "Duplicate ZRUVariantE value found:");
checkForDuplicateEnumValues(ZRUColorE, "Duplicate ZRUColorE value found:");
checkForDuplicateEnumValues(ZRURadiusE, "Duplicate ZRURadiusE value found:");
checkForDuplicateEnumValues(
  ZRUInputTypeE,
  "Duplicate ZRUInputTypeE value found:"
);
checkForDuplicateEnumValues(
  ZRUScrollbarsE,
  "Duplicate ZRUScrollbarsE value found:"
);
checkForDuplicateEnumValues(
  ZRUOrientationE,
  "Duplicate ZRUOrientationE value found:"
);
checkForDuplicateEnumValues(
  ZRUScrollbarTypeE,
  "Duplicate ZRUScrollbarTypeE value found:"
);
checkForDuplicateEnumValues(ZRUAsE, "Duplicate ZRUAsE value found:");
checkForDuplicateEnumValues(ZRUTextAsE, "Duplicate ZRUTextAsE value found:");
checkForDuplicateEnumValues(
  ZRUHeadingAsE,
  "Duplicate ZRUHeadingAsE value found:"
);
checkForDuplicateEnumValues(
  ZRUDirectionE,
  "Duplicate ZRUDirectionE value found:"
);
checkForDuplicateEnumValues(
  ZRUPositionE,
  "Duplicate ZRUPositionE value found:"
);
checkForDuplicateEnumValues(ZRUDisplayE, "Duplicate ZRUDisplayE value found:");
checkForDuplicateEnumValues(
  ZRUContainerDisplayE,
  "Duplicate ZRUContainerDisplayE value found:"
);
checkForDuplicateEnumValues(
  ZRUBoxDisplayE,
  "Duplicate ZRUBoxDisplayE value found:"
);
checkForDuplicateEnumValues(
  ZRUTableRowAlignE,
  "Duplicate ZRUTableRowAlignE value found:"
);
checkForDuplicateEnumValues(ZRUAlignE, "Duplicate ZRUAlignE value found:");
checkForDuplicateEnumValues(
  ZRUGeneralAlignE,
  "Duplicate ZRUGeneralAlignE value found:"
);
checkForDuplicateEnumValues(ZRUTrimE, "Duplicate ZRUTrimE value found:");
checkForDuplicateEnumValues(ZRUJustifyE, "Duplicate ZRUJustifyE value found:");
checkForDuplicateEnumValues(
  ZRUCellJustifyE,
  "Duplicate ZRUCellJustifyE value found:"
);
checkForDuplicateEnumValues(
  ZRUWrapFlexE,
  "Duplicate ZRUWrapFlexE value found:"
);
checkForDuplicateEnumValues(ZRUWrapE, "Duplicate ZRUWrapE value found:");
checkForDuplicateEnumValues(
  ZRUOverflowE,
  "Duplicate ZRUOverflowE value found:"
);
checkForDuplicateEnumValues(ZRUWeightE, "Duplicate ZRUWeightE value found:");
checkForDuplicateEnumValues(
  ZRUSelectContentPositionE,
  "Duplicate ZRUSelectContentPositionE value found:"
);
checkForDuplicateEnumValues(
  ZRUAccordingTypeE,
  "Duplicate ZRUAccordingTypeE value found:"
);
checkForDuplicateEnumValues(
  ZRUUnderlineLinkE,
  "Duplicate ZRUUnderlineLinkE value found:"
);
checkForDuplicateEnumValues(
  ZRUWrapLinkE,
  "Duplicate ZRUWrapLinkE value found:"
);
checkForDuplicateEnumValues(
  ZRULinkWeightE,
  "Duplicate ZRULinkWeightE value found:"
);
