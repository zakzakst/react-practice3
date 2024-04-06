import themeCommon from "@/constants/themes/theme-common";
import themeLight from "@/constants/themes/theme-light";
import themeDark from "@/constants/themes/theme-dark";

export const themes = {
  light: {
    ...themeCommon,
    ...themeLight,
  },
  dark: {
    ...themeCommon,
    ...themeDark,
  },
};
