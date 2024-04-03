export type Key = string | number;

export type PressEvent = any;
export type FocusEvent = any;
export type HoverEvent = any;

export type ReferrerPolicy =
  | ""
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

export type HTMLAttributeAnchorTarget = "_self" | "_blank" | "_parent" | "_top";
