"use client";

import { useEffect, useState } from "react";
import { EnhancedProject } from "../../helpers/enhanceProjects";
import GridItem from "../GridItem/GridItem";
import Link from "../Link/Link";
import RevealAnimation from "../RevealAnimation/RevealAnimation";
import { Large } from "../Typo/Large";
import {
  GridRow,
  LoadMoreProjects,
  ProjectsGridRows,
  StyledProjectsGrid,
} from "./StyledProjectsGrid";

interface ProjectsGridProps {
  projects: EnhancedProject[];
  projectsPerPage?: number;
}

const ProjectsGrid = ({
  projects,
  projectsPerPage = 14,
}: ProjectsGridProps) => {
  const [visibleProjectsCount, setvisibleProjectsCount] =
    useState<number>(projectsPerPage);

  useEffect(() => {
    setvisibleProjectsCount(projectsPerPage);
  }, [projectsPerPage]);

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
                    <RevealAnimation key={project._slug} delay={i * 0.3}>
                      <GridItem
                        slug={project._slug}
                        wide={(i + j) % 2 === 0}
                        projectName={project.project_grid_name}
                        cover={project.grid_image}
                        areas={project.areas}
                      />
                    </RevealAnimation>
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
              Explore More
            </Link>
          </Large>
        </LoadMoreProjects>
      )}
    </StyledProjectsGrid>
  );
};

export default ProjectsGrid;
