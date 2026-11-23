import stripHtmlTags from "./stripHtmlTags";

// The one canonical origin of the site. steezy.studio, steezy.cz and
// www.steezy.cz all redirect here (see next.config.js / Vercel domains).
export const SITE_URL = "https://www.steezy.studio";
export const SITE_NAME = "STEEZY Studio";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// Text from the CMS can contain line breaks and HTML tags meant for layout.
// Titles and meta tags need a single plain line.
export const toPlainText = (value?: string | null): string =>
  value ? stripHtmlTags(value).replace(/\s+/g, " ").trim() : "";

export const absoluteUrl = (pathOrUrl?: string | null): string | undefined => {
  if (!pathOrUrl) return undefined;
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
};

export const canonicalUrl = (asPath: string): string => {
  const path = asPath.split(/[?#]/)[0] || "/";
  return `${SITE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
};

// Facts about the studio for search engines and AI assistants (schema.org).
// Name, address and phone must match the footer and Google Business Profile
// exactly. The Prague studio is added together with the new website.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORGANIZATION_ID,
  name: "STEEZY",
  alternateName: "STEEZY Studio",
  legalName: "STEEZY, s.r.o.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/images/studio-hero.jpg`,
  description:
    "STEEZY is a branding and design studio from Brno, Czech Republic. We create brand identities, websites and e-commerce, product launches, video, motion and campaigns for market leaders and ambitious challengers.",
  foundingDate: "2019",
  email: "hello@steezy.studio",
  telephone: "+420 728 088 996",
  vatID: "CZ07812558",
  taxID: "07812558",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Obilní trh 4",
    postalCode: "602 00",
    addressLocality: "Brno",
    addressCountry: "CZ",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Brand identity",
    "Brand strategy",
    "Packaging design",
    "Web design",
    "E-commerce",
    "Video production",
    "Motion design",
    "3D and CGI",
    "Advertising campaigns",
  ],
  sameAs: [
    "https://www.instagram.com/steezy.studio/",
    "https://vimeo.com/steezystudio",
  ],
};
