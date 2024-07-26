import { style, styleVariants, ComplexStyleRule } from "@vanilla-extract/css";
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

type ColorVariants = {
  [key in Color]: ComplexStyleRule;
};

const colorVariants: ColorVariants = {
  // defaultに空のオブジェクト持たせるの冗長かもだけど、いろいろ試して一旦これでいく
  default: {},
  primary: {
    backgroundColor: "#f00",
  },
  secondary: {
    backgroundColor: "#0f0",
    // cssでない値を設定するとエラーが出るようにする
    // hoge: 'aaa',
  },
};

// Partialつかってdefault設定しなくてもよくすると、それはそれで読み込み側でエラー出すの難しくなった
// const colorVariants: Partial<Record<Color, ComplexStyleRule>> = {
//   primary: {
//     backgroundColor: "#f00",
//   },
//   secondary: {
//     backgroundColor: "#0f0",
//     // cssでない値を設定するとエラーが出るようにする
//     // hoge: 'aaa',
//   },
// };

// このパターンはこのパターンで読み込み側で条件分岐めんどくさそう
// export const variants = styleVariants({
//   primary: {
//     backgroundColor: "#f00",
//   },
//   secondary: {
//     backgroundColor: "#0f0",
//     // cssでない値を設定するとエラーが出るようにする
//     // hoge: 'aaa',
//   },
// });

export const variants = styleVariants({
  ...colorVariants,
  // 他のvariantsもここに足す
});
