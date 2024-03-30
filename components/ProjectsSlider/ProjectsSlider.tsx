import { EnhancedProject } from "../../helpers/enhanceProjects";
import GridItem from "../GridItem/GridItem";
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
    <StyledProjectsSlider>
      <SectionHeader {...rest} />
      <SliderW>
        <Slider slidesPerView={4.2} offsetNav={0.2} step={2}>
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
  );
};

export default ProjectsSlider;
