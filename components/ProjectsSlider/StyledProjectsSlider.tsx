import styled from "styled-components";
import { breakpoint } from "../../helpers/consts";
import { spaces } from "../../helpers/spaces";

export const StyledProjectsSlider = styled.div``;

export const SliderW = styled.div`
  margin-top: ${spaces.l}px;
`;

export const ProjectSliderItem = styled.div`
  width: 20vw;
  ${breakpoint.tabletLandscape} {
    width: 22vw;
  }
  ${breakpoint.tabletPortrait} {
    width: 30vw;
  }
  ${breakpoint.phone} {
    width: 80vw;
  }
`;
