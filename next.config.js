/** @type {import('next').NextConfig} */

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const nextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
    webpack(config) {

      config.resolve.fallback = {
  
        // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped.
        ...config.resolve.fallback,  
  
        fs: false, // the solution
      };
      
      return config;
    },
  }

module.exports = nextConfig
