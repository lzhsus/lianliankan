var WebAudioDecode=require("./WebAudioDecode")
module.exports=function ($url,$option={}) {
    var defaultOpt={
        loop:-1,
        autoPlay:true,
        isWx:true,
    };
    var option= Object.assign(defaultOpt, $option);
    var self = this;
    var url = $url;
    var startTime=0;
    var startPlayTime=0;
    var loops=1;
    var volume=1;
    var loaded=false;
    var bufferSource=null;
    var audioBuffer=null;
    var context =null;
    var gain;
    var currentTime=0
    var isStopped=false;

    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    request.addEventListener("load", function () {
        var ioError = (request.status >= 400);
        if (ioError) {
            // self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
        }
        else {
            WebAudioDecode.decodeArr.push({
                "buffer": request.response,
                "success": onAudioLoaded,
                "fail": onAudioError,
                "self": self,
                "url": url
            });
            WebAudioDecode.decodeAudios();
        }
    });
    request.addEventListener("error", function () {
        // self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
    });
    request.send();

    function onAudioLoaded() {
        loaded = true;
        if(typeof option['onAudioLoaded']=='function'){
            option['onAudioLoaded'].apply(self);
        }
        // self.dispatchEventWith(egret.Event.COMPLETE);
        if(option['autoPlay']){
            self.play();
        }
    }
    function onAudioError() {
        if(typeof option['onAudioError']=='function'){
            option['onAudioError'].apply(self);
        }
        // self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
    }

    function onPlayEnd() {
        console.log('end')
        if (loops == 1) {
            this.stop();
            if(typeof option['onPlayEnd']=='function'){
                option['onPlayEnd'].apply(self);
            }
            // _this.dispatchEventWith(egret.Event.SOUND_COMPLETE);
            return;
        }
        if (loops > 0) {
            loops--;
        }
        if(option['isWx']){
            wxPlay();
        }else{
            startPlay();
        }

    };
    function startPlay(){
        console.log('startPlay',loops)
        if (bufferSource) {
            bufferSource.onended = null;
            bufferSource = null;
        }
        bufferSource = context.createBufferSource();
        bufferSource.buffer = audioBuffer;
        bufferSource.connect(gain);
        gain.connect(context.destination);
        bufferSource.onended = onPlayEnd;
        startPlayTime = Date.now();
        gain.gain.value = volume;
        bufferSource.start(0,startTime);
        currentTime = 0;
    }
    function wxPlay(){
        try {
            WeixinJSBridge.invoke("getNetworkType", {}, function() {
                startPlay();
            });
        } catch(e) {
            startPlay();
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
        context = WebAudioDecode.ctx;
        audioBuffer = this.audioBuffer;
        if (context["createGain"]) {
            gain = context["createGain"]();
        }
        else {
            gain = context["createGainNode"]();
        }
        if(option['isWx']){
            wxPlay();
        }else{
            startPlay();
        }
    };

    this.stop = function () {
        if (bufferSource) {
            var sourceNode = bufferSource;
            if (sourceNode.stop) {
                sourceNode.stop(0);
            }
            else {
                sourceNode.noteOff(0);
            }
            sourceNode.onended = null;
            sourceNode.disconnect();
            bufferSource = null;
            audioBuffer = null;
        }
        isStopped = true;
    };
    this.setVolume=function(value){
        volume = value;
        gain.gain.value = value;
    }
    this.getVolume=function(){
        return volume;
    }
    this.getTime=function(){
        if (bufferSource) {
            return (Date.now() - startPlayTime) / 1000+startTime;
        }
        return 0;
    }
    this.audioType=function(){
        return 'webAudio'
    };
}
