import React from "react";
import { StyledLabel } from "./StyledLabel";
import { Nano } from "../Typo/Nano";

interface LabelProps {
  label: string;
}

const Label = ({ label }: LabelProps) => {
  return (
    <StyledLabel>
      <Nano>{label}</Nano>
    </StyledLabel>
  );
};

export default Label;
