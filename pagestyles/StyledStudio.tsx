import styled from "styled-components";
import { colors } from "../consts";
import u from "../helpers/unit";

export const StyledStudio = styled.div``;

export const TextBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  margin: ${({ theme }) => u(1.5, theme.pageMargin)} 0;
  .header {
    display: grid;
    align-items: start;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    grid-gap: 60px;
    padding-right: 60px;
  }
`;

export const ValuesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: ${({ theme }) => u(2, theme.pageMargin)} 0;
`;

export const ValuesInner = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  column-gap: 60px;
`;

export const ValuesList = styled.div`
  display: grid;
  row-gap: ${({ theme }) => u(1, theme.pageMargin)};
`;

export const ValueItem = styled.div`
  position: relative;
  padding-left: ${({ theme }) => u(1, theme.pageMargin)};
`;

export const ValueHeader = styled.div`
  display: grid;
  row-gap: 30px;
`;

export const Order = styled.span`
  font-size: 110px;
  font-family: "migra-italic";
  font-weight: 400;
  letter-spacing: 0.02em;
  color: ${colors.black};
  position: absolute;
  left: 0;
  top: -0.45em;
`;

export const ServicesSection = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 60px;
  align-items: start;
  width: ${({ theme }) => u(12, theme.pageMargin)};
  margin: ${({ theme }) => u(2, theme.pageMargin)} 0;
`;

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: ${({ theme }) => u(0.5, theme.pageMargin)};
`;

export const SubServicesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 30px;
`;

export const BlockquoteSection = styled.section``;

export const Blockquote = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.pageMargin};
  &._1 {
    margin-top: ${({ theme }) => u(6, theme.pageMargin)};
  }
`;

export const Quote = styled.div`
  white-space: pre-wrap;
  &.offset-y-1 {
    transform: translateY(-40%);
  }
  &.offset-y-2 {
    align-self: end;
    margin-bottom: ${({ theme }) => u(1, theme.pageMargin)};
  }
  &.offset-y-3 {
    transform: translateY(40%);
    position: relative;
    z-index: 1;
  }
`;

export const BrandsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: ${({ theme }) => u(3, theme.pageMargin)} 0
    ${({ theme }) => u(1, theme.pageMargin)};
`;

export const BrandsText = styled.div`
  display: grid;
  grid-template-columns: auto ${({ theme }) => u(4, theme.pageMargin)};
  align-items: start;
  justify-content: start;
  grid-gap: 60px;
  margin-top: 60px;
`;

export const Logotypes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
export const Logo = styled.img``;

export const Outro = styled.div``;
