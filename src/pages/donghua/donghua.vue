<template>
	<div class="index-wrapper" id="index">
		<!-- 动画 -->
		<canvas id='canvas' width="750" height="1450"></canvas>
		<div @click="backPageClick" class="aaa"></div>
	</div>
</template>

<script>
	// 公共配置
	import Api from "api/index";
	import Loading from "vendor/ui/loading";
	import flash from "flash/config";
	import appData from '../../common/appData'
    // import Loading from "vendor/ui/loading";
	var setTimeoutObj=null;
	const res = require("vendor/createjs/createjs-res");
	export default {
		name: "app",
		data() {
			return {
				pageShow: 'index',
				popShow: '',
				pageIndex:1
			}
		},
		components: {},
		computed: { },
		watch: {},
		methods:{
			backPageClick(){
				clearTimeout(setTimeoutObj)
				this.popShow = '';
				this.resultFn();			
			},
			resultFn(){	
				if( this.pageIndex==2 ){
					wx.miniProgram.postMessage({data:{result:this.questions, questionsEnd: 2}})
					wx.miniProgram.navigateBack();
				}else if( this.pageIndex==1 ){
					// 第二题是否已经回答正确
					if( false ){
						wx.miniProgram.postMessage({data:{result:this.questions, questionsEnd: 2}})
						wx.miniProgram.navigateBack();
					}else{					
						this.pageIndex = 2;
						vueApp.globalDispatcher.$emit("gotoPage", {
							page: 'falsh',
						});
					}
				} 
			},
		},

		mounted() {
			let firstPage = 'p1';
			let firstPageLoack = false;
			
			flash('falsh');

			vueApp.globalDispatcher.$on("fail", (e)=>{
				this.questions[this.pageIndex-1].isOk = 0;
				if( isAgain==1 ){
					this.popShow = 'againErr';
				}else{
					this.popShow = 'err';
				}
				setTimeoutObj = setTimeout(()=>{
					this.popShow = '';
					this.resultFn();
                }, 3000);
			});
			vueApp.globalDispatcher.$on("win", (e)=>{		
				this.questions[this.pageIndex-1].isOk = 1;		
				this.resultFn();
			});	
		}
	}
</script>

<style lang="scss">
#demoCanvas{
	border:1px solid #ccc;
}
.aaa{
	font-size: 30px;color: #000;
	position: fixed;top: 50px;left: 50px;
	width: 100px;height: 100px;
	background: red;
}
#index{
	.start{
		position: fixed;top: 700px;left: 50%;
		transform: translateX(-50%);
		display: flex;justify-content: center;align-items: center;
		>div{
			font-size: 30px;color: #fff;font-weight: bold;
			padding: 10px 40px;
			background: red;
			border-radius: 20px;
		}
	}
}
</style>
