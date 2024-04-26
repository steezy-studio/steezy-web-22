import styled from "styled-components";
import { spaces } from "../../helpers/spaces";

export const StyledClientQuote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  row-gap: ${spaces.l}px;
  max-width: 900px;
`;

export const QuoteClient = styled.div`
  overflow-y: hidden;
`;
