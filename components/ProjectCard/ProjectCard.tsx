import React, { useRef } from "react";
import { StyledProjectCard } from "./StyledProjectCard";
import { Area, Asset } from "../../generated/types";
import AreaTag from "../AreaTag/AreaTag";
import {
  GridItemCoverWrapper,
  GridItemGrad,
  GridItemCover,
  GridItemVideo,
  GridItemAreas,
  GridItemHeader,
} from "../GridItem/Styles/StyledGridItem";
import {
  useIntersectionObserver,
  videoCallback,
} from "../../hooks/useIntersectionObserver";
import { Small } from "../Typo/Small";
import parse, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import stripHtmlTags from "../../helpers/stripHtmlTags";

interface ProjectCardProps {
  areas: Area[];
  projectName: string;
  videoThumb?: string;
  wide?: boolean;
  cover: Asset[];
  hover?: boolean;
  _static?: boolean;
}

const ProjectCard = ({
  areas,
  projectName,
  videoThumb,
  cover,
  wide,
  hover,
  _static,
}: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useIntersectionObserver(videoRef, (entries) =>
    videoCallback(entries, videoRef)
  );

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
    <StyledProjectCard className={wide ? "wide" : ""}>
      <GridItemCoverWrapper>
        <GridItemGrad
          animate={{ opacity: _static ? 1 : hover ? 1 : 0 }}
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
        {areas &&
          areas.map(({ area_name, _slug }) => (
            <AreaTag key={area_name} areaName={area_name} />
          ))}
      </GridItemAreas>
      <GridItemHeader animate={{ y: _static ? "0%" : hover ? "0%" : "-200%" }}>
        <Small className='white medium'>{stripHtmlTags(projectName)}</Small>
      </GridItemHeader>
    </StyledProjectCard>
  );
};

export default ProjectCard;
