const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // входной файл
  output: {
    filename: 'bundle.js', // выходной JS-файл
    path: path.resolve(__dirname, 'dist'), // куда всё складывать
    clean: true, // очищать dist перед каждой сборкой
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // чтобы не писать расширения
  },
  module: {
  rules: [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ],
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html', // этот HTML будет шаблоном
    }),
  ],
  devServer: {
    static: './dist',
    port: 3001,
    open: true,
    hot: true,
  },
  mode: 'development', // режим: разработка
};
