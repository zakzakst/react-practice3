import { style, styleVariants } from "@vanilla-extract/css";
import { Color } from "./models";

export const button = style({
  backgroundColor: "#000",
  display: "block",
  width: "100%",
  padding: "16px 24px",
  color: "#fff",
  fontSize: 14,
  // selectors: {
  //   ["&.--color-primary"]: {
  //     backgroundColor: "#f00",
  //   },
  //   ["&.--color-secondary"]: {
  //     backgroundColor: "#0f0",
  //   },
  // },
});

const colorVariants: Record<Color, {}> = {
  default: {},
  primary: {
    backgroundColor: "#f00",
  },
  secondary: {
    backgroundColor: "#0f0",
  },
};

export const variants = styleVariants({
  ...colorVariants,
  // 他のvariantsもここに足す
});
