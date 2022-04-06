export const colors = {
  primary300: "#f5ede5",
  primary400: "#F8D269",
  black: "#000000",
  gray500: "#808080",
  white: "#FFFFFF",
} as const;
export type ColorKeys = keyof typeof colors;

export const theme = { pageMargin: "40px" };
export type Theme = typeof theme;

export const allProjects = {
  _slug: "all-projects",
  area_name: "All projects",
};
