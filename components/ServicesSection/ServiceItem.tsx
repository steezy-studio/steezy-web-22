import { useContext, useEffect, useRef, useState } from "react";
import { Area } from "../../generated/preprTypes";
import isTouchDevice from "../../helpers/isTouchDevice";
import { isVideoAsset } from "../../helpers/isVideoAsset";
import { CursorContext } from "../Cursor/CursorProvider";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
import { Medium } from "../Typo/Medium";
import { Small } from "../Typo/Small";
import Video from "../Video/Video";
import {
  ServiceItemContent,
  ServiceItemProject,
  ServiceItemProjectImg,
  ServiceItemProjectInner,
  StyledServiceItem,
} from "./StyledServiceItem";
import { SubServicesList } from "./StyledServicesSection";

interface ServiceItemProps {
  area: Area;
  i: number;
}

const ServiceItem = ({ area, i }: ServiceItemProps) => {
  const img = area.projects[0].grid_image[0];
  const ref = useRef<HTMLAnchorElement>(null);
  const previewProjectRef = useRef<HTMLDivElement>(null);
  const [hover, sethover] = useState<boolean>(false);
  const isEven = i % 2 === 0;
  const { setCursorType } = useContext(CursorContext);

  useEffect(() => {
    if (!ref.current) return;
    const handleMouseMove = (e: MouseEvent) => {
      const elHeight = previewProjectRef.current.clientHeight;

      previewProjectRef.current.style.left = `${e.clientX - elHeight / 2}px`;
      previewProjectRef.current.style.top = `${e.clientY - elHeight / 2}px`;
    };
    ref.current.addEventListener("mousemove", handleMouseMove);
    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <StyledServiceItem
      ref={ref}
      onMouseEnter={() => {
        if (isTouchDevice()) return;
        sethover(true);
        setCursorType("hover");
      }}
      onMouseLeave={() => {
        if (isTouchDevice()) return;
        sethover(false);
        setCursorType("normal");
      }}
      href={`/projects/${area._slug}`}
    >
      <ServiceItemProject
        ref={previewProjectRef}
        animate={{
          opacity: hover ? 1 : 0,
          scale: hover ? 1 : 0,
          rotate: hover ? `${isEven ? -30 : 30}deg` : "0deg",
        }}
        transition={{ duration: 0.3 }}
      >
        <ServiceItemProjectInner>
          {!isVideoAsset(img.url) ? (
            <ServiceItemProjectImg
              src={img.url}
              alt={area.area_name}
              height={img.height}
              width={img.width}
            />
          ) : (
            <Video src={img.cdn_files[0].url} className='cover' />
          )}
        </ServiceItemProjectInner>
      </ServiceItemProject>

      <ServiceItemContent>
        <RevealAnimation delay={0.2 * i}>
          <Medium className='bold'>{area.area_name}</Medium>
          <SubServicesList>
            <Small className='big-lh break-lines'>{area.sub_areas}</Small>
          </SubServicesList>
        </RevealAnimation>
      </ServiceItemContent>
    </StyledServiceItem>
  );
};

export default ServiceItem;
