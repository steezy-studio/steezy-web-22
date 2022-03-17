import React from "react";
import { Area } from "../../generated/types";
import Img from "../Img/Img";
import { Caption } from "../Typo/Caption";
import { Header } from "../Typo/Header";
import { GridItemAreas, StyledGridItem } from "./Styles/StyledGridItem";

interface GridItemProps {
  src: string;
  width: number;
  height: number;
  areas: Area[];
  projectName: string;
  slug: string;
}

const GridItem = ({
  areas,
  height,
  src,
  width,
  projectName,
  slug,
}: GridItemProps) => {
  return (
    <StyledGridItem href={`/project/${slug}`}>
      <Img src={src} width={width} height={height} />
      <GridItemAreas>
        {areas.map(({ area_name, _slug }) => (
          <Caption key={_slug}>{area_name}</Caption>
        ))}
      </GridItemAreas>
      <Header>{projectName}</Header>
    </StyledGridItem>
  );
};

export default GridItem;
