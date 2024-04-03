import Image from "next/image";
import styled from "styled-components";

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
`;

export const HeroCover = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: ${({ theme }) => theme.bRad};
`;
