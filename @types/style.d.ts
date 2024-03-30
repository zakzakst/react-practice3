import "styled-components";
import { Theme } from "@/constants/themes/_types";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
