import RevealAnimation from "../RevealAnimation/RevealAnimation";
import { Large } from "../Typo/Large";
import { Micro } from "../Typo/Micro";
import {
  HumanCover,
  HumanCoverW,
  HumanGradient,
  HumanInfo,
  HumanInfoCol,
  HumanInfoGrid,
  StyledHuman,
} from "./StyledHuman";

interface HumanProps {
  name: string;
  position: string;
  roles: string;
  email: string;
  phone: string;
  cover: {
    url: string;
    alt: string;
    width: number;
    heihgt: number;
  };
  index?: number;
}

const Human = ({
  name,
  position,
  roles,
  email,
  phone,
  cover,
  index = 0,
}: HumanProps) => {
  return (
    <RevealAnimation delay={index * 0.2} duration={1.5}>
      <StyledHuman>
        <HumanCoverW>
          <HumanCover
            src={cover.url}
            alt={cover.alt}
            width={cover.width}
            height={cover.heihgt}
          />
          <HumanGradient />
        </HumanCoverW>
        <HumanInfo>
          <Large className='white' as={"header"}>
            {name}
          </Large>
          <HumanInfoGrid>
            <HumanInfoCol>
              <Micro className='white'>{position}</Micro>
              <Micro className='white'>{roles}</Micro>
            </HumanInfoCol>
            <HumanInfoCol>
              <Micro className='white'>{email}</Micro>
              <Micro className='white'>{phone}</Micro>
            </HumanInfoCol>
          </HumanInfoGrid>
        </HumanInfo>
      </StyledHuman>
    </RevealAnimation>
  );
};

export default Human;
