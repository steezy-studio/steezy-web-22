"use client";

import { useAnimationControls } from "framer-motion";
import {
  DOMNode,
  Element,
  HTMLReactParserOptions,
  domToReact,
} from "html-react-parser";
import { useEffect, useRef } from "react";
import { Area, Asset } from "../../generated/preprTypes";
import { easing } from "../../helpers/animationConfig";
import isTouchDevice from "../../helpers/isTouchDevice";
import { isVideoAsset } from "../../helpers/isVideoAsset";
import stripHtmlTags from "../../helpers/stripHtmlTags";
import AreaTag from "../AreaTag/AreaTag";
import {
  GridItemAreas,
  GridItemCover,
  GridItemCoverWrapper,
  GridItemHeader,
  GridItemHeaderInner,
  GridItemHoverOverlay,
  GridItemPhoneOverlay,
  GridItemVideo,
} from "../GridItem/Styles/StyledGridItem";
import { Small } from "../Typo/Small";
import { StyledProjectCard } from "./StyledProjectCard";

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
  const overlayAnimationControls = useAnimationControls();
  const headerAnimationControls = useAnimationControls();

  useEffect(() => {
    if (_static || isTouchDevice()) {
      overlayAnimationControls.set({ opacity: 0 });
      headerAnimationControls.set({ y: `0%`, skewY: 0, opacity: 1 });
      return;
    }
    if (hover) {
      overlayAnimationControls.start({
        opacity: 1,
        transition: { duration: 0.4, ease: easing },
      });
      headerAnimationControls.start({
        y: `0%`,
        skewY: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: easing },
      });
      return;
    } else {
      overlayAnimationControls.start({
        opacity: 0,
        transition: { duration: 3, ease: easing },
      });
      headerAnimationControls.start({
        y: `120%`,
        skewY: 1,
        opacity: 0,
        transition: { duration: 0.4, ease: easing },
      });
    }
  }, [_static, hover]);

  // useIntersectionObserver(videoRef, (entries) =>
  //   videoCallback(entries, videoRef)
  // );

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
        <GridItemPhoneOverlay />
        <GridItemHoverOverlay animate={overlayAnimationControls} />
        {!isVideoAsset(cover[0].url) ? (
          <GridItemCover
            src={cover[0].url}
            width={cover[0].width}
            placeholder={`blur`}
            blurDataURL={cover[0].url}
            height={cover[0].height}
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
          />
        )}
      </GridItemCoverWrapper>
      <GridItemAreas>
        {areas &&
          areas.map(({ area_name, _slug }) => (
            <AreaTag key={area_name} areaName={area_name} />
          ))}
      </GridItemAreas>
      <GridItemHeader className={_static ? "tal" : "tac"}>
        <GridItemHeaderInner animate={headerAnimationControls}>
          <Small className='white bold'>{stripHtmlTags(projectName)}</Small>
        </GridItemHeaderInner>
      </GridItemHeader>
    </StyledProjectCard>
  );
};

export default ProjectCard;
