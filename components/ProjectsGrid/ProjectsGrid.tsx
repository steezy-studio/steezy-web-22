import { DocumentNode, useLazyQuery } from "@apollo/client";
import { useContext, useState } from "react";
import getClient from "../../apollo/client";
import { Areas, Query, QueryProjectsArgs } from "../../generated/types";
import { GET_PROJECTS } from "../../graphql/GetProjects";
import {
  EnhancedProject,
  enhanceProjects,
} from "../../helpers/enhanceProjects";
import { HoverProvider } from "../../pages/_app";
import GridItem from "../GridItem/GridItem";
import { StyledLink } from "../Link/Styles/StyledLink";
import { Large } from "../Typo/Large";
import {
  GridRow,
  ProjectsGridRows,
  StyledProjectsGrid,
} from "./StyledProjectsGrid";

interface ProjectsGridProps {
  initialProjects: EnhancedProject[];
  areas: Areas;
  totalProjects?: number;
  query: DocumentNode;
}

const ProjectsGrid = ({
  initialProjects,
  areas,
  totalProjects,
  query,
}: ProjectsGridProps) => {
  const client = getClient();
  const projectsPerPage = initialProjects.length;
  const { setCursorType } = useContext(HoverProvider);
  const [projects, setProjects] = useState<EnhancedProject[]>(initialProjects);
  const [hasMore, setHasMore] = useState(totalProjects > projectsPerPage);
  const [getProjects, { loading }] = useLazyQuery<Query>(query, {
    client,
  });
  return (
    <StyledProjectsGrid>
      <ProjectsGridRows>
        {projects
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
      {hasMore && (
        <Large>
          <StyledLink
            onClick={() => {
              getProjects({
                variables: {
                  limit: projectsPerPage,
                  skip: projects.length,
                } as QueryProjectsArgs,
                onCompleted(data) {
                  setProjects([
                    ...projects,
                    ...enhanceProjects(data.Projects.items, areas),
                  ]);
                },
              });
            }}
            onMouseEnter={() => setCursorType("hover")}
            onMouseLeave={() => setCursorType("normal")}
          >
            Show more
          </StyledLink>
        </Large>
      )}
    </StyledProjectsGrid>
  );
};

export default ProjectsGrid;
