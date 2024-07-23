import { style, styleVariants } from "@vanilla-extract/css";
// variantsのkeyをmodelsのColorで制御することはできる？
// import { Color } from "./models";

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

export const variants = styleVariants({
  default: {},
  primary: {
    backgroundColor: "#f00",
  },
  secondary: {
    backgroundColor: "#0f0",
  },
});
