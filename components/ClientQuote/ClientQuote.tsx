import { Transition } from "framer-motion";
import { easingInOutCubic } from "../../helpers/animationConfig";
import AnimateTextRows from "../AnimateTextRows/AnimateTextRows";
import { Large } from "../Typo/Large";
import { Micro } from "../Typo/Micro";
import {
  QuoteClient,
  QuoteClientInner,
  StyledClientQuote,
} from "./StyledClientQuote";

interface ClientQuoteProps {
  quote: string;
  clientName: string;
  clientRole: string;
  animated?: boolean;
}

const createTransition = (delay) =>
  ({
    delay: delay,
    duration: 1.7,
    ease: easingInOutCubic,
  } as Transition);

const ClientQuote = ({
  quote,
  clientName,
  clientRole,
  animated = true,
}: ClientQuoteProps) => {
  const delay = 0.02;

  return (
    <StyledClientQuote>
      <Large as='p'>
        {animated ? (
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
        ) : (
          quote
        )}
      </Large>
      <QuoteClient>
        <QuoteClientInner
          initial={{ y: `110%`, skewY: "0deg" }}
          animate={{ y: `0%`, skewY: "0deg" }}
          exit={{ y: `-110%`, skewY: "0deg" }}
          transition={createTransition(delay)}
        >
          <Micro>
            {clientName}
            <br />
            {clientRole}
          </Micro>
        </QuoteClientInner>
      </QuoteClient>
    </StyledClientQuote>
  );
};

export default ClientQuote;
