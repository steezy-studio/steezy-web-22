import React from "react";
import NextImage, { ImageProps } from "next/image";
import { StyledImg } from "./Styles/StyledImg";

interface ImgProps extends ImageProps {}

const Img = ({ src, layout, width, height }: ImgProps) => {
  return (
    <StyledImg>
      <NextImage src={src} layout={layout} width={width} height={height} />
    </StyledImg>
  );
};

export default Img;
