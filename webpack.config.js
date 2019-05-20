const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin') //在内存中生成html文件的插件

const htmlPlugin = new htmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html'
})

module.exports = {
  mode: 'development', //开发模式
  plugins: [htmlPlugin],
  module: {
    rules: [{ test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}
