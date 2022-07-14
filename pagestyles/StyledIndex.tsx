import styled from "styled-components";
import u from "../helpers/unit";

export const StyledIndex = styled.div``;

export const LandingHeroPageLogotypes = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 60px;
`;

export const LandingPageHeroLogotype = styled.img``;

export const LandingpageHeroClients = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 40px;
  justify-content: end;
`;

export const LandingpageGrid = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => `calc(4 * ${theme.pageMargin})`};
`;

export const LandingpageGridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.pageMargin};
`;

export const GridItemWrapper = styled.div`
  width: 100%;
  &.single {
    width: 75%;
    grid-column: 1/3;
    justify-self: end;
  }
  &.offset:not(:last-child) {
    margin-top: 40%;
  }
`;

export const Intro = styled.div`
  width: ${({ theme }) => u(6, theme.pageMargin)};
  margin-left: ${({ theme }) => u(4, theme.pageMargin)};
  transform: translateY(${({ theme }) => u(1.75, theme.pageMargin)});
  position: relative;
  z-index: 2;
  display: grid;
  grid-gap: 60px;
`;
