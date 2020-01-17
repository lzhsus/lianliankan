<template>
	<div class="pop" id="info">
		<div class="pop-content">
			<a href="javascript:;" class="closepop-btn" @click="closePOP"></a>
      <input class="name-t" v-model="name" placeholder="姓名"></input>
      <input class="mobile-t" type='tel' v-model="mobile" placeholder="手机"></input>
      <textarea class="address-t" v-model="address" placeholder="联系地址"></textarea>
      <a href="javascript:;" class='submit-btn' @click="submitInfo"></a>
		</div>
	</div>
</template>
<script type="text/javascript">
  export default {
    props:['winCode'],
    data(){
      return {
        name:"",
        mobile:"",
        address:"",
      }
    },
    methods:{
      closePOP(){
        this.$emit('closePOP');
      },
      submitInfo(){
        if(this.name==""||this.mobile==""||this.address==""||this.address.length<5||this.name.length<2){
          vueApp.alert("请填写完整信息");
          return;
        }
        let reg = /^((13|14|15|18|17|16)\d{9})$/;
        if (!reg.test(this.mobile)) {
            vueApp.alert("请填写正确的手机号码");
          return;
        }
        let data={
          winCode:this.winCode,
          name:this.name,
          mobile:this.mobile,
          address:this.address,
        }
        vueApp.Loading.show();
        $.getJSON(vueApp.config.serverPath+"api/info?callback=?",data)
        .done(function (res) {
            if(res.success){
              vueApp.alert('提交成功！');
              window.location.reload();
            } else{
              vueApp.alert(res.msg);
            }
        }).always(()=>{
          vueApp.Loading.hide();
        });
      },
    }
  }
</script>
<style lang='scss'>
   
  #info{
    .pop-content{
        background:url(~@/static/images/fillinfo.png) no-repeat;
        width:693px;
        height:857px;
        background-size: cover;
        .closepop-btn{
          right:20px;
          top:20px;
        }
        textarea,
        input{
          position:absolute;
          left:169px;
          top:214px;
          width:468px;
          height:68px;
          border: none;
          background: none;
          color:#000;
          @include input-placeholder{
            color: #ffed9b;
            
          }
        }


        .mobile-t{
          top:324px;
        }
        textarea{
          height:174px;
          top:440px;
        }
        .submit-btn{
          display:block;
          position:absolute;
          left:206px;
          top:674px;
          width:310px;
          height:123px;
        }
    }
    
  }
</style>