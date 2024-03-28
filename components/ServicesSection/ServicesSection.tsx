import { Areas } from "../../generated/preprTypes";
import Animation from "../Animation/Animation";
import HeaderLine from "../HeaderLine/HeaderLine";
import { Micro } from "../Typo/Micro";
import ServiceItem from "./ServiceItem";
import { ServicesList, StyledServicesSection } from "./StyledServicesSection";

interface ServicesSectionProps {
  areas: Areas;
}

const ServicesSection = ({ areas }: ServicesSectionProps) => {
  return (
    <StyledServicesSection>
      <Animation type='fadeFromBottom'>
        <HeaderLine>
          <Micro>{"Services"}</Micro>
        </HeaderLine>
      </Animation>
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
