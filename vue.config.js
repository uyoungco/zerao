module.exports = {
  publicPath: './',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  }
}
