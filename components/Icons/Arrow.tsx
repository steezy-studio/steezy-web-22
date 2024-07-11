"use client";

import styled from "styled-components";
import { ColorKeys, colors } from "../../helpers/consts";

interface ArrowProps {
  fill?: ColorKeys;
}

const SArrow = styled.svg``;

const Arrow = ({ fill = "white" }: ArrowProps) => {
  return (
    <SArrow
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 107.10219 107.10219'
    >
      <polyline
        points='.35355 53.90465 53.55109 .70711 106.74864 53.90465'
        fill='none'
        stroke={colors[fill]}
        strokeMiterlimit='10'
        vectorEffect={"non-scaling-stroke"}
      />
      <line
        x1='53.55109'
        y1='.70711'
        x2='53.55109'
        y2='107.10219'
        fill='none'
        stroke={colors[fill]}
        strokeMiterlimit='10'
        vectorEffect={"non-scaling-stroke"}
      />
    </SArrow>
  );
};

export default Arrow;
