import puppeteer from "puppeteer";

export const revalidate = 60 * 60 * 24;

export default async function handler(req, res) {
  const install = require(`puppeteer/internal/node/install.js`).downloadBrowser;
  await install();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://c9d650605ea842e4b4bbde098da0b587.elf.site");
  await page.setViewport({ width: 1080, height: 1024 });
  await page.waitForSelector("a img");

  const imgs = await page.$$eval(
    ".eapps-instagram-feed-posts-item-link",
    (links) => {
      return links.map((link) => {
        const img = link.querySelector("img");
        return {
          href: link.getAttribute("href"),
          src: img.getAttribute("src"),
          alt: img.getAttribute("alt"),
        };
      });
    }
  );

  await browser.close();
  res.status(200).json({ images: imgs });
}
