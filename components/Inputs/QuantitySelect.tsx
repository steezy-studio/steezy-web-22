import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Label from "./Label";
import { LabelWrapper } from "./StyledLabel";
import {
  QuantityIconWrapper,
  QuantityInput,
  StyledQuantitySelect,
} from "./StyledQuantitySelect";

interface QuantitySelectProps {
  onQuantityChange?: (quantity: number) => void;
  quantityAvaible: number;
}

const QuantitySelect = ({
  onQuantityChange,
  quantityAvaible,
}: QuantitySelectProps) => {
  const [quantity, setquantity] = useState<number>(1);

  const handleValueChange = (newVal) => {
    if (isNaN(newVal) || newVal < 1) return;

    const value = Number(newVal);
    setquantity(value);
    onQuantityChange(value);
  };

  const validateQuantity = () => {
    if (quantity < 1) {
      setquantity(1);
      onQuantityChange(1);
    } else if (quantity > quantityAvaible) {
      setquantity(quantityAvaible);
      onQuantityChange(quantityAvaible);
    }
  };

  return (
    <LabelWrapper>
      <Label label='Quantity' />
      <StyledQuantitySelect>
        <QuantityIconWrapper
          onClick={() => {
            handleValueChange(quantity - 1);
            validateQuantity();
          }}
        >
          <MinusIcon />
        </QuantityIconWrapper>
        <QuantityInput
          type='text'
          name='quantity'
          value={quantity}
          onBlur={validateQuantity}
          onChange={(e) => {
            handleValueChange(e.target.value);
          }}
        />
        <QuantityIconWrapper
          className='end'
          onClick={() => {
            handleValueChange(quantity + 1);
            validateQuantity();
          }}
        >
          <PlusIcon />
        </QuantityIconWrapper>
      </StyledQuantitySelect>
    </LabelWrapper>
  );
};

export default QuantitySelect;
