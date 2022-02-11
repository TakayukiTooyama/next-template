/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  rewrites: async () => {
    return [{ source: "/", destination: "/root" }];
  },
  future: { strictPostcssConfiguration: true },
  pageExtensions: ["page.tsx", "page.ts"],
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
};

module.exports = nextConfig;
