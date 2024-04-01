import { css } from "styled-components";
import themeCommon from "@/constants/themes/theme-common";

const getFontStyle = (
  size: number,
  weight: number,
  lineHeight: number,
  letterSpacing: number
) => {
  return css`
    size: ${size}px;
    weight: ${weight};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
  `;
};

const { weight, lineHeight, letterSpacing } = themeCommon.font;

export const heading = {
  xxl: getFontStyle(56, weight.r, lineHeight.s, letterSpacing.m),
  xl: getFontStyle(45, weight.r, lineHeight.s, letterSpacing.m),
  l: getFontStyle(36, weight.r, lineHeight.s, letterSpacing.m),
  lMobile: getFontStyle(32, weight.m, lineHeight.m, letterSpacing.m),
  m: getFontStyle(32, weight.r, lineHeight.m, letterSpacing.m),
  mMobile: getFontStyle(28, weight.m, lineHeight.m, letterSpacing.m),
  s: getFontStyle(28, weight.r, lineHeight.m, letterSpacing.m),
  sMobile: getFontStyle(24, weight.m, lineHeight.m, letterSpacing.m),
  xs: getFontStyle(24, weight.r, lineHeight.m, letterSpacing.m),
  xsMobile: getFontStyle(20, weight.m, lineHeight.m, letterSpacing.m),
  xxs: getFontStyle(20, weight.r, lineHeight.m, letterSpacing.m),
  xxsMobile: getFontStyle(16, weight.m, lineHeight.l, letterSpacing.m),
};

export const text = {
  bodyL: getFontStyle(16, weight.r, lineHeight.l, letterSpacing.m),
  bodyM: getFontStyle(14, weight.r, lineHeight.l, letterSpacing.m),
  labelL: getFontStyle(14, weight.m, lineHeight.m, letterSpacing.m),
  labelM: getFontStyle(12, weight.m, lineHeight.m, letterSpacing.m),
  captionL: getFontStyle(12, weight.r, lineHeight.l, letterSpacing.s),
  captionM: getFontStyle(10, weight.r, lineHeight.l, letterSpacing.s),
  button: getFontStyle(16, weight.b, lineHeight.m, letterSpacing.m),
};
