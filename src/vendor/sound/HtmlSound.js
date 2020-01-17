module.exports=function($url,$option={}){
    var defaultOpt={
        loop:-1,
        autoPlay:true,
        isWx:true,
    };

    var option= Object.assign(defaultOpt, $option);
    var volume=1;
    var loaded=false;
    var self=this;
    var loops=0;
    var startTime=0;
    var url=$url;
    var ua = navigator.userAgent.toLowerCase();

    var audio = new Audio(url);
    audio.addEventListener("canplaythrough", onAudioLoaded);
    audio.addEventListener("error", onAudioError);
    audio.addEventListener("ended", onPlayEnd);

    if (ua.indexOf("firefox") >= 0) { //火狐兼容
        audio.autoplay = !0;
        audio.muted = true;
    }
    //edge and ie11
    var ie = ua.indexOf("edge") >= 0 || ua.indexOf("trident") >= 0;
    if (ie) {
        document.body.appendChild(audio);
    }
    audio.load();

    function onAudioLoaded() {
        removeListeners();
        if (ua.indexOf("firefox") >= 0) { //火狐兼容
            audio.pause();
            audio.muted = false;
        }
        if (ie) {
            document.body.appendChild(audio);
        }
        loaded = true;
        if(typeof option['onAudioLoaded']=='function'){
            option['onAudioLoaded'].apply(self);
        }
        if(option['autoPlay']){
            self.play();
        }
        // self.dispatchEventWith(egret.Event.COMPLETE);
    }
    function onAudioError() {
        removeListeners();
        if(typeof option['onAudioError']=='function'){
            option['onAudioError'].apply(self);
        }
        // self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
    }
    function removeListeners() {
        audio.removeEventListener("canplaythrough", onAudioLoaded);
        audio.removeEventListener("error", onAudioError);
        if (ie) {
            document.body.removeChild(audio);
        }
    }

    function onPlayEnd() {
        console.log('end',loops)
        if (loops == 1) {
            self.stop();

            // _this.dispatchEventWith(egret.Event.SOUND_COMPLETE);
            if(typeof option['onPlayEnd']=='function'){
                option['onPlayEnd'].apply(self);
            }
            return;
        }
        if (loops > 0) {
            loops--;
        }
        startPlay();
    };
    function canPlay() {
        audio.removeEventListener("canplay", canPlay);
        try {
            audio.currentTime = startTime;
        }
        catch (e) {
        }
        finally {
            if(option['isWx']){
                wxPlay();
            }else{
                audio.play();
            }
        }
    };
    function startPlay(){
        console.log('startPlay',loops)
        try {
            audio.volume = volume;
            audio.currentTime = startTime;
        }
        catch (e) {
            audio.addEventListener("canplay", canPlay);
            return;
        }
        if(option['isWx']){
            wxPlay();
        }else{
            audio.play();
        }

    }
    function wxPlay(){
        try {
            WeixinJSBridge.invoke("getNetworkType", {}, function() {
                audio.play();
            });
        } catch(e) {
            audio.play();
        }
    }

    this.play = function () {
        startTime = option['startTime']?option['startTime']:0;
        loops = option['loops']?option['loops']:-1;
        if(loops<=0){
            loops=999999
        }
        if (!loaded) {
            console.error("尚未加载完毕");
            return
        }
        audio.autoplay = true;

        startPlay()
    };
    this.stop = function () {
        if (!audio){
            return;
        }
        audio.removeEventListener("ended", onPlayEnd);
        audio.removeEventListener("canplay", canPlay);
        //延迟一定时间再停止，规避chrome报错
        window.setTimeout(function () {
            audio.pause();
            self.setTime(0);
        }, 200);
    };
    this.pause = function () {
        audio.pause();
        return this;
    };
    this.setTime = function (time) {
        audio.currentTime = time;
    };
    this.getTime = function () {
        var time = audio.currentTime;
        return !time?0 : time;
    };
    this.setVolume = function ($volume) {
        volume = $volume;
        if (volume < 0) {
            volume = 0;
        }
        if (volume > 1) {
            volume = 1;
        }
        audio.volume = volume;
    };
    this.audioType=function(){
        return 'htmlAudio'
    };
}
