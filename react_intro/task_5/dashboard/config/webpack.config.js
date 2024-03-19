const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Agrega esta línea para establecer el modo de desarrollo
  entry: './task_5/dashboard/src/index.js',
  output: {
    path: path.resolve(__dirname, 'task_5/dashboard/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'task_5/dashboard/dist'),
    },
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './task_5/dashboard/dist/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Agrega una regla para los archivos .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usa babel-loader para procesar los archivos .js
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
};

