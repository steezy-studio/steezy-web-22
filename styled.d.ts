import "styled-components";
import { Theme } from "./helpers/consts";

declare module "styled-components" {
  export interface DefaultTheme {
    pageMargin: string;
    navbarHeight: string;
    bRad: string;
  }
}
