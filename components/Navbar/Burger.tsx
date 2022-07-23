import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { colors } from "../../helpers/consts";
import { StyledBurger } from "./Styles/StyledBurger";

interface BurgerProps {
  onClick: () => void;
  isOpen: boolean;
}

const Line = (props) => (
  <motion.line fill='none' stroke={colors.white} strokeWidth='2' {...props} />
);

const Burger = ({ onClick, isOpen }: BurgerProps) => {
  return (
    <StyledBurger onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 45 45'
        width={45}
        height={45}>
        <Line
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { x1: 0, y1: 15.719, x2: 45, y2: 15.719 },
            open: {
              x1: 6.5901,
              y1: 6.5901,
              x2: 38.4099,
              y2: 38.4099,
            },
          }}
        />
        <Line
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {
              x1: 0,
              y1: 29.281,
              x2: 45,
              y2: 29.281,
            },
            open: {
              x1: 38.4099,
              y1: 6.5901,
              x2: 6.5901,
              y2: 38.4099,
            },
          }}
        />
      </svg>
    </StyledBurger>
  );
};

export default Burger;
