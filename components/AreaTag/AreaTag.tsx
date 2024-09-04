import { Nano } from "../Typo/Nano";
import { StyledAreaTag } from "./StyledAreaTag";

interface AreaTagProps {
  areaName: string;
}

const AreaTag = ({ areaName }: AreaTagProps) => {
  return (
    <StyledAreaTag>
      <Nano>{areaName.toLowerCase()}</Nano>
    </StyledAreaTag>
  );
};

export default AreaTag;
