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
// Phone and the Prague street address are left out on purpose until they are
// confirmed: they must match the footer and Google Business Profile exactly.
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
    "STEEZY is a branding and design studio from Brno and Prague. We create brand identities, websites and e-commerce, product launches, video, motion and campaigns for market leaders and ambitious challengers.",
  foundingDate: "2019",
  email: "hello@steezy.studio",
  vatID: "CZ07812558",
  taxID: "07812558",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Obilní trh 310/4",
    postalCode: "602 00",
    addressLocality: "Brno",
    addressCountry: "CZ",
  },
  location: [
    {
      "@type": "Place",
      name: "STEEZY Brno",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Obilní trh 310/4",
        postalCode: "602 00",
        addressLocality: "Brno",
        addressCountry: "CZ",
      },
    },
    {
      "@type": "Place",
      name: "STEEZY Prague",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prague",
        addressCountry: "CZ",
      },
    },
  ],
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
