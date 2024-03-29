const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: '/auth/latest/',
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederation({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
