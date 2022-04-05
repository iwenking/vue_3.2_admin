const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const { config } = require("process");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
});

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.imooc-admin.lgdsunday.club/",
        changeOrigin: true,
      },
    },
  },
  chainWebpack(config) {
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
