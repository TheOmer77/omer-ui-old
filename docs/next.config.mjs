import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  /**
   * Enable importing SVGs in react & MDX.
   * @see [SVGR docs](https://react-svgr.com/docs/next/#usage) (modified to include MDX)
   */
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.([jt]s|md)x?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

const config = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})(nextConfig);

export default config;
