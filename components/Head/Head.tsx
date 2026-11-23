import NextHead from "next/head";
import { useRouter } from "next/router";
import { colors } from "../../helpers/consts";
import {
  absoluteUrl,
  canonicalUrl,
  organizationJsonLd,
  SITE_NAME,
  toPlainText,
} from "../../helpers/seo";

interface Props {
  // Most specific part last, e.g. ["Project", "Infinit Wellness"].
  pageName?: string | string[];
  // Full <title> override, used as-is (e.g. the homepage).
  title?: string;
  ogTitle?: string;
  ogImageSrc?: string;
  ogDescription?: string;
  // Extra schema.org objects for this page, next to the organization.
  jsonLd?: object | object[];
}

const Head = ({
  pageName,
  title,
  ogTitle,
  ogImageSrc,
  ogDescription,
  jsonLd,
}: Props) => {
  const router = useRouter();

  const nameParts = (Array.isArray(pageName) ? pageName : [pageName])
    .map(toPlainText)
    .filter(Boolean)
    .reverse();
  const _title = title
    ? toPlainText(title)
    : [nameParts.join(" • "), SITE_NAME].filter(Boolean).join(" – ");
  const _description = toPlainText(ogDescription);
  const _ogTitle = toPlainText(ogTitle) || _title;
  const _ogImage = absoluteUrl(ogImageSrc);
  const _canonical = canonicalUrl(router.asPath);
  const structuredData = [
    organizationJsonLd,
    ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []),
  ];

  return (
    <NextHead>
      <title>{_title}</title>
      <link rel='canonical' href={_canonical} />

      <link rel='icon' href='/favicon.svg' />
      <link rel='mask-icon' href='/mask-icon.svg' color={colors.primary300} />
      <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      <link rel='manifest' href='/manifest.json'></link>

      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='theme-color' content={colors.white} />
      {!!_description && <meta name='description' content={_description} />}

      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:title' content={_ogTitle} />
      {!!_description && (
        <meta property='og:description' content={_description} />
      )}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={_canonical} />
      {!!_ogImage && <meta property='og:image' content={_ogImage} />}
      <meta
        name='twitter:card'
        content={_ogImage ? "summary_large_image" : "summary"}
      />

      {structuredData.map((data, i) => (
        <script
          key={`jsonld-${i}`}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </NextHead>
  );
};

export default Head;
