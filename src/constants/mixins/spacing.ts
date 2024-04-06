(() => {
  const spacingProperties = ["margin", "padding"] as const;
  const spacingDirections = [
    "top",
    "right",
    "bottom",
    "left",
    "vertical",
    "horizontal",
    "all",
  ] as const;
  const SPACING = {
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
  type SpacingProperty = (typeof spacingProperties)[number];
  type SpacingDirection = (typeof spacingDirections)[number];

  const spacingProperty = (
    property: SpacingProperty,
    direction: "top" | "right" | "bottom" | "left"
  ) => {
    return `${property}-${direction}`;
  };

  type SpacingObj = Partial<
    Record<"top" | "right" | "bottom" | "left", keyof typeof SPACING>
  >;

  const createSpacingCss = (
    property: SpacingProperty,
    modifiers: [SpacingDirection, keyof typeof SPACING][]
  ) => {
    const result = modifiers.reduce(
      (acc, [direction, size]) => {
        if (direction === "all") {
          const spacingObj: SpacingObj = {
            top: size,
            right: size,
            bottom: size,
            left: size,
          };
          acc[direction] = spacingObj;
        } else if (direction === "vertical") {
          const spacingObj: SpacingObj = {
            top: size,
            bottom: size,
          };
          acc[direction] = spacingObj;
        } else if (direction === "horizontal") {
          const spacingObj: SpacingObj = {
            right: size,
            left: size,
          };
          acc[direction] = spacingObj;
        } else {
          const spacingObj: SpacingObj = {
            [direction]: size,
          };
          acc[direction] = spacingObj;
        }
        return acc;
      },
      {} as Record<SpacingDirection, SpacingObj>
    );
    return result;
  };

  console.log(
    createSpacingCss("margin", [
      ["all", 0],
      ["top", 4],
    ])
  );
})();
