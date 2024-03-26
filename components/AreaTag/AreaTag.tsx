import React from "react";
import { StyledAreaTag } from "./StyledAreaTag";
import { Nano } from "../Typo/Nano";

interface AreaTagProps {
  areaName: string;
}

const AreaTag = ({ areaName }: AreaTagProps) => {
  return (
    <StyledAreaTag>
      <Nano className='lowcase'>{areaName.toLowerCase()}</Nano>
    </StyledAreaTag>
  );
};

export default AreaTag;
