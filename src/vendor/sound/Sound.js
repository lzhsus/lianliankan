var HtmlSound=require("./HtmlSound")
var WebAudioSound=require("./WebAudioSound")
var WebAudioDecode=require("./WebAudioDecode")
const WEB_AUDIO = 1;
const HTML5_AUDIO = 2;
var AudioClass;
var audioType = 0;
var checkAudioType;
var canUseBlob = false;
let ua = navigator.userAgent.toLowerCase();
module.exports=(function(){
    let canUseWebAudio = window["AudioContext"] || window["webkitAudioContext"] || window["mozAudioContext"];
    let isIos = ua.indexOf("iphone") >= 0 || ua.indexOf("ipad") >= 0 || ua.indexOf("ipod") >= 0;
    if (canUseWebAudio) {
        try {
            //防止某些chrome版本创建异常问题
            WebAudioDecode.ctx = new (window["AudioContext"] || window["webkitAudioContext"] || window["mozAudioContext"])();
        }
        catch (e) {
            canUseWebAudio = false;
        }
    }
    if ((audioType == WEB_AUDIO && canUseWebAudio) || audioType == HTML5_AUDIO) {
        checkAudioType = false;
        setAudioType(audioType);
    }
    else if(!isIos && ua.indexOf("safari") >=0 && ua.indexOf("chrome") === -1){
        // In Safari browser on Mac,use web audio
        checkAudioType = false;
        setAudioType(WEB_AUDIO);
    }
    else {
        checkAudioType = true;
        setAudioType(HTML5_AUDIO);
    }

    if (ua.indexOf("android") >= 0) {//android
        if (checkAudioType && canUseWebAudio) {
            setAudioType(WEB_AUDIO);
        }
    }
    else if (isIos) {//ios
        if (getIOSVersion() >= 7) {
            canUseBlob = true;
            if (checkAudioType && canUseWebAudio) {
                setAudioType(WEB_AUDIO);
            }
        }
    }

    let winURL = window["URL"] || window["webkitURL"];
    if (!winURL) {
        canUseBlob = false;
    }

    if (ua.indexOf("egretnative") >= 0) {// Egret Native
        setAudioType(HTML5_AUDIO);
        canUseBlob = true;
    }
    return AudioClass;
})();


function setAudioType(type) {
    audioType = type;
    switch (type) {
        case WEB_AUDIO:
            AudioClass =WebAudioSound;
            break;
        case HTML5_AUDIO:
            AudioClass =HtmlSound;
            break;
    }
}
function getIOSVersion() {
    let matches = ua.toLowerCase().match(/cpu [^\d]*\d.*like mac os x/);
    if(! matches || matches.length == 0) {
        return 0;
    }
    let value = matches[0];
    return parseInt(value.match(/\d+(_\d)*/)[0]) || 0;
}

