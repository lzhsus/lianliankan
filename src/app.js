import Vue from "vue";
import {Indicator, MessageBox} from "mint-ui";
//import Krpano from "vue-krpano";

require("assets/css/mint-ui.css");
require("assets/css/cropper.css");
require("assets/css/swiper.css");
require("assets/scss/reset.scss");
require("assets/scss/global.scss");
// require("vendor/utils/vconsole.js");
const weixin = require("vendor/weixin/weixin")



console.info("app初始化...");
/**
 * 全局配置
 */
export const config = {
    serverPath: window["serverPath"] ? window["serverPath"] : "http://170213fg0186demo.jdytoy.com/",
    qiaohuOss: 'https://qiaohuoss.eintone.com/',
    envVersion:'publish',
    publish:{
        // 获取题目
        serverPathQH:'https://qh.eintone.com/',
        // 获取授权
        serverPath:'https://180313fg0276.eintone.com/',
        // 提交数据
        serverPathSub:'https://ww.qiaohu.com/', 
    },
    // 巧虎测试
    qhtest:{
        // 获取题目
        serverPathQH:'https://qh.eintone.com/',
        // 获取授权
        serverPath:'https://180313fg0276.eintone.com/',
        // 提交数据
        serverPathSub:'https://wwtest.qiaohu.com/',
    },
    // 正式测试
    production:{
        // 获取题目
        serverPathQH:'https://qh.eintone.com/',
        // 获取授权
        serverPath:'https://180313fg0276.eintone.com/',
        // 提交数据
        serverPathSub:'https://170213fg0186ww.eintone.com/',
    },
    dev:{// jedey  
        // 获取题目
        serverPathQH:'http://qhdemo.jdytoy.com/',
        // 获取授权
        serverPath:'http://180313fg0276demo.jdytoy.com/',
        // 提交数据
        serverPathSub:'http://170213fg0186demo.jdytoy.com/',
    }
};
/**
 * 事件管理中心
 */
export const globalDispatcher = new Vue();
/**
 * ui
 */
let Loading=Indicator;
let alert=MessageBox;
console.log("loading use",Loading)
export { Indicator, MessageBox ,Loading,alert};

/**
 * 百度统计初始化
 */
console.info("百度统计初始化...");
tracking.baiduInit("72bfeb84765fa0c2792366dad5e494b4");

var shareObj = {
    title: "",
    desc: "",
    link: window.location.href,
    imgUrl:  config.serverPath + "html/campaign/minitest-h520191109/static/images/share.jpg",
    success: function (type) {
        tracking.trackEvent(type, "wxshare", "minitest-h520191109");
    },
    cancel: function () {
    }
};
$.getJSON("//160615fg0007.eintone.com/wx/jsticket?callback=?").done(function (res) {
    if (res.success) {
        weixin.init(res.result.ticket, res.result.appID, shareObj, false);
    }
});


export function pageInit(app, data = {}) {
    return new Vue({
        el: "#app",
        data: data,
        // components: { app },
        render: h => h(app)
        /**
         * 置入路由
         */
        // router
    });
}
