import {
  ColorKeys,
  ColorKeysArray,
  colors,
  ColorValues,
} from "../helpers/consts";

export const addColorClasses = (css?: (colors: ColorValues) => string) => {
  const colorArray = Object.keys(colors) as ColorKeysArray;
  return colorArray.map((key: ColorKeys) => {
    return `
        &.${key} {
          color: ${colors[key]};
          ${typeof css === "function" ? css(colors[key]) : ""}
        }
      `;
  });
};
