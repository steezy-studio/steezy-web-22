import * as RadixDialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import { spaces } from "../../../helpers/spaces";

export const StyledDialog = styled(RadixDialog.Root)``;

export const DialogWrapper = styled(motion.div)`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(10px);
  z-index: 99;
`;

export const VisuallyHidden = styled.div`
  visibility: hidden;
  position: absolute;
`;

export const ContentWrapper = styled(motion.div)`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const Content = styled(RadixDialog.Content)``;

export const Close = styled(RadixDialog.Close)`
  width: 60px;
  height: 60px;
  background-color: ${colors.black};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.bRad};
  position: absolute;
  right: ${spaces.m}px;
  top: ${spaces.m}px;
  border: 0;
  padding: 5px;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  ${breakpoint.smallNotebook} {
    height: 60px;
    width: 60px;
  }
  ${breakpoint.tabletLandscape} {
    height: 50px;
    width: 50px;
  }
  ${breakpoint.phone} {
    height: 40px;
    width: 40px;
  }
`;

export const Trigger = styled(RadixDialog.Trigger)`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 0;
`;

export const Overlay = styled(RadixDialog.Overlay)`
  position: absolute;
  inset: 0;
  z-index: 991;
`;

export const OverlayW = styled(motion.div)``;
