export const colors = {
  primary300: "#f5ede5",
  primary400: "#F8D269",
  black: "#000000",
  gray500: "#808080",
  white: "#FFFFFF",
} as const;
export type ColorKeys = keyof typeof colors;

export const allProjects = {
  _slug: "all-projects",
  area_name: "All projects",
};

export const projectsPerPage = 12;

export const device = {
  phone: 600,
  tabletPortrait: 900,
  tabletLandscape: 1200,
  smallNotebook: 1400,
  largeNotebook: 1920,
  monitor: 2500,
} as const;

export const breakpoint = {
  phone: `@media (max-width: ${device.phone}px)`,
  tabletPortrait: `@media (max-width: ${device.tabletPortrait}px) `,
  tabletLandscape: `@media (max-width: ${device.tabletLandscape}px) `,
  smallNotebook: `@media (max-width: ${device.smallNotebook}px)`,
  helperSmallNotebook: `@media (max-width: ${device.smallNotebook}px) and (max-width: 1600px)`,
  helperLargeNotebook: `@media (min-width: 1600px) and (max-width: ${device.largeNotebook}px)`,
  largeNotebook: `@media (max-width: ${device.largeNotebook}px)`,
  monitor: `@media (min-width: ${device.monitor}px) `,
} as const;

export const theme = (width: number) => ({
  pageMargin: width <= device.smallNotebook ? "20px" : "40px",
});
export type Theme = typeof theme;
