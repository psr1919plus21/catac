var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src/client');

const config = {
   entry: {
     main: APP_DIR + '/index.js'
   },
   output: {
     filename: 'bundle.js',
     path: BUILD_DIR,
   },
   module: {
    rules: [
      {
        test: /(\.css|.scss)$/,
        use: ExtractTextPlugin.extract({
           fallback: "style-loader",
           use: ['css-loader', 'sass-loader']
         })
      },
     {
       test: /\.(jsx|js)?$/,
       use: [{
         loader: "babel-loader",
         options: {
           cacheDirectory: true,
           presets: ['react', 'es2015'] // Transpiles JSX and ES6
         }
       }]
     }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};

module.exports = config;
