<template>
	<div class="pop" id="rule">
		<div class="pop-content">
			<a href="javascript:;" class="closepop-btn" @click="closePOP"></a>
            <img src="~@/static/images/rule/rule-text01.png" class="img100">
            <div class="con">
                <img src="~@/static/images/rule/rule-text02.png" class="img100">
            </div>
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
                this.$emit('close-rule');
            }
        }
    }
</script>
<style lang='scss'>
  #rule{
    position: fixed;left: 0;top: 0;width: 100%;height: 100%;z-index: 999;background:rgba(0,0,0,0.5);
    .pop-content{
        position:absolute;left:0;top:50%;transform:translateY(-50%);
        .closepop-btn{
            position:absolute;right:0;top:0;width:100px;height:100px;
        }
        .con{
            width: 100%;position:absolute;left:0;top: 150px;height: 900px;overflow: auto;
        }
    }
    
  }
</style>