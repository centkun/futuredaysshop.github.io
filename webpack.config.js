const path = require(`path`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const mqpacker = require(`css-mqpacker`);
const sortCSSmq = require(`sort-css-media-queries`);
const csswring = require(`csswring`);
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require(`webpack`);

// webpack の出力オプションを指定します
const MODE = process.env.NODE_ENV || `development`;

// MODEによってpostcssのプラグイン設定を変える
let postcssPlugin = [];
if (MODE !== `development`) {
  postcssPlugin = [
    // Mediaqueriesをまとめる
    mqpacker({
      sort: sortCSSmq
    }),
    // cssをminify
    csswring({
      removeAllComments: true
    })
  ]; 
} else {
  postcssPlugin = [
    // Mediaqueriesをまとめる
    mqpacker({
      sort: sortCSSmq
    })
  ]; 
}

const config = {
 
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: path.resolve(__dirname, `src/site.js`),
  
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, `dist`),
    filename: `assets/js/site.js`,
    publicPath: './'
  },

  performance: { hints: false },

  devtool: `source-map`,

  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2018 を ES5 に変換
                '@babel/preset-env',
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: true,
              // ソースマップの利用有無
              sourceMap: (MODE === `development`),
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: (MODE === `development`),
              plugins: postcssPlugin
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              // ソースマップの利用有無
              sourceMap: (MODE === `development`),
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './assets/fonts/',
          publicPath: path => '../fonts/' + path
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: '[name].[ext]',
              outputPath: './assets/img/',
              publicPath: path => '../img/' + path
            }
          }
        ]
      },
      {
        test: /\.(mp4|mov)$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: '[name].[ext]',
              outputPath: './assets/video/',
              publicPath: path => '../video/' + path
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `assets/css/site.css`
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/favicons',
          to: '../dist/assets/favicons',
          noErrorOnMissing: true
        }
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/img',
          to: '../dist/assets/img',
          noErrorOnMissing: true
        }
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/video',
          to: '../dist/assets/video',
          noErrorOnMissing: true
        }
      ]
    })
  ]
};

module.exports = config;