import { motion } from "framer-motion";
import styled from "styled-components";
import { spaces } from "../../helpers/spaces";

export const StyledClientQuote = styled.blockquote`
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

export const QuoteClientInner = styled(motion.div)``;
