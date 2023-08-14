const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { VueLoaderPlugin } = require('vue-loader');

const statsConfig = {
  preset: "verbose",
  excludeModules: [
    (moduleSource) => {
      return moduleSource.indexOf("node_modules") !== -1;
    },
  ],
  all: false,
  moduleAssets: false, // 不显示模块资产信息
  reasons: true, // 不显示模块间依赖关系
  depth: true, // 不显示模块的深度
  providedExports: false, // 不显示一个模块下提供的导出
  errorDetails: false, // 不显示错误的详细信息
  publicPath: false, // 不显示 output.publicPath
  outputPath: false, // 不显示 output.path
  performance: false, // 不显示性能提示
  logging: 'warn', // 只显示警告或者错误日志
  chunkModules: true,
  children: true,
  chunkRelations: true,
  chunkOrigins: true,
  excludedModules: ['**/node_modules/**', '**/test/**'],
  topAssets: 0,
  excludeAssets: ['**/*.dll.js', '**/*.map'],
  excludeChunks: ['polyfills'],
  exclude: /node_modules/,
  excludeSources: true,
  modules: true,
};

module.exports = {
  entry: path.resolve(__dirname, "./src/main.js"),
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "bundle.js",
  // },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: "vue-loader",
      },
      {
        test: /\.(sass|less|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/', // 可以根据实际情况设置字体文件输出路径
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      reportFilename: path.resolve(__dirname, "./analyze.json"),
      generateStatsFile: true,
      statsFilename: path.resolve(__dirname, "./stats.json"),
      statsOptions: statsConfig,
    }),
  ],
};
