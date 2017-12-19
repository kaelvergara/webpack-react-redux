const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux'],
        app: path.resolve(__dirname, '../src/js/entry.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name].[hash].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, '../src')
                ],
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                include: [
                    path.resolve(__dirname, '../src')
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {test: /\.woff(\?.*)?$/,  use: 'url-loader?prefix=fonts/&name=styles/vendor/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'},
            {test: /\.woff2(\?.*)?$/, use: 'url-loader?prefix=fonts/&name=styles/vendor/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2'},
            {test: /\.otf(\?.*)?$/,   use: 'file-loader?prefix=fonts/&name=styles/vendor/fonts/[name].[ext]&limit=10000&mimetype=font/opentype'},
            {test: /\.ttf(\?.*)?$/,   use: 'url-loader?prefix=fonts/&name=styles/vendor/fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?.*)?$/,   use: 'file-loader?prefix=fonts/&name=styles/vendor/fonts/[name].[ext]'},
            {test: /\.svg(\?.*)?$/,   use: 'url-loader?prefix=fonts/&name=styles/vendor/fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'},
            {test: /\.(png|jpg)$/,    use: 'url-loader?limit=8192'}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, '../src/js'),
            path.join(__dirname, '../src/assets'),
            'node_modules'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Boiler Plate',
            template: 'index.html',
            filename: 'index.html'
        }),
        new StyleLintPlugin({
            context: path.resolve(__dirname, '../src'),
            glob: 'src/**/*.s?(a|c)ss'
        }),
        new ExtractTextPlugin('styles/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        })
    ]
};

module.exports = config;
