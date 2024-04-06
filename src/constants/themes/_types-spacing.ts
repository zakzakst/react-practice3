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

export const spacingValueKeys = [
  0, 4, 8, 16, 24, 40, 64, 104, 168, 272, 440,
] as const;

export type SpacingPropertyKey = keyof typeof spacingProperties;
export type SpacingProperties = typeof spacingProperties;
export type SpacingDirectionKey = keyof typeof spacingDirections;
export type SpacingDirections = typeof spacingDirections;
export type SpacingValueKey = (typeof spacingValueKeys)[number];
export type SpacingValues = Record<SpacingValueKey, number>;
export type SpacingValuesObj = Record<SpacingValueKey, string>;
export type SpacingDirectionsObj = Record<
  SpacingDirectionKey,
  SpacingValuesObj
>;
export type SpacingObj = Record<SpacingPropertyKey, SpacingDirectionsObj>;
