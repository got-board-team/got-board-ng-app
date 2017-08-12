const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
const path = require('path');
const helpers = require('./helpers');

module.exports = function (options) {
    return {
        resolve: {
            extensions: ['.ts', '.js'],
            modules: [helpers.root('src'), helpers.root('node_modules')]
        },
        plugins: [
            // Fixes core.es5.js critical dependency warnings when compiling
            // https://github.com/angular/angular/issues/14898#issuecomment-290359551
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)@angular/,
                helpers.root('./src'),
                {}
            ),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new HtmlWebpackPlugin({
                template: helpers.root('src/index.html'),
            }),
            new CopyWebpackPlugin(
                [ { from: 'src/assets', to: 'assets' } ]
            ),
            function() {
                this.plugin("done", function(stats) {
                    if (stats.compilation.errors && stats.compilation.errors.length) {
                        console.log(stats.compilation.errors);
                        process.exit(1);
                    }
                });
            }
        ],
        devServer: {
            port: process.env.PORT || 3000,
            host: process.env.HOST || '0.0.0.0',
            disableHostCheck: true,
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            stats: { colors: true },
            contentBase: helpers.root('dist'),
            publicPath: '/'
        }
    };
};
