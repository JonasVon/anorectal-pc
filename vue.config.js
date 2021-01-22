const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: process.env.PROXY_API_URL,
        pathRewrite: { "^/api": "" },
        logLevel: "info",
        ws: true,
      },
    },
  },
  runtimeCompiler: true, // 运行时template编译支持
  chainWebpack: config => {
    // 配置svg打包规则忽略icons目录
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();

    // 新增icons打包规则
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader");

    // 配置ueditor导入
    config.externals({ ueditor: "UE" });
  },
};
