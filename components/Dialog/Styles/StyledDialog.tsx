import styled, { keyframes } from "styled-components";
import * as RadixDialog from "@radix-ui/react-dialog";
import { colors } from "../../../consts";
import u from "../../../helpers/unit";

export const StyledDialog = styled(RadixDialog.Root)``;

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -45%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const Content = styled(RadixDialog.Content)`
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: ${colors.black};
  z-index: 999;
  animation: ${contentShow} 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;
export const Close = styled(RadixDialog.Close)`
  width: 80px;
  height: 80px;
  background-color: ${colors.black};
  border-radius: 0;
  position: absolute;
  right: 0;
  top: -80px;
  border: 0;
  cursor: pointer;
`;

export const Trigger = styled(RadixDialog.Trigger)`
  border: none;
  outline: none;
  border-radius: 0;
`;

export const Overlay = styled(RadixDialog.Overlay)`
  background-color: ${colors.primary300};
  position: fixed;
  inset: 0;
  z-index: 998;
  cursor: pointer;
  animation: ${overlayShow} 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;
