"use client";

import React from "react";
import styled from "styled-components";

interface PlusProps {}

const StyledPlus = styled.svg``;

const Plus = ({}: PlusProps) => {
  return (
    <StyledPlus
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 18 18'>
      <line
        y2='18'
        transform='translate(9)'
        fill='none'
        stroke='#000'
        strokeWidth='2'
      />
      <line
        y2='18'
        transform='translate(18 9) rotate(90)'
        fill='none'
        stroke='#000'
        strokeWidth='2'
      />
    </StyledPlus>
  );
};

export default Plus;
