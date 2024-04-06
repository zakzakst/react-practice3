export const spacingProperties = {
  m: "margin",
  p: "padding",
} as const;

export const spacingDirections = {
  t: "top",
  r: "right",
  b: "bottom",
  l: "left",
  v: "vertical",
  h: "horizontal",
  a: "all",
} as const;

export const spacingValues = {
  0: 0,
  4: 4,
  8: 8,
  16: 16,
  24: 24,
  40: 40,
  64: 64,
  104: 104,
  168: 168,
  272: 272,
  440: 440,
} as const;

export type SpacingProperties = typeof spacingProperties;
export type SpacingDirections = typeof spacingDirections;
export type SpacingValues = typeof spacingValues;
export type SpacingPropertyKey = keyof typeof spacingProperties;
export type SpacingDirectionKey = keyof typeof spacingDirections;
export type SpacingValueKey = keyof typeof spacingValues;
