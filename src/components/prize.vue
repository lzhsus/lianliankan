<template>
	<div class="pop" id="prize">
		<div class="pop-content">
			<a href="javascript:;" class="closepop-btn" @click="closePOP"></a>
      <a href="javascript:;" class="prize_btn_1 prize_btn" @click="showInfo(352)">{{getPrizeBtnName(352)}}</a>
      <a href="javascript:;" class="prize_btn_2 prize_btn" @click="showInfo(353)">{{getPrizeBtnName(353)}}</a>
      <div class="lock" v-show="checkPrize(352)"></div>
      <div class="lock" v-show="checkPrize(353)"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
  export default {
    props:[
      'prizes'
    ],
    data(){
      return {
      }
    },
    methods:{
      closePOP(){
        this.$emit('closePOP');
      },
      showInfo(giftID){
        let winCode="";
        let isInfo=false
        for(let i=0;i<this.prizes.length;i++){
          if(this.prizes[i]['luckydraw_gift_id']==giftID){
            winCode=this.prizes[i]['win_code'];
            if(this.prizes[i]['info']){
              isInfo=true;
            }
          }
        }
        if(isInfo){
          return false;
        }
        if(!winCode||winCode==""){
          vueApp.alert("尚未获得奖品");
        }else{
          this.$emit('showInfoPOP',winCode);
        }
        
      },
      getPrizeBtnName(giftID){
        if(!this.prizes){
          return "尚未获得";
        }
        for(let i=0;i<this.prizes.length;i++){
          if(this.prizes[i]['luckydraw_gift_id']==giftID){
            if(this.prizes[i]['info']){
              return '已完善信息';
            }else{
              return '立即领取';
            }
          }
        }
        return "立即领取";
      },
      checkPrize(giftID){
        if(!this.prizes){
          return false;
        }
        for(let i=0;i<this.prizes.length;i++){
          if(this.prizes[i]['luckydraw_gift_id']==giftID){
            return false;
          }
        }
        return true;
      },
    }
  }
</script>
<style lang='scss'>
  #prize{
    .pop-content{
        background:url(~@/static/images/myprize.png) no-repeat;
        width:658px;
        height:860px;
        background-size: cover;
        .prize_btn{
          position:absolute;
          left:307px;
          top:292px;
          display:block;
          width:255px;
          height:96px;
          background:url(~@/static/images/prize_btn.png) no-repeat;
          background-size: cover;
          font-size:31px;
          color: #ffed9c;
          line-height:96px;
        }
        .prize_btn.prize_btn_2{
          top:637px;
        }
        .lock{
          position:absolute;
          display:block;
          width:596px;
          height:264px;
          background:url(~@/static/images/lock.png) no-repeat;
          background-size: cover;
          left:30px;
          top:190px;
          &:nth-of-type(2){
            top:502px;
          }
        }
        
    }
    
  }
</style>