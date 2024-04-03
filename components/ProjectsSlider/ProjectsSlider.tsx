import { device } from "../../helpers/consts";
import { EnhancedProject } from "../../helpers/enhanceProjects";
import GridItem from "../GridItem/GridItem";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
import SectionHeader, {
  SectionHeaderProps,
} from "../SectionHeader/SectionHeader";
import Slider from "../Slider/Slider";
import { SliderW, StyledProjectsSlider } from "./StyledProjectsSlider";

interface ProjectsSliderProps extends SectionHeaderProps {
  projects: EnhancedProject[];
}

const ProjectsSlider = ({ projects, ...rest }: ProjectsSliderProps) => {
  return (
    <RevealAnimation>
      <StyledProjectsSlider>
        <SectionHeader {...rest} />
        <SliderW>
          <Slider
            config={{
              [device.monitor]: { slidesCount: 5.2, step: 2 },
              [device.tabletPortrait]: { slidesCount: 1.2, step: 2 },
              [device.tabletLandscape]: { slidesCount: 3.2, step: 2 },
              [device.phone]: { slidesCount: 1.2, step: 1 },
              [device.largeNotebook]: { slidesCount: 4.2, step: 2 },
            }}
            offsetNav={0.2}
          >
            {projects.map(
              ({ project_grid_name, areas, _slug, grid_image }, i) => {
                return (
                  <GridItem
                    key={i}
                    areas={areas}
                    wide={false}
                    projectName={project_grid_name}
                    slug={_slug}
                    cover={grid_image}
                  />
                );
              }
            )}
          </Slider>
        </SliderW>
      </StyledProjectsSlider>
    </RevealAnimation>
  );
};

export default ProjectsSlider;
