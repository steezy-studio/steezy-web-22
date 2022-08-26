import { m, motion } from "framer-motion";
import { relative } from "path";
import styled from "styled-components";
import { breakpoint, colors } from "../helpers/consts";
import u from "../helpers/unit";

export const StyledValueItem = styled.div<{ order: number }>`
  position: relative;
  display: grid;
  grid-template-columns: 300px 1fr;
  column-gap: ${({ theme }) => `calc( 2* ${theme.pageMargin} )`};
`;

export const ValueCover = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const ValueCoverWrapper = styled.div`
  position: relative;
  transform: translateY(-50%);
`;

export const ValueItemContent = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`;

export const ValueBody = styled.div`
  position: relative;
  padding-left: 140px;
  max-width: 600px;
  ${breakpoint.largeNotebook} {
    padding-left: 100px;
  }
  ${breakpoint.smallNotebook} {
    padding-left: 90px;
  }
  ${breakpoint.phone} {
    padding-left: 0;
  }
`;

export const ValueHeader = styled.div`
  display: grid;
  grid-row-gap: 30px;
  ${breakpoint.phone} {
    grid-row-gap: 10px;
  }
`;

export const Order = styled.span`
  font-size: 100px;
  font-family: "migra-italic";
  font-weight: 400;
  letter-spacing: 0.02em;
  color: ${colors.black};
  position: absolute;
  left: 0;
  top: -0.52em;
  ${breakpoint.largeNotebook} {
    font-size: 70px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 60px;
  }
  ${breakpoint.phone} {
    position: static;
  }
`;
