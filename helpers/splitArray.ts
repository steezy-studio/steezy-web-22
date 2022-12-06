export function splitArray<T>(array: any[], where: number): T[][] {
  const length = array.length;
  const firstPart = array.slice(0, where);
  const secondPart = array.slice(where, length);

  return [firstPart, secondPart];
}
