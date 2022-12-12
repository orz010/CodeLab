const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "localhost",
    port: 8080,
    https: false,
    // hotOnly: false,
    proxy: { //配置跨域
        "/api": {
            target: "http://43.138.56.245:8880/", //后端跑在本地8000端口，若连接服务器需改为后端运行地址
            ws: true,
            changOrigin: true, //允许跨域
            pathRewrite: {
                "^/api": "",
            },
        },
    }
},
})