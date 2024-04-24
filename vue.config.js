// 可配置修改接口，即地址
// const { defineConfig } = require('@vue/cli-service')
module.exports ={
  devServer:{
    // 改变了vue界面的local地址
    port:8081,
    host:'localhost',
    // 使其运行项目时自动打开vue界面
    open:true
  }
}
