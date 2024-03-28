import { motion } from "framer-motion";
import Link from "next/link";
import { Area } from "../../generated/preprTypes";
import Animation from "../Animation/Animation";
import { Medium } from "../Typo/Medium";
import Video from "../Video/Video";
import {
  ServiceItemProject,
  ServiceItemProjectImg,
  ServiceItemProjectInner,
  StyledServiceItem,
} from "./StyledServiceItem";
import { SubServicesList } from "./StyledServicesSection";
import { useContext, useEffect, useRef, useState } from "react";
import { Small } from "../Typo/Small";
import { HoverProvider } from "../../pages/_app";

interface ServiceItemProps {
  area: Area;
  i: number;
}

const ServiceItem = ({ area, i }: ServiceItemProps) => {
  const img = area.projects[0].grid_image[0];
  const ref = useRef<HTMLDivElement>(null);
  const previewProjectRef = useRef<HTMLDivElement>(null);
  const [hover, sethover] = useState<boolean>(false);
  const isEven = i % 2 === 0;
  const { setCursorType } = useContext(HoverProvider);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const elHeight = previewProjectRef.current.clientHeight;

      previewProjectRef.current.style.left = `${e.clientX - elHeight / 2}px`;
      previewProjectRef.current.style.top = `${
        e.clientY + window.scrollY - elHeight / 2
      }px`;
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
        sethover(true);
        setCursorType("hover");
      }}
      onMouseLeave={() => {
        sethover(false);
        setCursorType("normal");
      }}
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
          {img.url ? (
            <ServiceItemProjectImg
              src={img.url}
              alt={area.projects[0].project_grid_name}
              height={img.height}
              width={img.width}
            />
          ) : (
            <Video src={img.cdn_files[0].url} className='cover' />
          )}
        </ServiceItemProjectInner>
      </ServiceItemProject>
      <Animation type='fadeFromBottom' key={area._slug} delay={0.2 * i}>
        <motion.div>
          <Medium className='medium'>
            <Link href={`/projects/${area._slug}`}>{area.area_name}</Link>
          </Medium>
          <SubServicesList>
            <Small className='big-lh break-lines'>{area.sub_areas}</Small>
          </SubServicesList>
        </motion.div>
      </Animation>
    </StyledServiceItem>
  );
};

export default ServiceItem;
