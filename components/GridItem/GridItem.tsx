import parse, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import { Fragment, useContext, useRef, useState } from "react";
import { Area } from "../../generated/types";
import {
  useIntersectionObserver,
  videoCallback,
} from "../../hooks/useIntersectionObserver";
import { HoverProvider } from "../../pages/_app";
import Animation from "../Animation/Animation";
import Img from "../Img/Img";
import { StyledLink } from "../Link/Styles/StyledLink";
import { Micro } from "../Typo/Micro";
import {
  GridItemAreas,
  GridItemCover,
  GridItemCoverWrapper,
  GridItemHeader,
  GridItemVideo,
  StyledGridItem,
  VideoWrapper,
} from "./Styles/StyledGridItem";

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
  // const [videoAspect, setVideoAspect] = useState(0);
  const { setCursorType } = useContext(HoverProvider);
  const videoRef = useRef<HTMLVideoElement>(null);
  useIntersectionObserver(videoRef, (entries) =>
    videoCallback(entries, videoRef)
  );

  // React.useEffect(() => {
  //   if (videoRef.current) {
  //     setVideoAspect(
  //       // videoRef.current.innerHeight / videoRef.current.videoWidth
  //       0
  //     );
  //   }
  // }, []);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === `p`) {
          return (
            <Fragment>
              {domToReact((domNode as Element).children as DOMNode[], options)}
            </Fragment>
          );
        }
      }
    },
  };

  return (
    <Animation type={"fadeFromBottom"} delay={0.2} duration={1.2}>
      <StyledGridItem
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
          {type === "Photo" && (
            <GridItemCover
              src={src}
              width={width}
              placeholder={`blur`}
              blurDataURL={src}
              height={height}
              layout={`responsive`}
              style={{ transform: `scale(${hover ? 1.05 : 1})` }}
              alt={projectName}
            />
          )}
          {type === "Video" && (
            <VideoWrapper>
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
            <Micro key={area_name} className='lowcase'>
              {area_name}
            </Micro>
          ))}
        </GridItemAreas>
        <GridItemHeader>{parse(projectName, options)}</GridItemHeader>
      </StyledGridItem>
    </Animation>
  );
};

export default GridItem;
