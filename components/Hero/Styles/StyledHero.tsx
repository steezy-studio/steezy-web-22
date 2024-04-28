import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";

export const StyledHero = styled.div`
  position: relative;
`;

export const PlayButton = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 991;
  span {
    font-family: "migra-italic", Arial, Helvetica, sans-serif;
    color: white;
    font-size: 7vw;
    text-decoration: underline;
    text-underline-offset: 0.1em;
    text-decoration-thickness: 2px;
    ${breakpoint.tabletPortrait} {
      font-size: 50px;
    }
    ${breakpoint.phone} {
      font-size: 60px;
    }
    ${breakpoint.miniPhone} {
      font-size: 50px;
    }
  }
`;

export const HeroCover = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: ${({ theme }) => theme.bRad};
`;
