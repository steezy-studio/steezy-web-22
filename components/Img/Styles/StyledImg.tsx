import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import { StyledProject } from "../../../pagestyles/StyledProject";
import { ContactUs } from "../../Navbar/Styles/StyledNavbar";
import { StyledSlider } from "../../Slider/Styles/StyledSlider";

export const StyledImg = styled(motion.div)`
  ${ContactUs} & {
    width: 20px;
  }
  ${StyledProject} & {
    &.client-logo {
      height: 100%;
      max-height: 100px;
      align-self: start;
      width: 100%;
      ${breakpoint.tabletLandscape} {
        justify-self: end;
      }
      ${breakpoint.phone} {
        max-height: 70px;
        width: auto;
        justify-self: start;
      }
    }
  }
  ${StyledSlider} & {
    padding-right: 10px;
    ${breakpoint.phone} {
      padding-right: 5px;
    }
  }
`;
