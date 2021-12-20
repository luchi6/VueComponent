/* 
  使用commonjs模块化语法
  向外暴露一个配置对象
*/
const path = require("path") // node内置

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 返回指定目录的绝对路径
function resolve(dir) {
  return path.resolve(__dirname, dir)
}
module.exports = {
  mode: 'development',
  // 入口
  entry: {
    main: "./src/index.js"
  },
  // 出口
  output: {
    // __dirname:全局变量，当前文件所在目录的绝对路径
    path: resolve('dist'), // dist的绝对路径
    filename: '[name].bundle.js' // 打包生成的文件名,name为入口的key:main
  },
  // 模块打包器
  module: {
    rules: [ // 内部配置loader
      // 处理ES6 => ES5
      {
        test: /\.m?js$/,
        // exclude: /(node_modules|bower_components)/,
        include: [resolve('src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // 处理CSS
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'], // 多个loader从右到左处理
      },
      // 处理图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
        }
      },
      // 处理vue
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'vue-loader'
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(), // 清除打包文件夹dist
    new VueLoaderPlugin(),

  ],
  // 开发服务器
  devServer: {
    port: 8080,
    open: true, // 自动打开浏览器
    // quiet: true // 不做太多日志输出
    client: {
      logging: 'error'
    }

  },
  // 引入模块的解析
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
    alias: { // 路径别名(简写方式)
      '@': resolve('src'),
      'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配
    }
  }
}