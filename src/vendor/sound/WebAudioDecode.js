var WebAudioDecode =(function() {
    function WebAudioDecode() {
    }
    WebAudioDecode.decodeAudios = function () {
        if (WebAudioDecode.decodeArr.length <= 0) {
            return;
        }
        if (WebAudioDecode.isDecoding) {
            return;
        }
        WebAudioDecode.isDecoding = true;
        var decodeInfo = WebAudioDecode.decodeArr.shift();
        WebAudioDecode.ctx.decodeAudioData(decodeInfo["buffer"], function (audioBuffer) {
            decodeInfo["self"].audioBuffer = audioBuffer;
            if (decodeInfo["success"]) {
                decodeInfo["success"]();
            }
            WebAudioDecode.isDecoding = false;
            WebAudioDecode.decodeAudios();
        }, function () {
            console.log('sound decode error');
            if (decodeInfo["fail"]) {
                decodeInfo["fail"]();
            }
            WebAudioDecode.isDecoding = false;
            WebAudioDecode.decodeAudios();
        });
    };
    WebAudioDecode.decodeArr = [];
    WebAudioDecode.isDecoding = false;
    return WebAudioDecode;
})();

module.exports=WebAudioDecode;
