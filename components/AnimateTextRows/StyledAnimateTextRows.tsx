import styled from "styled-components";

export const StyledAnimateTextRows = styled.span`
  display: block;
  position: relative;
  overflow-y: hidden;
`;

export const HiddenText = styled.span`
  display: block;
  opacity: 0;
  z-index: -1;
  inset: 0;
  width: 100%;
  height: 100%;
`;

export const Text = styled.span`
  display: block;
  width: 100%;
  height: 100%;
`;
