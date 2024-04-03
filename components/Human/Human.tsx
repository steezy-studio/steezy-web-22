import React from "react";
import {
  HumanCover,
  HumanCoverW,
  HumanGradient,
  HumanInfo,
  HumanInfoCol,
  HumanInfoGrid,
  StyledHuman,
} from "./StyledHuman";
import { Large } from "../Typo/Large";
import { Nano } from "../Typo/Nano";
import RevealAnimation from "../RevealAnimation/RevealAnimation";

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
          <Large className='white'>{name}</Large>
          <HumanInfoGrid>
            <HumanInfoCol>
              <Nano className='white'>{position}</Nano>
              <Nano className='white'>{roles}</Nano>
            </HumanInfoCol>
            <HumanInfoCol>
              <Nano className='white'>{email}</Nano>
              <Nano className='white'>{phone}</Nano>
            </HumanInfoCol>
          </HumanInfoGrid>
        </HumanInfo>
      </StyledHuman>
    </RevealAnimation>
  );
};

export default Human;
