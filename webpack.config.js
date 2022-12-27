const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'core-component'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ['style-loader', 'sass-loader']
      },
      {
        test: /.(.ts|.tsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts']
  },
  externals: {
    react: 'react'
  }
};
