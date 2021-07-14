const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
module.exports = function (env, argv) {
  const isEnvDevelopment = argv.mode === "development" || !argv.mode;
  const isEnvProduction = argv.mode === "production";
  return {
    mode: isEnvDevelopment ? 'production' : isEnvDevelopment && 'development',
    devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',
    output: {
      filename: `bundle.[contenthash:8].js`,
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src/css'), /node_modules/],
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'src/css'), /node_modules/],
        use: ["style-loader", "css-loader?modules"]
      },
      {
        test: /\.less$/,
        exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
        use: ["style-loader", "css-loader", "less-loader"],
      },
      //   {
      //   test: /\.css$/,
      //   include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
      //   use: ["style-loader", "css-loader"]
      // },
      // {
      //   test: /\.css$/,
      //   exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
      //   use: ["style-loader", "css-loader?modules"]
      // },
      // {
      //   test: /\.scss$/,
      //   include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
      //   use: ["style-loader", "css-loader", "sass-loader"]
      // },
      // {
      //   test: /\.scss$/,
      //   exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
      //   use: ["style-loader", "css-loader?modules", "sass-loader"]
      // },
      // {
      //   test: /\.less$/,
      //   include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
      //   use: ["style-loader", "css-loader", "less-loader"]
      // },
      // {
      //   test: /\.less$/,
      //   exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
      //   use: ["style-loader", "css-loader?modules", "less-loader"]
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "eslint-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
      ]
    },
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    devServer: {
      contentBase: "./dist",
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./public/index.html",
      })
    ],
  };
}