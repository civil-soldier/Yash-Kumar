const path = require('path');

module.exports = {
  // We specify the webpack configuration section
  webpack: {
    configure: (webpackConfig) => {
      // Configure Webpack to handle the missing Node.js core modules (fs, path).
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        
        // 1. Fixes the "Can't resolve 'path'" error (uses the browser-compatible polyfill).
        "path": require.resolve("path-browserify"),
        
        // 2. Fixes the "Can't resolve 'fs'" error (tells Webpack to ignore the server-side module).
        "fs": false,
      };

      // Ensure Node.js modules are correctly resolved for compatibility.
      webpackConfig.resolve.modules = [path.resolve(__dirname, 'node_modules'), 'node_modules'];

      return webpackConfig;
    },
  },
};