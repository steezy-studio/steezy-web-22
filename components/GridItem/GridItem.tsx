import parse, {
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import React, { useState } from "react";
import { Area } from "../../generated/types";
import Img from "../Img/Img";
import { StyledLink } from "../Link/Styles/StyledLink";
import { Caption } from "../Typo/Caption";
import {
  GridItemAreas,
  GridItemCoverWrapper,
  GridItemHeader,
  StyledGridItem,
} from "./Styles/StyledGridItem";

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
  const [hover, sethover] = useState(false);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === `p`) {
          return (
            <StyledLink as={`div`} className={hover ? `hover` : ``}>
              {domToReact(domNode.children, options)}
            </StyledLink>
          );
        }
      }
    },
  };

  return (
    <StyledGridItem
      href={`/project/${slug}`}
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}>
      <GridItemCoverWrapper>
        <Img
          src={src}
          width={width}
          placeholder={`blur`}
          blurDataURL={src}
          height={height}
          layout={`responsive`}
          style={{ transform: `scale(${hover ? 1.05 : 1})` }}
        />
      </GridItemCoverWrapper>
      <GridItemAreas>
        {areas.map(({ area_name, _slug }) => (
          <Caption key={_slug} className="lowcase">
            {area_name}
          </Caption>
        ))}
      </GridItemAreas>
      <GridItemHeader>{parse(projectName, options)}</GridItemHeader>
    </StyledGridItem>
  );
};

export default GridItem;
