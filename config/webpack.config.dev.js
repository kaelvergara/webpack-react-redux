const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

if (process.env.DISABLE_LINT) {
    baseConfig.module.rules.splice(0,1);
}

module.exports = baseConfig;
