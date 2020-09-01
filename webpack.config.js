const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'boundle.js',
		publicPath: '/dist'
	},
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {presets: ['@babel/preset-env'] }
                    }
                ]
            }
        ]
    }
}