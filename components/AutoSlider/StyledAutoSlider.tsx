import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../helpers/consts";
import { spaces } from "../../helpers/spaces";

export const StyledAutoSlider = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: ${spaces.xl}px;
`;

export const AutoSliderItem = styled(motion.div)`
  height: 100%;
`;

export const SliderItems = styled(motion.div)`
  height: 100%;
`;

export const Indicators = styled.div`
  display: flex;
  column-gap: ${spaces.xxs}px;
`;

export const Indicator = styled(motion.div)`
  height: 2px;
  width: 45px;
  background-color: ${colors.black};
`;
