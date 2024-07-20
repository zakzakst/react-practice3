import { style } from "@vanilla-extract/css";

export const container = style({
  padding: 10,
});

export const child = style({
  color: "red",
  selectors: {
    [`${container}:hover &`]: {
      color: "blue",
    },
  },
});
