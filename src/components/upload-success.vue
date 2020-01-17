<template>
	<div class="pop" id="upload-success">
		<div class="pop-content">
			<a href="javascript:;" class="closepop-btn" @click='closePOP'></a>
			<a href="javascript:;" class="lottery-btn" @click="lottery"></a>
			<a href="http://jdyevent.eintone.com/club/album/list" class="gotoalbum-btn"></a>
		</div>
	</div>
</template>
<script type="text/javascript">
  export default {
    data(){
      return {
        
      }
    },
    methods:{
    	closePOP(){
    		this.$emit('closePOP');
    	},
    	lottery(){
    		this.$emit('showLotteryPOP');
    		
    	}
    }
  }
</script>
<style lang='scss'>
	#upload-success{
		.pop-content{
			width:713px;
			height:825px;
			background:url(~@/static/images/upload_success.png) no-repeat;
			background-size:cover;
			.gotoalbum-btn,
			.lottery-btn{
				display:block;
				width:520px;
				height:110px;
				position:absolute;
				left:97px;
				top:340px;
			}
			.gotoalbum-btn{
				top:480px;
			}
			.closepop-btn{
				right:40px;
				top:130px;
			}
		}
	}
</style>