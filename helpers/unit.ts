export default function u(
  cols: number,
  margin: string,
  offset: number | string = 0
) {
  let _offset = offset;
  if (typeof offset === "string") {
    _offset = offset.split("px")[0];
  }
  return `calc((((100vw - ${margin} * 2) / 16) * ${cols}) + ${_offset}px)`;
}
