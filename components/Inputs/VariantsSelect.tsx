import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ProductVariantConnection } from "@shopify/hydrogen-react/storefront-api-types";
import { Nano } from "../Typo/Nano";
import {
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  StyledVariantsSelect,
} from "./StyledVariantsSelect";
import Label from "./Label";
import { LabelWrapper } from "./StyledLabel";

interface VariantsSelectProps {
  variants: ProductVariantConnection;
  onChange: (variantId: string) => void;
}

const VariantsSelect = ({ variants, onChange }: VariantsSelectProps) => {
  const defaultOpt = variants.nodes[0];
  return (
    <LabelWrapper>
      <Label label='size' />
      <StyledVariantsSelect onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={<Nano>{defaultOpt.title}</Nano>} />
          <ChevronDownIcon />
        </SelectTrigger>

        <SelectContent
          position='popper'
          sideOffset={10}
          defaultValue={defaultOpt.id}
        >
          <SelectViewport>
            {variants.nodes.map(({ title, id }) => (
              <SelectItem value={id} key={id}>
                <SelectItemText>
                  <Nano>{title}</Nano>
                </SelectItemText>
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </StyledVariantsSelect>
    </LabelWrapper>
  );
};

export default VariantsSelect;
