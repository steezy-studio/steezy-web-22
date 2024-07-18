import Vimeo from "@u-wave/react-vimeo";
import { useContext } from "react";
import { CursorContext } from "../Cursor/CursorProvider";
import Dialog from "../Dialog/Dialog";
import { Big } from "../Typo/Big";
import { PlayButton } from "./Styles/StyledShowreel";
import {
  Loop,
  Showreel,
  StyledShowreelVideo,
} from "./Styles/StyledShowreelVideo";

interface ShowreelProps {
  src: string;
  open?: boolean;
  onOpenChange?: () => void;
}

const ShowreelVideo = ({ src, open, onOpenChange }: ShowreelProps) => {
  const { setCursorType } = useContext(CursorContext);

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
          <StyledShowreelVideo
            onMouseEnter={() => setCursorType("hover")}
            onMouseLeave={() => setCursorType("normal")}
          >
            <PlayButton>
              <Big className='white underline' as={"span"}>
                Play Video
              </Big>
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
          </StyledShowreelVideo>
        }
      />
    </>
  );
};

export default ShowreelVideo;
