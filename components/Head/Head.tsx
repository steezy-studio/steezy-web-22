import NextHead from "next/head";
import { colors } from "../../helpers/consts";

interface Props {
  pageName?: string | string[];
  ogTitle?: string;
  ogImageSrc?: string;
  ogDescription?: string;
}

const Head = ({ pageName, ogTitle, ogImageSrc, ogDescription }: Props) => {
  const _pageName =
    typeof pageName === "string" ? pageName : pageName?.join(` • `);
  return (
    <NextHead>
      <title>{`STEEZY Studio ${!!_pageName ? `• ${_pageName}` : ``}`}</title>

      <link rel='icon' href='/favicon.svg' />
      <link rel='mask-icon' href='/mask-icon.svg' color={colors.primary300} />
      <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      <link rel='manifest' href='/manifest.json'></link>

      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='theme-color' content={colors.white} />
      <meta name='description' content={ogDescription} />

      <meta property='og:title' content={ogTitle} />
      <meta property='og:description' content={ogDescription} />
      <meta property='og:type' content='website' />
      {!!ogImageSrc && <meta property='og:image' content={ogImageSrc} />}
    </NextHead>
  );
};

export default Head;
