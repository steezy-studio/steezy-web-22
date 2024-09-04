export function clearEmptyVals<T>(arr: T[]): T[] {
  return arr.reduce((acc, curr) => {
    if (!curr) return acc;
    return [...acc, curr];
  }, []);
}
