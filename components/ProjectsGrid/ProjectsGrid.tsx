import { useContext, useState } from "react";
import { EnhancedProject } from "../../helpers/enhanceProjects";
import { HoverProvider } from "../../pages/_app";
import GridItem from "../GridItem/GridItem";
import { StyledLink } from "../Link/Styles/StyledLink";
import { Large } from "../Typo/Large";
import {
  GridRow,
  LoadMoreProjects,
  ProjectsGridRows,
  StyledProjectsGrid,
} from "./StyledProjectsGrid";
import Link from "../Link/Link";

interface ProjectsGridProps {
  projects: EnhancedProject[];
  projectsPerPage?: number;
}

const ProjectsGrid = ({
  projects,
  projectsPerPage = 10,
}: ProjectsGridProps) => {
  const { setCursorType } = useContext(HoverProvider);
  const [visibleProjectsCount, setvisibleProjectsCount] =
    useState<number>(projectsPerPage);

  return (
    <StyledProjectsGrid>
      <ProjectsGridRows>
        {projects
          .slice(0, visibleProjectsCount)
          .reduce((acc: EnhancedProject[][], curr: EnhancedProject) => {
            const lastItem = acc[acc.length - 1];
            if (!lastItem) return [[curr]];
            if (lastItem?.length === 2) return [...acc, [curr]];
            return [...acc.slice(0, -1), [...lastItem, curr]];
          }, [])
          .map((row, j) => {
            return (
              <GridRow key={j}>
                {row.map((project, i) => {
                  return (
                    <GridItem
                      key={i}
                      slug={project._slug}
                      wide={(i + j) % 2 === 0}
                      projectName={project.project_grid_name}
                      cover={project.grid_image}
                      areas={project.areas}
                    />
                  );
                })}
              </GridRow>
            );
          })}
      </ProjectsGridRows>
      {projects.length > visibleProjectsCount && (
        <LoadMoreProjects>
          <Large>
            <Link
              href={"#"}
              onClick={() => {
                setvisibleProjectsCount((prev) => prev + projectsPerPage);
              }}
            >
              Show more
            </Link>
          </Large>
        </LoadMoreProjects>
      )}
    </StyledProjectsGrid>
  );
};

export default ProjectsGrid;
