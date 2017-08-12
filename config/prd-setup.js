const ngToolsWebpack = require('@ngtools/webpack');
const helpers = require('./helpers');
var webpack = require('webpack');
const commonVariables = require('./common.vars.js');
const path = require('path'); // path
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = function (options) {
    console.log("\n\nPacking with AOT for env:" + options.env + "\n\n");

    return {
        entry: helpers.root('src/all.aot.ts'),
        output: {
            path: helpers.root('dist-' + options.env),
            filename: '[name].[chunkhash].bundle.js'
        },
        module: {
            loaders: [
                { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
                { test: /\.css$/, loader: 'raw-loader', exclude: [/jsoneditor/] },
                { test: /\.css$/, loaders: ['style-loader', 'css-loader'], include: [/jsoneditor/] },
                { test: /\.html$/, loader: 'raw-loader' },
                { test: /\.(jpg|png|gif|svg)$/, loader: 'file-loader' },
                { test: /\.ts$/, loader: '@ngtools/webpack' }
            ]
        },
        plugins: [
            // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
            new webpack.DefinePlugin(
                commonVariables({env: options.env})
            ),
            new ngToolsWebpack.AotPlugin({
                tsConfigPath: './tsconfig.aot.json',
                entryModule: helpers.root('src/app/app.module#AppModule')
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                },
                sourceMap: true
            }),
            new AssetsPlugin({
                path: helpers.root('dist'),
                filename: 'webpack-assets.json',
                prettyPrint: true
            })
        ],
        resolve: {
            modules: [helpers.root('src'), helpers.root('node_modules')]
        }
    };
};
