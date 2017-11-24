var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');


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
     },

     {
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      include: path.resolve('./src/client/static/img/svg/'),
      options: {
        extract: true,
        spriteFilename: 'cats.svg'
      }
     }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new SpriteLoaderPlugin()
  ]
};

module.exports = config;
