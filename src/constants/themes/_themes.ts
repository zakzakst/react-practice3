import themeCommon from "@/constants/themes/theme-common";
import themeLight from "@/constants/themes/theme-light";
import themeDark from "@/constants/themes/theme-dark";
import spacing from "@/constants/mixins/spacing2";

export const themes = {
  light: {
    ...themeCommon,
    ...themeLight,
    spacing,
  },
  dark: {
    ...themeCommon,
    ...themeDark,
    spacing,
  },
};
