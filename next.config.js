/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/month",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
