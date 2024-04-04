export const spacingProperties = ["margin", "padding"] as const;
export const spacingDirections = [
  "top",
  "right",
  "bottom",
  "left",
  "vertical",
  "horizontal",
  "all",
] as const;
type SpacingProperty = (typeof spacingProperties)[number];
type SpacingDirection = (typeof spacingDirections)[number];

const spacingProperty = (
  property: SpacingProperty,
  direction: "top" | "right" | "bottom" | "left"
) => {
  return `${property}-${direction}`;
};
