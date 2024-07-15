import Image from "next/image";
import styled from "styled-components";
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
