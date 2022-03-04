const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: '/marketing/latest/',
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederation({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
