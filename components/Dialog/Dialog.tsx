import * as RadixDialog from "@radix-ui/react-dialog";
import { useState } from "react";
import {
  Close,
  Content,
  Overlay,
  StyledDialog,
  Trigger,
} from "./Styles/StyledDialog";

interface DialogProps extends RadixDialog.DialogProps {
  content: JSX.Element;
  trigger: JSX.Element;
}

const Dialog = ({ content, trigger, ...rest }: DialogProps) => {
  return (
    <StyledDialog {...rest}>
      <Trigger>{trigger}</Trigger>
      <RadixDialog.Portal>
        <Overlay />
        <Content>
          <Close>
            <img src={"icons/close.svg"} />
          </Close>
          {content}
        </Content>
      </RadixDialog.Portal>
    </StyledDialog>
  );
};

export default Dialog;
