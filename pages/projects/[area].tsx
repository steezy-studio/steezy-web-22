import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
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
import { Areas, Project, Query } from "../../generated/types";
import { GET_ALL_AREAS } from "../../graphql/GetAllAreas";
import { GET_AREA } from "../../graphql/GetArea";
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
  projects: Project[];
  projectsCount: number;
}

const Projects = ({ areas, projects, projectsCount }: ProjectsProps) => {
  const router = useRouter();
  const [projectsToDisplay, setProjectsToDisplay] = useState(projectsPerPage);
  const { w } = useWindowSize();

  // we dont use fetch pagination, because prepr.io doesnt support it for content references
  // it is a drawback for controlling order of projects, which is more important than load time
  const handleIndexInc = () => {
    setProjectsToDisplay((prev) => prev + projectsPerPage);
  };

  const activeArea = areas.items.find(
    (area) => area._slug === router.query.area
  );

  const paginatedProjects = projects.slice(0, projectsToDisplay);

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
      <Navbar areas={areas.items} />

      <StyledProjects>
        <ProjectsHero>
          <ProjectsHeroContent>
            <ProjectsHeroFilters>
              {areas.items.map(({ area_name, _slug }) => {
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
            {paginatedProjects.map(
              (
                { project_tags, project_grid_name, _slug, grid_image, _id },
                i
              ) => {
                if (i % 2 !== 0 || w <= device.phone) {
                  return (
                    <ProjectsGridItem key={_id + router.query.area}>
                      <GridItem
                        type={grid_image[0]._type}
                        areas={project_tags}
                        height={grid_image?.[0].height}
                        projectName={project_grid_name}
                        slug={_slug}
                        src={
                          grid_image[0]._type === "Video"
                            ? grid_image[0].cdn_files?.[0].url
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
              {paginatedProjects.map(
                (
                  { project_tags, project_grid_name, _slug, grid_image, _id },
                  i
                ) => {
                  if (i % 2 === 0) {
                    return (
                      <ProjectsGridItem key={_id + router.query.area}>
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
              {!(projectsToDisplay >= projectsCount) && (
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
  const areaReq = client.query<Query>({
    query: GET_AREA,
    variables: {
      slug: params.area,
    },
  });
  const areasReq = client.query<Query>({ query: GET_ALL_AREAS });

  const [areaData, areasData] = await Promise.all([areaReq, areasReq]);

  return {
    props: {
      areas: areasData.data.Areas,
      projects: areaData.data.Area.projects,
      projectsCount: areaData.data.Area.projects.length,
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
    paths: paths,
    fallback: false,
  };
};

export default withApolloClient(Projects);
