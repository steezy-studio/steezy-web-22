import { Transition } from "framer-motion";
import { easingInOutCubic } from "../../helpers/animationConfig";
import AnimateTextRows from "../AnimateTextRows/AnimateTextRows";
import { Large } from "../Typo/Large";
import { Micro } from "../Typo/Micro";
import { QuoteClient, StyledClientQuote } from "./StyledClientQuote";

interface ClientQuoteProps {
  quote: string;
  clientName: string;
  clientRole: string;
}

const ClientQuote = ({ quote, clientName, clientRole }: ClientQuoteProps) => {
  const delay = 0.02;

  const createTransition = (delay) =>
    ({
      delay: delay,
      duration: 1.7,
      ease: easingInOutCubic,
    } as Transition);
  return (
    <StyledClientQuote>
      <Large className='smaller'>
        <AnimateTextRows
          motionProps={(i, ref) => ({
            initial: {
              y: `${ref.current.clientHeight + 50}px`,
              skewY: "3deg",
            },
            animate: { y: `0px`, skewY: "0deg" },
            exit: {
              y: `${-ref.current.clientHeight - 50}px`,
              skewY: "3deg",
            },
            transition: createTransition((i + 1) * delay),
          })}
        >
          {quote}
        </AnimateTextRows>
      </Large>
      <QuoteClient>
        <Micro
          initial={{ y: `100%`, skewY: "3deg" }}
          animate={{ y: `0%`, skewY: "0deg" }}
          exit={{ y: `-100%`, skewY: "3deg" }}
          transition={createTransition(delay)}
        >
          {clientName}
          <br />
          {clientRole}
        </Micro>
      </QuoteClient>
    </StyledClientQuote>
  );
};

export default ClientQuote;
