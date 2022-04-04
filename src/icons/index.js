import SvgIcon from "@/components/SvgIcon";

//1、导入svg图标
//2、完成svgIcon的全局注册
const svgRequire = require.context("./svg", false, /\.svg$/);
//此时返回了一个Require函数，可以接收一个 require 的参数，用于require的导入
//该函数提供了三个函数，可以通过 svgRequire.key() 获得所有的svg图标
//遍历图标吧图标作为require参数参入到svgRequire导入函数中，完成本地svg图标
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon));

export default (app) => {
  app.component("svg-icon", SvgIcon);
};
