import { useContext, useEffect, useState } from "react";
import { CursorContext } from "../Cursor/CursorProvider";
import Instagram from "../Icons/Instagram";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
import SectionHeader from "../SectionHeader/SectionHeader";
import { IgPlaceholder } from "../SectionHeader/StyledSectionHeader";
import {
  IgFeed,
  IgFeedImage,
  IgPostLink,
  SInstagramFeed,
} from "./StyledInstagramFeed";

interface InstagramFeedProps {}

type ImageData = {
  src: string;
  alt: string;
  href: string;
};

const InstagramFeed = ({}: InstagramFeedProps) => {
  const [imagesData, setImagesData] = useState<ImageData[]>([]);
  const { setCursorType } = useContext(CursorContext);

  useEffect(() => {
    fetch("/api/get-instagram").then((res) => {
      res.json().then((data) => {
        setImagesData(data.images);
      });
    });
  }, []);

  return (
    <RevealAnimation>
      <SInstagramFeed>
        <SectionHeader
          header='More from Steezy Studio'
          target='_blank'
          linkText={
            <>
              <Instagram as='span' />
              <span>Check Our Profile</span>
            </>
          }
          url='https://www.instagram.com/steezystudio/'
        />
        <IgFeed>
          {imagesData.length === 0
            ? new Array(5).fill(0).map((_, i) => <IgPlaceholder key={i} />)
            : imagesData?.map((image, i) => (
                <IgPostLink href={image.href} target='_blank' key={i}>
                  <IgFeedImage
                    onMouseEnter={() => setCursorType("hover")}
                    onMouseLeave={() => setCursorType("normal")}
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={500}
                  />
                </IgPostLink>
              ))}
        </IgFeed>
      </SInstagramFeed>
    </RevealAnimation>
  );
};

export default InstagramFeed;
