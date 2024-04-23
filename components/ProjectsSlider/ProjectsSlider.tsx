import { device } from "../../helpers/consts";
import { EnhancedProject } from "../../helpers/enhanceProjects";
import GridItem from "../GridItem/GridItem";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
import SectionHeader, {
  SectionHeaderProps,
} from "../SectionHeader/SectionHeader";
import Slider from "../Slider/Slider";
import {
  ProjectSliderItem,
  SliderW,
  StyledProjectsSlider,
} from "./StyledProjectsSlider";

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
              [device.monitor]: { step: 2 },
              [device.tabletPortrait]: { step: 2 },
              [device.tabletLandscape]: { step: 2 },
              [device.phone]: { step: 1 },
              [device.largeNotebook]: { step: 2 },
            }}
            navigationWidth={0.2}
          >
            {projects.map(
              ({ project_grid_name, areas, _slug, grid_image }, i) => {
                return (
                  <ProjectSliderItem key={i}>
                    <GridItem
                      areas={areas}
                      wide={false}
                      projectName={project_grid_name}
                      slug={_slug}
                      cover={grid_image}
                    />
                  </ProjectSliderItem>
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
