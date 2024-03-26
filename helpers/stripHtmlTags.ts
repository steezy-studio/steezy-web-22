function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, " ");
}

export default stripHtmlTags;
