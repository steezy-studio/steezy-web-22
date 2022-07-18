import { useLazyQuery } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import client, { withApolloClient } from "../../apollo/client";
import GridItem from "../../components/GridItem/GridItem";
import { HeroSocials } from "../../components/Hero/Styles/StyledHero";
import Instagram from "../../components/Icons/Instagram";
import Vimeo from "../../components/Icons/Vimeo";
import Layout from "../../components/Layout/Layout";
import Link from "../../components/Link/Link";
import { StyledLink } from "../../components/Link/Styles/StyledLink";
import Navbar from "../../components/Navbar/Navbar";
import { Large } from "../../components/Typo/Large";
import { Medium } from "../../components/Typo/Medium";
import { allProjects, projectsPerPage } from "../../consts";
import { Areas, Projects as ProjectsType, Query } from "../../generated/types";
import { GET_ALL_AREAS } from "../../graphql/GetAllAreas";
import { GET_ALL_PROJECTS } from "../../graphql/GetAllProjects";
import { GET_PROJECTS } from "../../graphql/GetProjects";
import {
  ProjectsGrid,
  ProjectsGridColumn,
  ProjectsGridItem,
  ProjectsHero,
  ProjectsHeroContent,
  ProjectsHeroFilters,
  StyledProjects,
} from "../../pagestyles/StyledProjects";

interface ProjectsProps {
  areas: Areas;
  projects: ProjectsType;
  projectsCount: number;
}

const Projects = ({ areas, projects, projectsCount }: ProjectsProps) => {
  const [projectsData, setProjectsData] = useState({
    data: projects.items,
    skip: 0,
    hasMore: projectsCount > projectsPerPage,
  });
  const [getProjects, { loading, error, data: newData }] = useLazyQuery(
    GET_PROJECTS,
    {
      variables: {
        skip: projectsData.skip,
        limit: projectsPerPage,
      },
      onCompleted: (newData) => {
        if (newData.Projects === null) return;

        setProjectsData((prev) => ({
          ...prev,
          data: [...prev.data, ...newData.Projects.items],
        }));
      },
    }
  );

  const handleIndexInc = () => {
    setProjectsData((prev) => ({
      ...prev,
      skip: prev.skip + projectsPerPage,
      hasMore: projectsCount - (prev.data.length + projectsPerPage) > 0,
    }));
  };

  React.useEffect(() => {
    if (projectsData.skip !== 0) {
      getProjects({
        variables: {
          skip: projectsData.skip,
          limit: projectsPerPage,
        },
      });
    }
  }, [projectsData.skip]);

  const router = useRouter();

  return (
    <>
      <Navbar
        areas={areas.items.map(({ area_name, _slug }) => ({
          highlighted: false,
          link: `/projects/${_slug}`,
          name: area_name,
        }))}
      />
      <Layout>
        <StyledProjects>
          <ProjectsHero>
            <ProjectsHeroContent>
              <ProjectsHeroFilters>
                {[allProjects, ...areas.items].map(({ area_name, _slug }) => {
                  const isActive = router.query.area === _slug;
                  return (
                    <Large key={_slug}>
                      <Link
                        href={`/projects/${_slug}`}
                        className={`${isActive ? "active" : ""}`}>
                        {area_name}
                      </Link>
                    </Large>
                  );
                })}
              </ProjectsHeroFilters>
              <Medium>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget arcu mollis, faucibus erat eget, sollicitudin leo.
              </Medium>
            </ProjectsHeroContent>
            <HeroSocials>
              <Instagram />
              <Vimeo />
            </HeroSocials>
          </ProjectsHero>
          <ProjectsGrid>
            <ProjectsGridColumn className='even'>
              {projectsData.data.map(
                (
                  { project_tags, project_grid_name, _slug, grid_image, _id },
                  i
                ) => {
                  if (i % 2 !== 0) {
                    return (
                      <ProjectsGridItem key={_id}>
                        <GridItem
                          type={"Photo"}
                          areas={project_tags}
                          height={grid_image?.[0].height}
                          projectName={project_grid_name}
                          slug={_slug}
                          src={grid_image?.[0].url}
                          width={grid_image?.[0].width}
                        />
                      </ProjectsGridItem>
                    );
                  }
                }
              )}
            </ProjectsGridColumn>
            <ProjectsGridColumn className='odd'>
              {projectsData.data.map(
                (
                  { project_tags, project_grid_name, _slug, grid_image, _id },
                  i
                ) => {
                  if (i % 2 === 0) {
                    return (
                      <ProjectsGridItem key={_id}>
                        <GridItem
                          type={"Photo"}
                          areas={project_tags}
                          height={grid_image?.[0].height}
                          projectName={project_grid_name}
                          slug={_slug}
                          src={grid_image?.[0].url}
                          width={grid_image?.[0].width}
                        />
                      </ProjectsGridItem>
                    );
                  }
                }
              )}
              {projectsData.hasMore && (
                <Large>
                  <StyledLink onClick={handleIndexInc}>
                    more projects
                  </StyledLink>
                </Large>
              )}
            </ProjectsGridColumn>
          </ProjectsGrid>
        </StyledProjects>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params.area);

  const data = await client.query<Query>({
    query: GET_ALL_PROJECTS,
    variables: {
      limit: projectsPerPage,
      where: {
        project_tags: {
          _slug_any: allProjects._slug === params.area ? null : params.area,
        },
      },
    },
  });

  return {
    props: {
      areas: data.data.Areas,
      projects: data.data.Projects,
      projectsCount: data.data.Projects.total,
    },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.query<Query>({ query: GET_ALL_AREAS });

  const paths = data.data.Areas.items.map(({ _slug }) => ({
    params: { area: _slug },
  }));

  return {
    paths: [...paths, { params: { area: `all-projects` } }],
    fallback: false,
  };
};

export default withApolloClient(Projects);
