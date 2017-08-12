const webpackMerge = require('webpack-merge');
const commonConfig = require('./config/webpack.common.js');
const prdSetup = require('./config/prd-setup.js');

module.exports = webpackMerge(commonConfig({env: 'production'}), prdSetup({env: 'production'}));
