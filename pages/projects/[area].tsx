import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import client from "../../apollo/client";
import GridItem from "../../components/GridItem/GridItem";
import { HeroSocials } from "../../components/Hero/Styles/StyledHero";
import Instagram from "../../components/Icons/Instagram";
import Vimeo from "../../components/Icons/Vimeo";
import Layout from "../../components/Layout/Layout";
import Link from "../../components/Link/Link";
import Navbar from "../../components/Navbar/Navbar";
import { MainHeader } from "../../components/Typo/MainHeader";
import { Perex } from "../../components/Typo/Perex";
import { allProjects } from "../../consts";
import {
  Area,
  Areas,
  Projects as ProjectsType,
  Query,
} from "../../generated/types";
import { GET_ALL_AREAS } from "../../graphql/GetAllAreas";
import { GET_ALL_PROJECTS } from "../../graphql/GetAllProjects";
import {
  ProjectsGrid,
  ProjectsGridColumn,
  ProjectsGridItem,
  ProjectsHero,
  ProjectsHeroFilters,
  ProjectsHeroContent,
  StyledProjects,
} from "../../pagestyles/StyledProjects";

interface ProjectsProps {
  areas: Areas;
  projects: ProjectsType;
}

const Projects = ({ areas, projects }: ProjectsProps) => {
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
                    <MainHeader key={_slug}>
                      <Link
                        href={`/projects/${_slug}`}
                        className={`${isActive ? "active" : ""}`}>
                        {area_name}
                      </Link>
                    </MainHeader>
                  );
                })}
              </ProjectsHeroFilters>
              <Perex>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget arcu mollis, faucibus erat eget, sollicitudin leo.
              </Perex>
            </ProjectsHeroContent>
            <HeroSocials>
              <Instagram />
              <Vimeo />
            </HeroSocials>
          </ProjectsHero>
          <ProjectsGrid>
            <ProjectsGridColumn className='even'>
              {projects.items.map(
                (
                  { project_tags, project_grid_name, _slug, grid_image, _id },
                  i
                ) => {
                  if (i % 2 !== 0) {
                    return (
                      <ProjectsGridItem>
                        <GridItem
                          type={"Photo"}
                          areas={project_tags}
                          height={grid_image?.[0].height}
                          projectName={project_grid_name}
                          slug={_slug}
                          src={grid_image?.[0].url}
                          width={grid_image?.[0].width}
                          key={_id}
                        />
                      </ProjectsGridItem>
                    );
                  }
                }
              )}
            </ProjectsGridColumn>
            <ProjectsGridColumn className='odd'>
              {projects.items.map(
                (
                  { project_tags, project_grid_name, _slug, grid_image, _id },
                  i
                ) => {
                  if (i % 2 === 0) {
                    return (
                      <ProjectsGridItem>
                        <GridItem
                          type={"Photo"}
                          areas={project_tags}
                          height={grid_image?.[0].height}
                          projectName={project_grid_name}
                          slug={_slug}
                          src={grid_image?.[0].url}
                          width={grid_image?.[0].width}
                          key={_id}
                        />
                      </ProjectsGridItem>
                    );
                  }
                }
              )}
              <MainHeader>
                <Link href={`/projects/all-projects`}>more projects</Link>
              </MainHeader>
            </ProjectsGridColumn>

            {/* <div></div>

           */}
          </ProjectsGrid>
          {/* <pre>{JSON.stringify({ areas, projects }, null, 2)}</pre> */}
        </StyledProjects>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await client.query<Query>({
    query: GET_ALL_PROJECTS,
    variables: {
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

export default Projects;
