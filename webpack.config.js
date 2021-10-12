const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: ['react-hot-loader/patch', './src/'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      _components: path.resolve(__dirname, 'src/components'),
      _pages: path.resolve(__dirname, 'src/pages'),
      _api: path.resolve(__dirname, 'src/api'),
      scss: path.resolve(__dirname, 'src/scss'),
    },
  },
  module: {
    rules: [
      //Loading Babel
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      //Loading HTML
      // {
      //     test: /\.html$/i,
      //     loader: "html-loader",
      //     options: {
      //         sources: {
      //             list: [
      //                 {
      //                     tag: 'img',
      //                     attribute: "data-src",
      //                     type: "src"
      //                 }
      //             ]
      //         }
      //     }
      // },

      //Loading CSS
      {
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader'],
      },

      //Loading SCSS and SASS
      {
        test: /\.(s[ca]ss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      //Loading SVG for SCSS
      {
        test: /\.svg$/i,
        issuer: /\.scss$/,
        loader: 'url-loader',
      },

      //Loading images
      {
        test: /\.(png|jpg?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]',
              limit: 20000,
            },
          },
        ],
      },

      //Loading SVG
      {
        test: /\.svg$/i,
        issuer: /\.js$/i,
        use: ['@svgr/webpack'],
      },

      //Loading fonts
      {
        test: /\.(eot|ttf|woff)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name]-[sha1:hash:7].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'public/favicon.ico',
      template: 'public/index.html',
    }),
  ],
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
