<template>
	<div class="index-wrapper" id="index">
		<!-- 动画 -->
		<canvas id='demoCanvas' width="750" height="1450"></canvas>
		<div class="start" >
			<div @click="startBtn">开始</div>
			<div @click="contentBtn">CONTENT+{{CONTENT}}</div>
		</div>

	</div>
</template>

<script>
	// 公共配置
	import Api from "api/index";
	// 公共方法
	import query from "vendor/utils/getUrlParms"
	// import { start,drew,drewBorder,randomOrder,drawLine,dataFastList,dataListFunc,contentAdd } from "../../flash/dataconfig.js"
	
	import dC from "../../flash/dataconfig.js"
	var stage,container,circle,y_num=0,container2,container3,containerBg,containerLine,interval=10,verifyResult=0;
	// var numL=4,rectLongJS=30;
	export default {
		name: "app",
		data() {
			return {
				pageShow: 'index',
				twoDimension:[],
				CONTENT:'直接消除',
				twoDimensionLength:7
			}
		},
		components: {},
		computed: { },
		watch: {},
		methods: {
			contentBtn(){
				this.CONTENT=!this.CONTENT
			},
			startBtn(){},
			contentBtn(){},
			createArrs(){
				var arrs=[]
				for(var i=0;i<this.twoDimensionLength;i++){
					arrs[i]=[]
					for(var j=0;j<this.twoDimensionLength;j++){
						if(i==0){
							arrs[i].push(0)
						}else if(j==this.twoDimensionLength-1||i==this.twoDimensionLength-1){
							arrs[i].push(0)
						}else {
							arrs[i].push(1)
						}
					}
				}
				this.twoDimension = arrs;
				console.log(this.twoDimension)
			}
		},

		mounted() {
			function init(){
				stage = new createjs.Stage("demoCanvas");
				stage.enableMouseOver(10); // 10 updates per second
				createjs.Touch.enable(stage); //允许设备触控
				//创建一个形状的显示对象
				container = new createjs.Container();
				container2 = new createjs.Container();
				container3 = new createjs.Container();
				containerBg = new createjs.Container();
				containerLine = new createjs.Container();
				stage.addChild(containerBg,container,container2,container3,containerLine)
				//更新阶段将呈现下一帧
				createjs.Ticker.setFPS(60);
				createjs.Ticker.addEventListener("tick", handleTick);
				// bgF()
				// bitImg()
				// drew2()
				function handleTick() {
					// drew()
					stage.update();
				}
			}
			init()
			this.createArrs()
		}
	}
</script>

<style lang="scss">
#demoCanvas{
	border:1px solid #ccc;
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
