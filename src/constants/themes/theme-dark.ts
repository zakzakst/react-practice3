import { ThemeColors } from "@/constants/themes/_types";

const theme: ThemeColors = {
  text: {
    body: "#ffffff",
    description: "#b4b4b7",
    placeHolder: "#949497",
    onFill: "#ffffff",
    link: "#7096f8",
    hover: "#9db7f9",
    active: "#9db7f9",
    visited: "#9db7f9",
    alert: "#ff4b36",
    disabled: "#757578",
  },
  icon: {
    label: "#ffffff",
    active: "#7096f8",
    disabled: "#757578",
    alert: "#ff4b36",
  },
  button: {
    normal: "#7096f8",
    active: "#4979f5",
    hover: "#4979f5",
    disabled: "#949497",
  },
  background: {
    primary: "#1a1a1c",
    secondary: "#626264",
    tertiary: "#414143",
  },
  border: {
    field: "#ffffff",
    divider: "#626264",
    focused: "#cd820a",
    selected: "#7096f8",
    alert: "#ff4b36",
    disabled: "#949497",
  },
  status: {
    success: "#259d63",
    alert: "#ff4b36",
    warning: "#d18d0f",
  },
  chart: {
    primary: "#9db7f9",
    secondary: "#c5d7fb",
  },
};

export default theme;
