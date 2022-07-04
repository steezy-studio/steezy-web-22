export default function u(cols: number, margin: string, offset: number = 0) {
  return `calc((((100vw - ${margin} * 2) / 16) * ${cols}) + ${offset}px)`;
}
