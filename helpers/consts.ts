export const colors = {
  primary300: "#f5ede5",
  primary400: "#F8D269",
  black: "#000000",
  gray400: "#808080",
  gray500: "#333",
  white: "#FFFFFF",
} as const;
export type ColorKeys = keyof typeof colors;

export const allProjects = {
  _slug: "all-projects",
  area_name: "All projects",
  area_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget arcu mollis, faucibus erat eget, sollicitudin leo.",
};

export const projectsPerPage = 12;

export const device = {
  phone: 600,
  tabletPortrait: 1024,
  tabletLandscape: 1200,
  smallNotebook: 1440,
  largeNotebook: 1920,
  monitor: 2500,
} as const;

export const breakpoint = {
  phone: `@media (max-width: ${device.phone}px)`,
  tabletPortrait: `@media (max-width: ${device.tabletPortrait}px)`,
  tabletLandscape: `@media (max-width: ${device.tabletLandscape}px)`,
  smallNotebook: `@media (max-width: ${device.smallNotebook}px)`,
  helperSmallNotebook: `@media (min-width: ${device.smallNotebook}px) and (max-width: 1600px)`,
  helperLargeNotebook: `@media (min-width: 1600px) and (max-width: ${device.largeNotebook}px)`,
  largeNotebook: `@media (max-width: ${device.largeNotebook}px)`,
  monitor: `@media (min-width: ${device.monitor}px) `,
} as const;

export const theme = (width: number) => ({
  pageMargin:
    width <= device.phone
      ? "15px"
      : width <= device.smallNotebook
      ? "20px"
      : "40px",
  navbarHeight:
    width <= device.phone
      ? "40px"
      : width <= device.tabletLandscape
      ? "50px"
      : width <= device.smallNotebook
      ? "60px"
      : width <= device.largeNotebook
      ? "70px"
      : "80px",
});
export type Theme = typeof theme;

export const transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};
