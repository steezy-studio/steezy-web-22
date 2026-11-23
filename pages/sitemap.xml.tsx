import { GetServerSideProps } from "next";
import getClient from "../apollo/client";
import { Query } from "../generated/preprTypes";
import { QueryRoot } from "../generated/shopifyTypes";
import { GET_ALL_AREAS } from "../graphql/GetAllAreas";
import { GET_PROJECTS } from "../graphql/GetAllProjects";
import { GET_PRODUCTS } from "../graphql/GetProducts";
import { indetifiers } from "../helpers/consts";
import { SITE_URL } from "../helpers/seo";

const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
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

  const [projectAreasData, projectsData, productsData] = await Promise.all([
    projectAreas,
    projects,
    products,
  ]);

  // Listed by hand: reading the pages folder does not work on Vercel (it
  // picked up build internals like /___next_launcher and missed /studio).
  const staticPaths = ["/", "/studio", "/contact", "/apparel"];

  const paths = [
    ...staticPaths,
    ...projectAreasData.data.Areas.items.map(
      (area) => `/projects/${area._slug}`
    ),
    ...projectsData.data.Projects.items.map(
      (project) => `/project/${project._slug}`
    ),
    ...productsData.data.products.nodes.map(
      (product) => `/apparel/${product.handle}`
    ),
  ];

  const escapeXml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) =>
      `  <url><loc>${escapeXml(
        `${SITE_URL}${path === "/" ? "/" : encodeURI(path)}`
      )}</loc></url>`
  )
  .join("\n")}
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
