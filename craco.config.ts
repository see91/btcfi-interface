import path from 'path'
import Craco from '@craco/craco'

module.exports = {
  webpack: {
    // ...
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    module: {
      rules: [{
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              api: 'modern-compiler',
              sassOptions: {}
            }
          }
        ]
      }]
    }
  },
  // paths: {
  //   // 修改 src 路径以匹配你的项目结构
  //   src: "src"
  // },
  // 其他配置...
  // style: {
  //   postcss: {
  //     mode: 'extends',
  //     loaderOptions: {
  //       postcssOptions: {
  //         ident: 'postcss',
  //         plugins: [
  //           [
  //             'postcss-pxtorem',
  //             {
  //               rootValue: 16, // 这里设置基本的font-size，可以根据设计稿的宽度/10来确定
  //               unitPrecision: 5, // px转换成rem后保留的小数点位数
  //               propList: ['*', '!border*'], // 被转换的属性列表，* 代表全部转换，'!border*' 代表不转换border相关的属性
  //               selectorBlackList: [], // 忽略的CSS选择器类名，类名以空格隔开
  //               replace: true, // 替换而不是添加回退
  //               mediaQuery: false, // 允许在媒体查询中转换px
  //               minPixelValue: 0, // 最小的转换数值，小于这个值的px不转换为rem
  //             }
  //           ]
  //         ]
  //       }
  //     }
  //   }
  // }
};