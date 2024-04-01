import styled from "styled-components";
import * as RSelect from "@radix-ui/react-select";
import { colors } from "../../helpers/consts";
import { spaces } from "../../helpers/spaces";

export const StyledVariantsSelect = styled(RSelect.Root)`
  position: relative;
  width: 100%;
`;

export const SelectTrigger = styled(RSelect.Trigger)`
  all: unset;
  box-sizing: border-box;
  height: 60px;
  width: 100%;
  border: 1px solid ${colors.black};
  border-radius: 5px;
  padding: 0 ${spaces.s}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectValue = styled(RSelect.Value)``;

export const SelectPortal = styled(RSelect.Portal)``;

export const SelectContent = styled(RSelect.Content)`
  background-color: ${colors.white};
  border-radius: 5px;
  border: 1px solid ${colors.black};
  width: var(--radix-select-trigger-width);
  position: relative;
  z-index: 1;
`;

export const SelectViewport = styled(RSelect.Viewport)`
  width: 100%;
`;

export const SelectItem = styled(RSelect.Item)`
  width: 100%;
  height: 60px;
  padding: 0 ${spaces.s}px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  &:focus {
    border: 0;
    outline: none;
    background-color: ${colors.primary300};
  }
`;

export const SelectItemText = styled(RSelect.ItemText)``;

export const SelectItemIndicator = styled(RSelect.ItemIndicator)``;
