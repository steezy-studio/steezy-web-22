export function loadImage(src: string) {
  return new Promise((res, rej) => {
    const el = document.createElement("img");
    el.addEventListener(`load`, () => {
      res(src);
      el.remove();
    });
    el.addEventListener(`error`, () => {
      rej(src);
      el.remove();
    });
    el.src = src;
  });
}
