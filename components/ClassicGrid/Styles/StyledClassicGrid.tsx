import styled from "styled-components";

export const StyledClassicGrid = styled.div`
  display: grid;
  column-gap: ${({ theme }) => theme.pageMargin};
`;
