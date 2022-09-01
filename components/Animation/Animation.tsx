import React, {
  Fragment,
  ReactElement,
  ReactNode,
  useRef,
  useState,
} from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const variants = {
  fadeFromBottom: {
    enter: { y: `20%`, opacity: 0 },
    animate: { y: `0%`, opacity: 1 },
    exit: { y: `-20%`, opacity: 0 },
  },
  fadeIn: {
    enter: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
};

interface AnimationProps {
  children: ReactElement;
  type: keyof typeof variants;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
  staggerChildren?: number;
  once?: boolean;
}

const Animation = ({
  children,
  type,
  duration,
  delay,
  style,
  staggerChildren,
  once = true,
}: AnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useIntersectionObserver(
    ref,
    (entries) => {
      entries.forEach((entry) => {
        setVisible((prev) => {
          if (once) {
            return !prev ? entry.isIntersecting : true;
          }
          return entry.isIntersecting;
        });
      });
    },
    { threshold: 0 }
  );

  const animProps = {
    ref: ref,
    initial: "enter",
    animate: visible ? "animate" : "initial",
    exit: "exit",
    variants: variants[type],
    style: style,
    transition: {
      delay: delay ? delay : 0,
      duration: duration ? duration : 0.9,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: staggerChildren || 0,
    },
  };

  const childrenWithProps = React.Children.map<ReactNode, ReactNode>(
    children,
    (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement<typeof animProps>(child, animProps);
      }
      return child;
    }
  );

  return <Fragment>{childrenWithProps}</Fragment>;
};

export default Animation;
