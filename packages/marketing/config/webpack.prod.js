const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederation({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/index',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
