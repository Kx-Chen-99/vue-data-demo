module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
  transpileDependencies: ["quasar"],
  devServer: {
    before: require('./mock/index.js'),
    port: 8181,
    proxy: { //配置跨域
      '/': {
        target: 'http://124.223.68.253:8101', //线上
        changOrigin: true, //允许跨域
        pathRewrite: {
          '^/': ''
        }
      },
     }
  },
  publicPath: './'
};
