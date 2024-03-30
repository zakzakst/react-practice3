import "styled-components";
import { themes } from "@/constants/themes/_themes";

type Theme = typeof themes.light;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
