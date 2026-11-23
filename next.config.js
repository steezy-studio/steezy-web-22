module.exports = {
  // One canonical domain: the Czech domains used to serve a full copy of the
  // site. steezy.studio -> www.steezy.studio is handled in Vercel domains.
  async redirects() {
    return ["www.steezy.cz", "steezy.cz"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: "https://www.steezy.studio/:path*",
      permanent: true,
    }));
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "25k0kg8jym1o.b-cdn.net",
      "5gp8ud67s4yn.b-cdn.net",
      "cdn.shopify.com",
      "phosphor.utils.elfsightcdn.com",
    ],
  },
};
