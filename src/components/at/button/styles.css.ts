import { style } from "@vanilla-extract/css";

export const button = style({
  backgroundColor: "#000",
  display: "block",
  width: "100%",
  padding: "16px 24px",
  color: "#fff",
  fontSize: 14,
  selectors: {
    ["&.--color-primary"]: {
      backgroundColor: "#f00",
    },
    ["&.--color-secondary"]: {
      backgroundColor: "#0f0",
    },
  },
});
