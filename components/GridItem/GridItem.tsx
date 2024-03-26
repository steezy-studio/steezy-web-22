import parse, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import { useContext, useRef, useState } from "react";
import { Area, Asset } from "../../generated/types";
import {
  useIntersectionObserver,
  videoCallback,
} from "../../hooks/useIntersectionObserver";
import { HoverProvider } from "../../pages/_app";
import AreaTag from "../AreaTag/AreaTag";
import { Small } from "../Typo/Small";
import {
  GridItemAreas,
  GridItemCover,
  GridItemCoverWrapper,
  GridItemGrad,
  GridItemHeader,
  GridItemVideo,
  StyledGridItem,
} from "./Styles/StyledGridItem";

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
  slug,
  videoThumb,
  wide,
  cover,
}: GridItemProps) => {
  const [hover, sethover] = useState(false);
  const { setCursorType } = useContext(HoverProvider);
  const videoRef = useRef<HTMLVideoElement>(null);
  useIntersectionObserver(videoRef, (entries) =>
    videoCallback(entries, videoRef)
  );

  // const wide = width > height;

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === `p`) {
          return (
            <Small className={"white"}>
              {domToReact((domNode as Element).children as DOMNode[], options)}
            </Small>
          );
        }
      }
    },
  };

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
      <GridItemCoverWrapper>
        <GridItemGrad
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
        {cover[0].url ? (
          <GridItemCover
            src={cover[0].url}
            width={cover[0].width}
            placeholder={`blur`}
            blurDataURL={cover[0].url}
            height={cover[0].height}
            style={{ transform: `scale(${hover ? 1.05 : 1})` }}
            alt={projectName}
          />
        ) : (
          <GridItemVideo
            ref={videoRef}
            // @ts-ignore
            src={cover[0].cdn_files[0].url}
            poster={videoThumb}
            autoPlay={true}
            playsInline={true}
            muted={true}
            loop={true}
            style={{ transform: `scale(${hover ? 1.05 : 1})` }}
          />
        )}
      </GridItemCoverWrapper>
      <GridItemAreas>
        {areas.map(({ area_name, _slug }) => (
          <AreaTag key={area_name} areaName={area_name} />
        ))}
      </GridItemAreas>
      <GridItemHeader animate={{ y: hover ? "0%" : "-200%" }}>
        {parse(projectName, options)}
      </GridItemHeader>
    </StyledGridItem>
  );
};

export default GridItem;
