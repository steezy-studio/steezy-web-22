import styled from "styled-components";
import { BrandsText, ValueHeader } from "../../pagestyles/StyledStudio";

export const Header = styled.h2`
  font-family: "agrandir";
  font-weight: 500;
  font-size: 44px;
  ${ValueHeader} & {
    width: 80%;
  }
  ${BrandsText} & {
    margin-bottom: 30px;
  }
`;
