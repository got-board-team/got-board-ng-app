const helpers = require('./helpers');
const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path'); // path
var webpack = require('webpack');
const commonVariables = require('./common.vars.js');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = function (options) {
    console.log("\n\nPacking like dev for env:" + options.env + "\n\n");

    return {
        entry: helpers.root('src/all.ts'),
        output: {
            path: helpers.root('local-dist-' + options.env),
            filename: '[name].js'
        },
        module: {
            loaders: [
                { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
                { test: /\.css$/, loader: 'raw-loader', exclude: [/jsoneditor/] },
                { test: /\.css$/, loaders: ['style-loader', 'css-loader'], include: [/jsoneditor/] },
                { test: /\.html$/, loader: 'raw-loader' },
                { test: /\.(jpg|png|gif|svg)$/, loader: 'file-loader' },
                { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] }
            ]
        },
        plugins: [
            // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
            new webpack.DefinePlugin(
                commonVariables({env: options.env})
            ),
            new CheckerPlugin(),
            new AssetsPlugin({
                path: helpers.root('local-dist'),
                filename: 'webpack-assets.json',
                prettyPrint: true
            }),
        ],
        resolve: {
            modules: [helpers.root('src'), helpers.root('node_modules')]
        },
    };
};
