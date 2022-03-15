export default function u(cols: number, margin: string) {
  return `calc(((100vw - ${margin} * 2) / 16) * ${cols})`;
}
