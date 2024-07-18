import { Areas } from "../../generated/preprTypes";
import HeaderLine from "../HeaderLine/HeaderLine";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
import { Micro } from "../Typo/Micro";
import ServiceItem from "./ServiceItem";
import { ServicesList, StyledServicesSection } from "./StyledServicesSection";

interface ServicesSectionProps {
  areas: Areas;
}

const ServicesSection = ({ areas }: ServicesSectionProps) => {
  return (
    <StyledServicesSection>
      <RevealAnimation>
        <HeaderLine>
          <Micro className='uppercase' as={"h2"}>
            {"Services"}
          </Micro>
        </HeaderLine>
      </RevealAnimation>
      <ServicesList>
        {areas.items.map((area, i) => {
          if (area.is_default) return null;
          return <ServiceItem key={i} area={area} i={i} />;
        })}
      </ServicesList>
    </StyledServicesSection>
  );
};

export default ServicesSection;
