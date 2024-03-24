export const easing = [0.0, 0.8, 0.515, 1.005];
export const easingInOutCubic = [0.65, 0, 0.35, 1];
export const easingInOutCubicFn = (x: number): number => {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};

export const topbarReveal = {
  delay: 0.5,
  duration: 1,
  noSkew: true,
  y: ["40%", "0%"],
};

export const pageHeaderReveal = {
  delay: 2,
  duration: 1,
  noSkew: true,
  y: ["40%", "0%"],
};

export const bodyReveal = {
  delay: 3,
  duration: 1,
  noSkew: true,
  y: ["100px", "0%"],
};
