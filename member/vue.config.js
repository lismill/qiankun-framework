const port = 10001
const name = 'member'

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
