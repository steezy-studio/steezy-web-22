import { CookieSetOptions } from "universal-cookie";

export const colors = {
  primary300: "#f5ede5",
  primary400: "#FFE96F",
  black: "#000000",
  gray1000: "#161616",
  gray900: "#262626",
  gray800: "#393939",
  gray700: "#525252",
  gray600: "#6f6f6f",
  gray500: "#8d8d8d",
  gray400: "#a8a8a8",
  gray300: "#E5E5DF",
  gray200: "#e0e0e0",
  gray100: "#f4f4f4",
  white: "#FFFFFF",
} as const;

export type ColorKeys = keyof typeof colors;
export type ColorKeysArray = ColorKeys[];
export type ColorValues = (typeof colors)[ColorKeys];

export const allProjects = {
  _slug: "all-projects",
  area_name: "All projects",
  area_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget arcu mollis, faucibus erat eget, sollicitudin leo.",
};

export const indetifiers = [
  {
    namespace: "custom",
    key: "grid_image",
  },
  {
    namespace: "custom",
    key: "grid_image_hover",
  },
  {
    namespace: "custom",
    key: "product_video",
  },
];

export const device = {
  miniPhone: 400,
  phone: 600,
  tabletPortrait: 1024,
  tabletLandscape: 1200,
  smallNotebook: 1440,
  largeNotebook: 1920,
  monitor: 1921,
} as const;

export type DevicesKeys = keyof typeof device;

export const breakpoint = {
  miniPhone: `@media (max-width: ${device.miniPhone}px)`,
  phone: `@media (max-width: ${device.phone}px)`,
  tabletPortrait: `@media (max-width: ${device.tabletPortrait}px)`,
  tabletLandscape: `@media (max-width: ${device.tabletLandscape}px)`,
  smallNotebook: `@media (max-width: ${device.smallNotebook}px)`,
  helperSmallNotebook: `@media (min-width: ${device.smallNotebook}px) and (max-width: 1600px)`,
  helperLargeNotebook: `@media (min-width: 1600px) and (max-width: ${device.largeNotebook}px)`,
  largeNotebook: `@media (max-width: ${device.largeNotebook}px)`,
  monitor: `@media (min-width: ${device.monitor}px) `,
  custom: (maxWidth: number) => `@media (max-width: ${maxWidth}px) `,
} as const;

export const theme = (width: number) => ({
  pageMargin:
    width <= device.phone
      ? "15px"
      : width <= device.smallNotebook
      ? "20px"
      : "120px",
  bRad: width <= device.tabletPortrait ? "10px" : "15px",
});
export type Theme = typeof theme;

export const transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

export const cookiesSettings = (domain: string): CookieSetOptions => ({
  sameSite: true,
  maxAge: 60 * 60 * 24 * 7,
  secure: true,
  domain: domain,
  path: `/`,
});

export const cookiesConsts = {
  cookiesConsent: "cookiesConsent",
};
