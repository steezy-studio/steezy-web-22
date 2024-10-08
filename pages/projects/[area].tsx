import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import getClient from "../../apollo/client";
import { Query } from "../../cms";
import Head from "../../components/Head/Head";
import Link from "../../components/Link/Link";
import { NavbarContext } from "../../components/Navbar/NavbarControls";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import RevealAnimation from "../../components/RevealAnimation/RevealAnimation";
import ScrollTopButton from "../../components/ScrollTopButton/ScrollTopButton";
import { Nano } from "../../components/Typo/Nano";
import strings from "../../data/strings";
import { Areas } from "../../generated/preprTypes";
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

  const { setNavbarHeader } = useContext(NavbarContext);
  const activeArea = areas.items.find(
    (area) => area._slug === router.query.area
  );
  useEffect(() => {
    setNavbarHeader(activeArea.area_name);
  }, []);

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

      <StyledProjects>
        <ProjectsHero>
          <ProjectsHeroFilters>
            {areas.items.map(({ area_name, _slug, projects }, i) => {
              const isActive = router.query.area === _slug;
              return (
                <RevealAnimation key={_slug} delay={i * 0.2} noCrop>
                  <FilterW className='editorial'>
                    <Link
                      href={`/projects/${_slug}`}
                      className={`no-underline ${isActive ? "active" : ""}`}
                    >
                      <Filter>
                        <span className='underline'>{area_name}</span>
                        <Nano className='helvetica no-underline'>
                          {projects.length}
                        </Nano>
                      </Filter>
                    </Link>
                  </FilterW>
                </RevealAnimation>
              );
            })}
          </ProjectsHeroFilters>
        </ProjectsHero>
        <ProjectsGridW>
          <ProjectsGrid projects={projects} />
        </ProjectsGridW>
        <ScrollTopButton />
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
