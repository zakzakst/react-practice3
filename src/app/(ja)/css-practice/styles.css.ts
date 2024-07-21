import { style } from "@vanilla-extract/css";

export const section = style({
  paddingBlock: 16,
  selectors: {
    "& + &": {
      borderTop: "1px solid",
    },
  },
});

export const anyHover = style({
  transition: "background-color 0.3s",
  backgroundColor: "red",
  "@media": {
    "(any-hover: hover)": {
      ":hover": {
        backgroundColor: "blue",
      },
    },
  },
});

export const transform = style({
  display: "inline flow-root",
  translate: "16px 8px",
  rotate: "-5deg",
  scale: 1.1,
});

export const rgb = style({
  backgroundColor: "rgb(255 255 255 / 0.5)",
});

export const lineHeightTrim = style({
  lineHeight: 4,
  vars: {
    "--leading-trim": "calc((1em - 1lh) / 2)",
  },
  selectors: {
    "&::before, &::after": {
      display: "block",
      content: "",
      inlineSize: 0,
      blockSize: 1,
    },
    "&::before": {
      marginBlockEnd: "var(--leading-trim)",
      // marginBottom: "var(--leading-trim)",
    },
    "&::after": {
      marginBlockStart: "var(--leading-trim)",
      // marginTop: "var(--leading-trim)",
    },
  },
});

export const fillBg = style({
  maxInlineSize: 300,
  marginInline: "auto",
  borderImage: "linear-gradient(#ddd 0 0) fill 0 / /0 100vi",
});

export const textarea = style({
  width: "100%",
  minHeight: 30,
  fieldSizing: "content",
});

export const grid = style({
  display: "block grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(min(360px, 100%), 1fr))",
  gap: 16,
});

export const grid2 = style({
  display: "block grid",
  gridTemplateColumns: "max-content auto 1fr",
});

export const grid2Item = style({
  display: "block grid",
  gridTemplateColumns: "subgrid",
  gridColumn: "1 / -1",
  columnGap: 24,
});
