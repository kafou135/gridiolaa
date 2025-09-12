/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    images:{
        domains:[
            'media.api-sports.io',
            'media-1.api-sports.io',
            'media-2.api-sports.io',
            'media-3.api-sports.io',
            'commons.wikimedia.org',
          'm.media-amazon.com'       ]
    },
    staticPageGenerationTimeout: 180,
}
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};

module.exports = nextConfig
