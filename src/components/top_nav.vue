<template>
	<header class="header">
    <a href="javascript:;" class="logo"></a>
		<ul>
      <li class="header-rule-btn" @click="showRule"></li>
      <li class="header-prize-btn" @click="showPrizeList"></li>
    </ul>
	</header>
</template>
<script type="text/javascript">
  export default {
    data(){
      return {
        
      }
    },
    methods:{
      showRule(){
        vueApp.globalDispatcher.$emit("showRule");
      },
      showPrizeList(){
        vueApp.globalDispatcher.$emit("showPrizeList");
      }
    }
  }
</script>
<style lang='scss'>
  .header{
    position:absolute;
    left: 0;
    top:0;
    z-index: 200;
    width:100%;
    .logo{
        background:url(~@/static/images/logo.png) no-repeat;
        width:157px;
        height:56px;
        background-size: contain;
        position:absolute;
        left:30px;
        top:30px;
    }
    ul{
      margin-right: 15px;
      margin-top: 25px;
      li{
        float: right;
        margin-left: 15px;
      }
    }
    .header-prize-btn{
      display:block;
      width:48px;
      height:57px;
      background:url(~@/static/images/nav_prize_btn.png) center top no-repeat;
      background-size: contain;
    }
    .header-rule-btn{
      display:block;
      width:48px;
      height:57px;
      background:url(~@/static/images/nav_rule_btn.png) center center no-repeat;
      background-size: contain;
    }
  }
</style>