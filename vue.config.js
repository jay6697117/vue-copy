
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.entryPoints.clear()
    config.entry('index').add('./src/index.js') // 新增入口
    config.output
      .filename('vue-copy.js')
      .libraryTarget('umd')
      .library()
  }
  // entry: {
  //   index: path.join(__dirname, '/src/index.js')
  // },
  // output: {
  //   path: path.join(__dirname, '/dist'),
  //   filename: 'vue-copy.js',
  //   libraryTarget: 'umd',
  //   umdNamedDefine: true
  // },
  // publicPath: './',
  // outputDir: 'dist'
}
