const port = 10002
const name = 'shop'

module.exports = {
  publicPath: '/',
  devServer: {
    port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: name,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    },
    externals: {
      vue: 'Vue',
      'element-ui': 'ElementUI'
    }
  }
}
