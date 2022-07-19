import "styled-components";
import { Theme } from "./consts";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    pageMargin: string;
  }
}
