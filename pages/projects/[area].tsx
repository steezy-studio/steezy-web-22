import { useLazyQuery } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import client, { withApolloClient } from "../../apollo/client";
import GridItem from "../../components/GridItem/GridItem";
import Head from "../../components/Head/Head";
import { HeroSocials } from "../../components/Hero/Styles/StyledHero";
import Instagram from "../../components/Icons/Instagram";
import Vimeo from "../../components/Icons/Vimeo";
import Link from "../../components/Link/Link";
import { StyledLink } from "../../components/Link/Styles/StyledLink";
import Navbar from "../../components/Navbar/Navbar";
import { Large } from "../../components/Typo/Large";
import { Medium } from "../../components/Typo/Medium";
import strings from "../../data/strings";
import { Areas, Projects as ProjectsType, Query } from "../../generated/types";
import { GET_ALL_AREAS } from "../../graphql/GetAllAreas";
import { GET_ALL_PROJECTS } from "../../graphql/GetAllProjects";
import { GET_PROJECTS } from "../../graphql/GetProjects";
import { allProjects, device, projectsPerPage } from "../../helpers/consts";
import { useWindowSize } from "../../hooks/useWindowSize";
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
  const initialState = {
    data: projects.items,
    skip: 0,
    hasMore: projectsCount > projectsPerPage,
  };
  const router = useRouter();
  const [projectsData, setProjectsData] = useState(initialState);
  const { w } = useWindowSize();

  const [getProjects, { loading, error, data: newData }] = useLazyQuery(
    GET_PROJECTS,
    {
      variables: {
        skip: projectsData.skip,
        where: {
          project_tags: {
            _slug_any:
              allProjects._slug === router.query.area
                ? null
                : router.query.area,
          },
        },
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

  // next preserves state when query changes
  // otherwise it doesn't render correct data
  React.useEffect(() => {
    setProjectsData(initialState);
  }, [router.query.area]);

  React.useEffect(() => {
    if (projectsData.skip !== 0) {
      getProjects({
        variables: {
          skip: projectsData.skip,
          where: {
            project_tags: {
              _slug_any:
                allProjects._slug === router.query.area
                  ? null
                  : router.query.area,
            },
          },
          limit: projectsPerPage,
        },
      });
    }
  }, [projectsData.skip]);
  const activeArea = areas.items.find(
    (area) => area._slug === router.query.area
  );

  return (
    <>
      {/* TODO add og image */}
      <Head
        pageName={[
          strings.projectsPage.head.pageName,
          activeArea?.area_name || allProjects.area_name,
        ]}
        ogDescription={
          activeArea?.area_description || allProjects.area_description
        }
        ogTitle={activeArea?.area_name || allProjects.area_name}
        ogImageSrc={""}
      />
      <Navbar
        areas={areas.items.map(({ area_name, _slug }) => ({
          highlighted: false,
          link: `/projects/${_slug}`,
          name: area_name,
        }))}
      />

      <StyledProjects>
        <ProjectsHero>
          <ProjectsHeroContent>
            <ProjectsHeroFilters>
              {[allProjects, ...areas.items].map(({ area_name, _slug }) => {
                const isActive = router.query.area === _slug;
                return (
                  <Large key={_slug}>
                    <Link
                      shallow
                      href={`/projects/${_slug}`}
                      className={`${isActive ? "active" : ""}`}>
                      {area_name}
                    </Link>
                  </Large>
                );
              })}
            </ProjectsHeroFilters>
            <Medium>
              {activeArea?.area_description || allProjects.area_description}
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
                if (i % 2 !== 0 || w <= device.phone) {
                  return (
                    <ProjectsGridItem key={_id}>
                      <GridItem
                        type={grid_image[0]._type}
                        areas={project_tags}
                        height={grid_image?.[0].height}
                        projectName={project_grid_name}
                        slug={_slug}
                        src={
                          grid_image[0]._type === "Video"
                            ? grid_image[0].cdn_files[0].url
                            : grid_image[0].url
                        }
                        width={grid_image?.[0].width}
                      />
                    </ProjectsGridItem>
                  );
                }
              }
            )}
          </ProjectsGridColumn>
          {w > device.phone && (
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
                          type={grid_image[0]._type}
                          areas={project_tags}
                          height={grid_image?.[0].height}
                          projectName={project_grid_name}
                          slug={_slug}
                          src={
                            grid_image[0]._type === "Video"
                              ? grid_image[0].cdn_files[0].url
                              : grid_image[0].url
                          }
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
          )}
        </ProjectsGrid>
      </StyledProjects>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
