import { style } from "@vanilla-extract/css";

const items = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: 16,
});

const item = style({
  color: "#000",
  backgroundColor: "#fff",
  borderRadius: 24,
  overflow: "hidden",
  display: "grid",
  gridTemplateRows: "subgrid",
  gridRow: "span 2",
  gap: 0,
});

const body = style({
  order: 2,
  padding: 16,
});

const thumbContainer = style({
  order: 1,
  height: 120,
});

const thumbPicture = style({
  display: "block",
  height: "100%",
});

const thumbImg = style({
  objectFit: "cover",
  height: "100%",
  width: "100%",
});

export const card = {
  items,
  item,
  body,
  thumbContainer,
  thumbPicture,
  thumbImg,
};
