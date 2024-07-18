import { motion } from "framer-motion";
import strings from "../../data/strings";
import { easing } from "../../helpers/animationConfig";
import { romanizeNums } from "../../helpers/romanizeNums";
import HeaderLine from "../HeaderLine/HeaderLine";
import { Medium } from "../Typo/Medium";
import { Micro } from "../Typo/Micro";
import { Small } from "../Typo/Small";
import {
  Order,
  StyledValueItem,
  ValueBody,
  ValueHeader,
} from "./StyledValueItem";

interface ValueItemProps {
  header: string;
  perex: string;
  order: number;
  isFocused: boolean;
  id: number;
}

const ValueItem = ({ header, order, perex, id, isFocused }: ValueItemProps) => {
  const formatedOrder = `${romanizeNums(order + 1)}.`;

  return (
    <StyledValueItem data-focused-id={id}>
      <div>
        {isFocused && (
          <motion.div
            layout
            layoutId={`value-header`}
            transition={{ ease: easing, duration: 0.5 }}
          >
            <HeaderLine>
              <Micro className='uppercase' as={"h2"}>
                {strings.studioPage.values.header}
              </Micro>
            </HeaderLine>
          </motion.div>
        )}
      </div>

      <ValueBody>
        <Order>{formatedOrder}</Order>
        <ValueHeader>
          <Medium className='medium' as={"h3"}>
            {header}
          </Medium>
          <Small className='big-lh'>{perex}</Small>
        </ValueHeader>
      </ValueBody>
    </StyledValueItem>
  );
};

export default ValueItem;
