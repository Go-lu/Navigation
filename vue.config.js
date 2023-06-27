// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  productionSourceMap:false,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    allowedHosts: [
      ''
    ],
    proxy: {
      "/api": {
        target: "",
      },
    },
  }
};
