const webpackMerge = require('webpack-merge');
const commonConfig = require('./config/webpack.common.js');
const prdSetup = require('./config/prd-setup.js');
const commonVariables = require('./config/common.vars.js');

module.exports = webpackMerge(commonConfig({env: 'staging'}), prdSetup({env: 'staging'}));
