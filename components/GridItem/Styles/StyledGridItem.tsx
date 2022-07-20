import styled from "styled-components";

export const StyledGridItem = styled.a`
  display: grid;
  grid-gap: 20px;
  align-items: flex-start;
  color: unset;
`;

export const GridItemAreas = styled.div``;

export const GridItemCoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const GridItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const GridItemVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
  transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
  position: absolute;
  inset: 0;
`;

export const VideoWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;
