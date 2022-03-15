import styled from "styled-components";

export const StyledVideo = styled.div<{ ratio: number }>`
  position: relative;
  padding-bottom: ${({ ratio }) => ratio * 100}%;
  video {
    width: 100%;
    position: absolute;
    object-position: top;
    inset: 0;
    height: 100%;
  }
`;
