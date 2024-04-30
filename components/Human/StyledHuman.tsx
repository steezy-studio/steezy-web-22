import Image from "next/image";
import styled from "styled-components";
import { spaces } from "../../helpers/spaces";
import { breakpoint, colors } from "../../helpers/consts";

export const StyledHuman = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  aspect-ratio: 1.2;
  border-radius: ${({ theme }) => theme.bRad};
  ${breakpoint.phone} {
    aspect-ratio: 1;
  }
`;

export const HumanCover = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HumanCoverW = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const HumanInfo = styled.div`
  position: absolute;
  bottom: ${spaces.m}px;
  right: ${spaces.m}px;
  left: ${spaces.m}px;
  z-index: 3;
`;

export const HumanGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4) 90%);
  z-index: 2;
`;

export const HumanInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${spaces.m}px;
  row-gap: ${spaces.s}px;
  ${breakpoint.phone} {
    grid-template-columns: 1fr;
  }
`;

export const HumanInfoCol = styled.div`
  display: grid;
`;
