import { Areas } from "../../generated/types";
import { HeaderWithDashOffset } from "../../pagestyles/StyledStudio";
import Animation from "../Animation/Animation";
import { Micro } from "../Typo/Micro";
import ServiceItem from "./ServiceItem";
import { ServicesList, StyledServicesSection } from "./StyledServicesSection";

interface ServicesSectionProps {
  areas: Areas;
}

const ServicesSection = ({ areas }: ServicesSectionProps) => {
  return (
    <StyledServicesSection>
      <HeaderWithDashOffset>
        <Animation type='fadeFromBottom'>
          <Micro className='with-dash'>{"Services"}</Micro>
        </Animation>
      </HeaderWithDashOffset>
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
