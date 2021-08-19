module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs/getting-started",
        permanent: true,
      },
    ];
  },
};
