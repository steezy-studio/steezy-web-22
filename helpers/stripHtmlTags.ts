import he from "he";
function stripHtmlTags(html: string): string {
  const stringWithoutTgas = html.replace(/<[^>]*>?/gm, "");
  return he.decode(stringWithoutTgas);
}

export default stripHtmlTags;
