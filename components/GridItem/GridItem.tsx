import { useContext, useState } from "react";
import { Area, Asset } from "../../generated/types";
import { HoverProvider } from "../../pages/_app";
import ProjectCard from "../ProjectCard/ProjectCard";
import { StyledGridItem } from "./Styles/StyledGridItem";

interface GridItemProps {
  areas: Area[];
  projectName: string;
  slug: string;
  videoThumb?: string;
  wide?: boolean;
  cover: Asset[];
}

const GridItem = ({
  areas,
  projectName,
  videoThumb,
  cover,
  slug,
  wide,
}: GridItemProps) => {
  const [hover, sethover] = useState(false);
  const { setCursorType } = useContext(HoverProvider);

  return (
    <StyledGridItem
      className={wide ? "wide" : ""}
      href={`/project/${slug}`}
      onMouseEnter={() => {
        sethover(true);
        setCursorType("hover");
      }}
      onMouseLeave={() => {
        sethover(false);
        setCursorType("normal");
      }}
    >
      <ProjectCard
        projectName={projectName}
        areas={areas}
        cover={cover}
        videoThumb={videoThumb}
        hover={hover}
        wide={wide}
      />
    </StyledGridItem>
  );
};

export default GridItem;
