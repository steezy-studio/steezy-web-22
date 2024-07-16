import Image from "next/image";
import styled from "styled-components";
import { colors } from "../../helpers/consts";
import { spaces } from "../../helpers/spaces";

export const SInstagramFeed = styled.div`
  display: grid;
  row-gap: ${spaces.l}px;
`;

export const IgFeed = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  column-gap: ${spaces.xs}px;
`;

export const IgFeedImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const IgPostLink = styled.a`
  display: block;
  border-radius: 10px;
  overflow: hidden;
`;

export const ElfsightWrapper = styled.div`
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  opacity: 0;
`;

export const IgPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  background-color: ${colors.gray100};
  animation: loading 1.5s infinite;
  border-radius: 10px;
  @keyframes loading {
    0% {
      background-color: ${colors.gray100};
    }
    50% {
      background-color: ${colors.gray200};
    }
    100% {
      background-color: ${colors.gray100};
    }
  }
`;
