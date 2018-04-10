const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_DIR = path.join(__dirname, '../src');

const styleLoader = {
  loader: 'style-loader',
  options: {
    insertInto: 'body',
    insertAt: 'top'
  }
};

module.exports = env => {
  return {
    mode: env,
    context: SRC_DIR,
    devtool: env === 'production' ? 'hidden-source-maps' : 'cheap-source-map',
    entry: {
      background: './background/background',
      content: './content/content',
      options: './options/options'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            env === 'production' ? MiniCssExtractPlugin.loader : styleLoader,
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [
            env === 'production' ? MiniCssExtractPlugin.loader : styleLoader,
            'css-loader'
          ]
        },
        {
          test: /\.html$/,
          loader: 'file-loader',
          options: {
            name: '[name].html'
          }
        },
        {
          test: /\.(eot|ttf|woff|woff2)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin()]
  };
};
