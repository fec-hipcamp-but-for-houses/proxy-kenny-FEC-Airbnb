const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src/');
const DIST_DIR = path.join(__dirname, '/public/');

module.exports = {
  entry: {
    bundle: `${SRC_DIR}/index.jsx`,
  },
  output: {
    filename: '[name].js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env',
                    '@babel/react',{
                    'plugins': ['@babel/plugin-proposal-class-properties']}]
        },
      },
      {
        test: [/\.css$/],
        use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { sourceMap: true, modules: true, localIdentName: '[local]___[hash:base64:5]' } }],
      },
    ],
  },
  resolve: {
    alias: {
      "styled-components": path.resolve(__dirname, "node_modules", "styled-components"),
    }
  },
};