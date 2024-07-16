import { useContext, useEffect, useRef, useState } from "react";
import { ElfsightWidget } from "react-elfsight-widget";
import { CursorContext } from "../Cursor/CursorProvider";
import Instagram from "../Icons/Instagram";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
import SectionHeader from "../SectionHeader/SectionHeader";
import {
  ElfsightWrapper,
  IgFeed,
  IgFeedImage,
  IgPlaceholder,
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
  const ref = useRef<HTMLIFrameElement>(null);

  // we are scraping images data from the elfsight widget
  // in order to render them in our own custom way
  // #sorryNotSorry

  useEffect(() => {
    if (ref.current === null) return;
    const mutationObserver = new MutationObserver((mutations) => {
      const posts = ref.current.querySelectorAll(
        ".eapps-instagram-feed-posts-item-link"
      );
      let imageData: ImageData[] = [];

      posts.forEach((post) => {
        const img = post.querySelector("img");
        // wait for images to load before getting the data
        if (!img.src.includes("phosphor.utils.elfsightcdn.com")) return;
        imageData.push({
          href: post.getAttribute("href"),
          src: img.getAttribute("src"),
          alt: img.getAttribute("alt"),
        });
      });
      setImagesData(imageData);
    });
    mutationObserver.observe(ref.current, {
      childList: true,
      subtree: true,
    });
    return () => {
      mutationObserver.disconnect();
    };
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
        <ElfsightWrapper ref={ref} tabIndex={-1}>
          <ElfsightWidget widgetId={"c9d65060-5ea8-42e4-b4bb-de098da0b587"} />
        </ElfsightWrapper>
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
