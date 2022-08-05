import React from "react";
import styled from "styled-components";
import { breakpoint, ColorKeys, colors } from "../../helpers/consts";

interface InstagramProps {
  fill?: ColorKeys;
}

const StyledVimeo = styled.a`
  svg {
    height: 100%;
  }
`;

const Vimeo = ({ fill = "black" }: InstagramProps) => {
  return (
    <StyledVimeo href='https://vimeo.com/steezystudio' target={`_blank`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25.053'
        height='21.606'
        viewBox='0 0 25.053 21.606'>
        <defs>
          <clipPath id='clip-path'>
            <rect
              id='Rectangle_623'
              data-name='Rectangle 623'
              width='25.053'
              height='21.606'
              transform='translate(0)'
              fill='none'
            />
          </clipPath>
        </defs>
        <g
          id='Group_6245'
          data-name='Group 6245'
          transform='translate(0)'
          clipPath='url(#clip-path)'>
          <path
            id='Path_14543'
            data-name='Path 14543'
            d='M24.946,4.021a3.6,3.6,0,0,0-.465-2.943c-.9-1.143-2.828-1.185-4.146-.984A8.7,8.7,0,0,0,14.4,5.688c2.186-.166,3.332.158,3.122,2.565a8.863,8.863,0,0,1-1.165,3.169c-.656,1.219-1.886,3.614-3.5,1.887-1.453-1.553-1.343-4.524-1.675-6.5a27.239,27.239,0,0,0-.744-3.634A3.712,3.712,0,0,0,8.53.749a3.907,3.907,0,0,0-2.8.56C3.551,2.592,1.888,4.417,0,5.922v.14c.374.358.476.944,1.026,1.024,1.3.192,2.537-1.211,3.4.248a15.009,15.009,0,0,1,1.026,2.83c.449,1.281.8,2.675,1.165,4.146.622,2.493,1.387,6.219,3.542,7.132,1.1.468,2.753-.158,3.589-.654a20.05,20.05,0,0,0,5.544-5.264,35.807,35.807,0,0,0,5.651-11.5'
            transform='translate(0 0)'
            fill={colors[fill]}
            fillRule='evenodd'
          />
        </g>
      </svg>
    </StyledVimeo>
  );
};

export default Vimeo;
