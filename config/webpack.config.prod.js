const CompressionPlugin = require('compression-webpack-plugin');

const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const config = Object.create(baseConfig);

const prodPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            unused: true,
            dead_code: true,
            warnings: false
        },
        comments: false,
        sourceMap: false
    }),
    new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    })
];

config.plugins = config.plugins.concat(prodPlugins);

module.exports = config;
