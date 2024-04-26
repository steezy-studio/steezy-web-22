import fs from "fs";
import { GetServerSideProps } from "next";
import getClient from "../apollo/client";
import { Query } from "../generated/preprTypes";
import { QueryRoot } from "../generated/shopifyTypes";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import { GET_PROJECTS } from "../graphql/GetAllProjects";
import { GET_PRODUCTS } from "../graphql/GetProducts";
import { indetifiers } from "../helpers/consts";

const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  locales,
}) => {
  const siteUrl = "https://steezy.studio";

  const client = getClient();
  const shopifyClient = getClient("shopify");

  const projectAreas = client.query<Query>({ query: GET_ALL_AREAS });

  const projects = client.query<Query>({
    query: GET_PROJECTS,
    variables: { limit: null },
  });

  const products = shopifyClient.query<QueryRoot>({
    query: GET_PRODUCTS,
    variables: {
      first: 99,
      variantsFirst2: 99,
      imagesFirst2: 99,
      identifiers: indetifiers,
    },
  });

  const timestamp = new Date().toISOString();

  const [projectAreasData, projectsData, productsData] = await Promise.all([
    projectAreas,
    projects,
    products,
  ]);

  const dynamicPages = [
    ...productsData.data.products.nodes.map((product) => {
      return {
        url: `apparel/${product.handle}`,
        changed_on: timestamp,
      };
    }),
    ...projectAreasData.data.Areas.items.map((area) => {
      return {
        url: `projects/${area._slug}`,
        changed_on: timestamp,
      };
    }),
    ...projectsData.data.Projects.items.map((project) => {
      return {
        url: `project/${project._slug}`,
        changed_on: timestamp,
      };
    }),
  ];

  const staticPages = fs
    .readdirSync(
      {
        development: "pages",
        production: "./",
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return ![
        "_app.tsx",
        "_document.tsx",
        "_error.tsx",
        "sitemap.xml.tsx",
        "project",
        "projects",
        "___next_launcher",
        "___vc_bridge",
        "package",
        "node_modules",
        "api",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      let slug = staticPagePath.split(`.`)[0];
      if (slug === `index`) slug = ``;
      return {
        url: slug,
        changed_on: timestamp,
      };
    })
    .flat();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...staticPages, ...dynamicPages]
    .map((page) => {
      return `
        <url>
          <loc>${`${siteUrl}/${page.url}`}</loc>
          <lastmod>${page.changed_on}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
      `;
    })
    .join("")}
  </urlset>
`;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
