export const isCursorWithinBounds = (
  container: HTMLDivElement,
  cursorX: number,
  offsetX: number
) => {
  const containerBB = container.getBoundingClientRect();
  const offsetNavAmount = (offsetX * containerBB.width) / 2;
  const leftBound = [containerBB.x, containerBB.x + offsetNavAmount];
  const rightBound = [
    containerBB.x + containerBB.width - offsetNavAmount,
    containerBB.x + containerBB.width,
  ];

  return (
    (leftBound[0] <= Number(cursorX) && Number(cursorX) <= leftBound[1]) ||
    (rightBound[0] <= Number(cursorX) && Number(cursorX) <= rightBound[1])
  );
};
