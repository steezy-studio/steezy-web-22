import React, { CSSProperties, StyleHTMLAttributes } from "react";
import NextImage, { ImageProps } from "next/image";
import { StyledImg } from "./Styles/StyledImg";
import { StyledProps } from "styled-components";

interface ImgProps extends ImageProps {
  style?: CSSProperties | undefined;
}

const Img = ({ src, layout, width, height, style, ...rest }: ImgProps) => {
  return (
    <StyledImg style={style}>
      <NextImage
        src={src}
        layout={layout}
        width={width}
        height={height}
        {...rest}
      />
    </StyledImg>
  );
};

export default Img;
