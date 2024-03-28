import React, { Fragment } from "react";
import {
  IgFeed,
  IgLinkW,
  IgPost,
  IgPostW,
  StyledInstagramFeed,
} from "./StyledInstagramFeed";
import SectionHeader from "../SectionHeader/SectionHeader";
import Instagram from "../Icons/Instagram";

interface InstagramFeedProps {
  images: {
    url: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

const InstagramFeed = ({ images }: InstagramFeedProps) => {
  return (
    <StyledInstagramFeed>
      <SectionHeader
        header='More from Steezy Studio'
        linkText={
          <IgLinkW>
            <Instagram as={"span"} />
            Check our profile
          </IgLinkW>
        }
        url='https://www.instagram.com/steezystudio/'
        target='_blank'
      />
      <IgFeed>
        {images &&
          images.map(({ alt, height, width, src, url }, i) => {
            return (
              <IgPostW key={i} href={url} target='_blank'>
                <IgPost src={src} alt={alt} width={width} height={height} />
              </IgPostW>
            );
          })}
      </IgFeed>
    </StyledInstagramFeed>
  );
};

export default InstagramFeed;
