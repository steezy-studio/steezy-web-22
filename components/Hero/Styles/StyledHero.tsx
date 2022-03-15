import styled from "styled-components";
import u from "../../../helpers/unit";

export const StyledHero = styled.div`
  height: 100vh;
  padding: ${({ theme }) => theme.pageMargin} 0;
  position: relative;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  z-index: 2;
  padding-top: 80px;
`;

export const HeroSocials = styled.div`
  display: flex;
  gap: 10px;
`;

export const HeroText = styled.div`
  max-width: ${({ theme }) => u(4, theme.pageMargin)};
  margin-top: auto;
  margin-bottom: auto;
`;

export const HeroMedia = styled.div`
  position: absolute;
  right: 0;
  top: ${({ theme }) => theme.pageMargin};
  bottom: ${({ theme }) => theme.pageMargin};
  width: ${({ theme }) => u(13, theme.pageMargin)};
  display: flex;
  flex-direction: column;
`;

export const HeroMediaChildren = styled.div`
  margin-top: auto;
`;
