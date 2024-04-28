import styled from "styled-components";
import { spaces } from "../../helpers/spaces";
import { breakpoint } from "../../helpers/consts";

export const StyledProjectsSlider = styled.div``;

export const SliderW = styled.div`
  margin-top: ${spaces.l}px;
`;

export const ProjectSliderItem = styled.div`
  width: 20vw;
  ${breakpoint.tabletPortrait} {
    width: 40vw;
  }
  ${breakpoint.phone} {
    width: 80vw;
  }
`;
