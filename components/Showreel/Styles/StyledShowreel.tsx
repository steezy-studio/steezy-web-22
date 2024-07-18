import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";

export const StyledShowreel = styled.div`
  position: relative;
`;

export const PlayButton = styled.div`
  position: absolute;
  bottom: ${spaces.m}px;
  left: ${spaces.l}px;
  pointer-events: none;
  z-index: 991;
  ${breakpoint.tabletPortrait} {
    bottom: ${spaces.s}px;
    left: ${spaces.m}px;
  }
`;

export const ShowreelCover = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: ${({ theme }) => theme.bRad};
`;
