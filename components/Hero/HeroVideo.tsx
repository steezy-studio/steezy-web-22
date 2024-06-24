import Vimeo from "@u-wave/react-vimeo";
import { useContext } from "react";
import { HoverProvider } from "../../pages/_app";
import Dialog from "../Dialog/Dialog";
import { PlayButton } from "./Styles/StyledHero";
import { Loop, Showreel, StyledHeroVideo } from "./Styles/StyledHeroVideo";

interface VideoProps {
  src: string;
  open?: boolean;
  onOpenChange?: () => void;
}

const HeroVideo = ({ src, open, onOpenChange }: VideoProps) => {
  const { setCursorType } = useContext(HoverProvider);

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={onOpenChange}
        content={
          <Showreel
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <Vimeo autoplay video={"927412733"} responsive />
          </Showreel>
        }
        trigger={
          <StyledHeroVideo
            onMouseEnter={() => setCursorType("hover")}
            onMouseLeave={() => setCursorType("normal")}
          >
            <PlayButton>
              <span className='underline big white tac wide'>play video</span>
            </PlayButton>
            <Loop
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.3 }}
              src={src}
              autoPlay={true}
              playsInline={true}
              muted={true}
              loop={true}
            />
          </StyledHeroVideo>
        }
      />
    </>
  );
};

export default HeroVideo;
