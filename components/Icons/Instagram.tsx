import React, { useContext } from "react";
import styled from "styled-components";
import { breakpoint, ColorKeys, colors } from "../../helpers/consts";
import { HoverProvider } from "../../pages/_app";

interface InstagramProps {
  fill?: ColorKeys;
  as?: keyof JSX.IntrinsicElements;
}

const StyledInstagram = styled.a`
  width: 21px;
  height: 21px;
  display: block;
  svg {
    width: 100%;
    height: 21px;
  }
`;

const Instagram = ({ fill = "black", as = "a" }: InstagramProps) => {
  const { setCursorType } = useContext(HoverProvider);
  return (
    <StyledInstagram
      as={as}
      onMouseEnter={() => {
        setCursorType("hover");
      }}
      onMouseLeave={() => {
        setCursorType("normal");
      }}
      href='https://www.instagram.com/steezy.studio/'
      target={`_blank`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24.328'
        height='24.47'
        viewBox='0 0 24.328 24.47'
      >
        <g id='Group_6243' data-name='Group 6243'>
          <path
            id='Path_14540'
            data-name='Path 14540'
            d='M24.249,6.344A6.506,6.506,0,0,0,18.054.117,6.264,6.264,0,0,1,17.4,0H6.846c-.7.129-1.41.208-2.092.4A6.487,6.487,0,0,0,0,6.049V18.373a12.088,12.088,0,0,0,.318,1.444,6.3,6.3,0,0,0,5.939,4.591c3.921.075,7.846.092,11.766-.005a6.393,6.393,0,0,0,6.223-6.171q.168-5.94,0-11.888M17.49,22.2q-5.365.087-10.734,0A4.39,4.39,0,0,1,2.19,17.61q-.077-5.334,0-10.671a4.408,4.408,0,0,1,4.622-4.6q5.3-.07,10.61,0a4.428,4.428,0,0,1,4.636,4.593c.05,1.777.009,3.558.009,5.336h.006v4.615c-.032.463-.071.925-.129,1.384A4.188,4.188,0,0,1,17.49,22.2'
            transform='translate(0 0)'
            fill={colors[fill]}
          />
          <path
            id='Path_14541'
            data-name='Path 14541'
            d='M17.708,12.019a6.322,6.322,0,1,0,6.63,5.467,6.494,6.494,0,0,0-6.63-5.467M18.063,22.4a4.057,4.057,0,1,1,4.055-4.033A4.033,4.033,0,0,1,18.063,22.4'
            transform='translate(-5.938 -6.071)'
            fill={colors[fill]}
          />
          <path
            id='Path_14542'
            data-name='Path 14542'
            d='M36.22,8.553a1.513,1.513,0,0,0-1.495,1.533,1.542,1.542,0,0,0,1.508,1.466,1.526,1.526,0,0,0,1.49-1.541,1.5,1.5,0,0,0-1.5-1.458'
            transform='translate(-17.557 -4.324)'
            fill={colors[fill]}
          />
        </g>
      </svg>
    </StyledInstagram>
  );
};

export default Instagram;
