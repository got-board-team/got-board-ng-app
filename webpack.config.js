const webpackMerge = require('webpack-merge');
const commonConfig = require('./config/webpack.common.js');
const devSetup = require('./config/dev-setup.js');

module.exports = webpackMerge(commonConfig({env: 'development'}), devSetup({env: 'local'}));
