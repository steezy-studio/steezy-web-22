"use client";

import React from "react";
import styled from "styled-components";

interface MinusProps {}

const StyledMinus = styled.svg``;

const Minus = ({}: MinusProps) => {
  return (
    <StyledMinus
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 18 18'>
      <line
        y2='18'
        transform='translate(18 9) rotate(90)'
        fill='none'
        stroke='#000'
        strokeWidth='2'
      />
    </StyledMinus>
  );
};

export default Minus;
