export const isCursorWithinBounds = (
  container: HTMLDivElement,
  cursorX: number,
  offsetX: number
) => {
  const containerBB = container.getBoundingClientRect();
  const offsetNavAmount = (offsetX * containerBB.width) / 2;
  const safeZone = 0.2 * containerBB.width;
  const leftBound = [containerBB.x, containerBB.x + offsetNavAmount + safeZone];
  const rightBound = [
    containerBB.x + containerBB.width - offsetNavAmount + safeZone,
    containerBB.x + containerBB.width,
  ];

  return (
    (leftBound[0] <= Number(cursorX) && Number(cursorX) <= leftBound[1]) ||
    (rightBound[0] <= Number(cursorX) && Number(cursorX) <= rightBound[1])
  );
};
