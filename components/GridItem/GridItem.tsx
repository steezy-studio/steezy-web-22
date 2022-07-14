import React from "react";
import parse, {
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import { type } from "os";
import { useRef, useState } from "react";
import { Area } from "../../generated/types";
import Img from "../Img/Img";
import { StyledLink } from "../Link/Styles/StyledLink";
import { Micro } from "../Typo/Micro";
import {
  GridItemAreas,
  GridItemCoverWrapper,
  GridItemHeader,
  StyledGridItem,
  GridItemVideo,
  VideoWrapper,
} from "./Styles/StyledGridItem";
import { useIntersectionVideoObserver } from "../../hooks/useIntersectionVideoObserver";

interface GridItemProps {
  src: string;
  width: number;
  height: number;
  areas: Area[];
  projectName: string;
  slug: string;
  type: string;
  videoThumb?: string;
}

const GridItem = ({
  areas,
  height,
  src,
  width,
  projectName,
  slug,
  type,
  videoThumb,
}: GridItemProps) => {
  const [hover, sethover] = useState(false);
  const [videoAspect, setVideoAspect] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  useIntersectionVideoObserver(videoRef);

  React.useEffect(() => {
    if (videoRef.current) {
      setVideoAspect(
        videoRef.current.videoHeight / videoRef.current.videoWidth
      );
    }
  }, []);

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
        {type === "Photo" && (
          <Img
            src={src}
            width={width}
            placeholder={`blur`}
            blurDataURL={src}
            height={height}
            layout={`responsive`}
            style={{ transform: `scale(${hover ? 1.05 : 1})` }}
          />
        )}
        {type === "Video" && (
          <VideoWrapper style={{ paddingBottom: `${videoAspect * 100}%` }}>
            <GridItemVideo
              ref={videoRef}
              src={src}
              poster={videoThumb}
              autoPlay={true}
              playsInline={true}
              muted={true}
              loop={true}
              style={{ transform: `scale(${hover ? 1.05 : 1})` }}
            />
          </VideoWrapper>
        )}
      </GridItemCoverWrapper>
      <GridItemAreas>
        {areas.map(({ area_name, _slug }) => (
          <Micro key={_slug} className='lowcase'>
            {area_name}
          </Micro>
        ))}
      </GridItemAreas>
      <GridItemHeader>{parse(projectName, options)}</GridItemHeader>
    </StyledGridItem>
  );
};

export default GridItem;
