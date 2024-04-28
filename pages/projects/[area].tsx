import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import getClient from "../../apollo/client";
import Head from "../../components/Head/Head";
import Link from "../../components/Link/Link";
import Navbar from "../../components/Navbar/Navbar";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import { Nano } from "../../components/Typo/Nano";
import strings from "../../data/strings";
import { Areas, Query } from "../../generated/preprTypes";
import { GET_ALL_AREAS } from "../../graphql/GetAllAreas";
import { GET_AREA } from "../../graphql/GetArea";
import { allProjects } from "../../helpers/consts";
import {
  EnhancedProject,
  enhanceProjects,
} from "../../helpers/enhanceProjects";
import {
  Filter,
  FilterW,
  ProjectsGridW,
  ProjectsHero,
  ProjectsHeroFilters,
  StyledProjects,
} from "../../pagestyles/StyledProjects";

interface ProjectsProps {
  areas: Areas;
  projects: EnhancedProject[];
}

const Projects = ({ areas, projects }: ProjectsProps) => {
  const router = useRouter();

  const activeArea = areas.items.find(
    (area) => area._slug === router.query.area
  );

  return (
    <>
      <Head
        pageName={[
          strings.projectsPage.head.pageName,
          activeArea?.area_name || allProjects.area_name,
        ]}
        ogDescription={
          activeArea?.area_description || allProjects.area_description
        }
        ogTitle={activeArea?.area_name || allProjects.area_name}
        ogImageSrc={"/images/slider-05.jpg"}
      />
      <Navbar areas={areas.items} header={activeArea?.area_name} />

      <StyledProjects>
        <ProjectsHero>
          <ProjectsHeroFilters>
            {areas.items.map(({ area_name, _slug, projects }) => {
              const isActive = router.query.area === _slug;
              return (
                <FilterW>
                  <Link
                    key={_slug}
                    href={`/projects/${_slug}`}
                    className={`agrandir no-underline ${
                      isActive ? "active" : ""
                    }`}
                  >
                    <Filter>
                      <span style={{ textDecoration: "underline" }}>
                        {area_name}
                      </span>
                      <Nano className='no-underline'>{projects.length}</Nano>
                    </Filter>
                  </Link>
                </FilterW>
              );
            })}
          </ProjectsHeroFilters>
        </ProjectsHero>
        <ProjectsGridW>
          <ProjectsGrid projects={projects} />
        </ProjectsGridW>
      </StyledProjects>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = getClient();
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
      projects: enhanceProjects(
        areaData.data.Area.projects,
        areasData.data.Areas
      ),
    },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient();
  const data = await client.query<Query>({ query: GET_ALL_AREAS });

  const paths = data.data.Areas.items.map(({ _slug }) => ({
    params: { area: _slug },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default Projects;
