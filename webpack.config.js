const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
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
      template: './src/index.html', 
    }),
  ],
  devServer: {
    static: './dist',
    port: 3001,
    open: true,
    hot: true,
  },
  performance: {
    maxAssetSize: 512000, // лимит для одного файла (500 КБ)
    maxEntrypointSize: 512000, // лимит для точки входа (500 КБ)
  },
  mode: 'production',
};
