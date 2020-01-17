module.exports = {
    imgUpload(data) {
        vueApp.Loading.open();
        return $.getJSON(vueApp.config.serverPath + 'image/upload?callback=?', data).always(() => {
            vueApp.Loading.close();
        })
    },

    ShortRegister(data) {
        vueApp.Loading.open();
        return $.getJSON(vueApp.config.serverPath + 'qiaohu/api/register/Register/ShortRegister?callback=?', data).always(() => {
            vueApp.Loading.close();
        })
    },

    ShortActive(data) {
        vueApp.Loading.open();
        return $.getJSON(vueApp.config.serverPath + 'qiaohu/api/register/Register/ShortActive?callback=?', data).always(() => {
            vueApp.Loading.close();
        })
    },

    ReSendDefaultsPassword(data) {
        vueApp.Loading.open();
        return $.getJSON(vueApp.config.serverPath + 'qiaohu/api/login/Login/ReSendDefaultsPassword?callback=?', data).always(() => {
            vueApp.Loading.close();
        })
    },

    h5post(data) {
        vueApp.Loading.open();
        return $.getJSON(vueApp.config.serverPath + 'xcs/h5post?callback=?', data).always(() => {
            vueApp.Loading.close();
        })
    },

    uploadtonas(data) {
        vueApp.Loading.open();
        return $.post(vueApp.config.serverPath + 'qiaohu/api/uploadtonas', data).always(() => {
            vueApp.Loading.close();
        })
    },

    shareWorks(data) {
        vueApp.Loading.open();
        return $.get(vueApp.config.serverPath + 'xcs/works', data).always(() => {
            vueApp.Loading.close();
        })
    },

    shareVoted(data) {
        vueApp.Loading.open();
        return $.post(vueApp.config.serverPath + 'xcs/vote', data).always(() => {
            vueApp.Loading.close();
        })
    },

    shareRand(data) {
        vueApp.Loading.open();
        return $.get(vueApp.config.serverPath + 'xcs/rand', data).always(() => {
            vueApp.Loading.close();
        })
    },
    // 获取题目
    getQuestionnaire(data){
        return postDeferred(vueApp.config[vueApp.config.envVersion].serverPathQH+'campaign20191102/api/index/get-questionnaire', data)
    },
}
function postDeferred(url,data){
    vueApp.Loading.open();
    var dtd = $.Deferred()
    console.log(data)
    $.ajax({
        url: url,
        type: "GET",
        data:data,
        dataType: "jsonp",
    })
    .done(function(res) {//请求成功的回调函数
        dtd.resolve(res)
    })
    .fail(res => {
        dtd.reject(res);
    })
    .always(()=>{
        vueApp.Loading.close();
    })
    
    return dtd;
}