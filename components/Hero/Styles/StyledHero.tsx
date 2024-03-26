import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";
import Image from "next/image";

export const StyledHero = styled.div`
  position: relative;
  ${breakpoint.phone} {
    padding-top: 70px;
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 991;
`;

export const HeroCover = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: ${({ theme }) => theme.bRad};
`;
