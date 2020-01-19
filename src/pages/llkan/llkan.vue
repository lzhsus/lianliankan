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
	import verify from "../../flash/verify.js"
	var stage,container,circle,y_num=0,container2,container3,containerBg,containerLine,interval=10,verifyResult=0;
	// var numL=4,rectLongJS=30;
	export default {
		name: "app",
		data() {
			return {
				pageShow: 'index',
				twoDimension:[],
				twoTextData:[],
				CONTENT:'直接消除',
				twoDimensionLength:8,
				configDataL:{
					shape:{
						w:40,
						h:40
					},
					result:[]
				}
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
			// 绘制元素
			drew(ele,y) {
				var rectX =this.rectLong,rectY =this.rectLong;//矩形大小
				var x = ele.x*this.configDataL.shape.w + ele.x*10,
					y = ele.y*this.configDataL.shape.h + y*10;//坐标

				var rect = new createjs.Shape();
				var color = '#b8ccf3'
				if(ele.start){
					color ='#e5d6af' 
				}  
				rect.graphics.beginFill(color).drawRect(x, y, this.configDataL.shape.w, this.configDataL.shape.h);
				rect.shadow = new createjs.Shadow("red", 0, 0, 0);
				rect.obj = ele
				var text = new createjs.Text(ele.txt,"12px Arial","blue");
				text.x = x + this.configDataL.shape.w/3
				text.y = y + this.configDataL.shape.h/3

				if(ele.start){
					rect.visible=1
					text.visible=1
				}else{
					rect.visible=1
					text.visible=1
				}
				
				
				 
				this.contentAdd(rect)
				container.addChild(rect);
				
				container3.addChild(text)
				stage.update();
			},

			createArrs(){
				var arrs=[];
				for(var i=0;i<this.twoDimensionLength;i++){
					arrs[i]=[]
					for(var j=0;j<this.twoDimensionLength;j++){
						if(i==0||j==0||j==this.twoDimensionLength-1||i==this.twoDimensionLength-1){
							arrs[i].push({
								start :0,
								x:i,
								y:j
							})
						}else {
						    arrs[i].push({
								start :1,
								x:i,
								y:j,
								txt:1
							})
						}
					}
				}
				this.twoTextData = this.randomOrder(this.dataListFunc())
				this.twoDimension = arrs;
				this.createPrate()
			},
			createPrate(){
				var index=0;
				this.twoDimension.forEach((item,i) => {
					item.forEach((obj,j)=>{
						console.log('--------------',obj)
						if(obj.start){
							obj.txt = this.twoTextData[index].type;
							index++;
						}
						this.drew(obj,j)
					})
				});
			},
			// 事件绑定
			contentAdd(_self){
				_self.addEventListener('click',()=>{
					if(verifyResult) return
					// 判断点击的是否同一个 
					var isXiangtong = 0;
					var containerIndex = ''
					container.children.forEach((element,i) => {
						if(element.id ==_self.id){
							containerIndex = i;
							if(element.shadow.blur){
								isXiangtong = 1;
							}else{
								element.shadow.blur =4;
							}
						}
					});
					// 同一个终止计划
					if(isXiangtong) return;
					if(this.configDataL.result.length){
						this.configDataL.result.push(_self)
						this.verifyResultFunc()
					}else{
						this.configDataL.result.push(_self)
					}	
				})
			},
			verifyResultFunc(){
				var startObj = this.configDataL.result[0].obj;
				var endObj = this.configDataL.result[1].obj;
				console.log(startObj,endObj)
				if(startObj.txt == endObj.txt){
					var zb = verify.line(this.twoDimension,startObj,endObj);
					var isTrue = 0
					zb.forEach(e => {
						if(this.verifyTowStart(e.x,e.y)){
							isTrue = 1;
						}
					});
					if(isTrue){
						this.notOk()
					}else{
						console.log('meiyou')
					}
				}else{
					this.notOk()
				}
			},
			verifyTowStart(x,y,start=0){
				
				this.twoDimension.forEach((item,i) => {
					item.forEach((obj,j)=>{
						if(obj.x == x &&obj.y==y){
							start = obj.start
						}
					})
				});
				return start;
			},
			// 不符合删除条件
			notOk(){
				var _s = this.configDataL.result;
				var sRS=[{}];
				sRS[0] = _s[1]
				container.children.forEach((element,i) => {
					if(element.id==_s[0].id){
						element.shadow.blur =0
					}
				})
				this.configDataL.result = sRS;
			},
			// 生成数据最少一行四个
			dataListFunc(num=this.twoDimensionLength-2){
				var datas = [];
				var _num = 1;
				for(let i =0;i<num*num;i++){
					var obj={ 
						type:_num,
						start:1
					}
					datas.forEach(element => {
						if(element.type == _num){
							_num++
						}
					});
					datas.push(obj)
				}
				return datas;
			},
			// 随机数据
			randomOrder (targetArray){
				var arrayLength = targetArray.length
				//先创建一个正常顺序的数组
				var tempArray1 = new Array();
				for (var i = 0; i < arrayLength; i ++){
					tempArray1 [i] = i
				}
				//再根据上一个数组创建一个随机乱序的数组
				var tempArray2 = new Array();
				for (var i = 0; i < arrayLength; i ++){
					//从正常顺序数组中随机抽出元素
					tempArray2 [i] = tempArray1.splice (Math.floor (Math.random () * tempArray1.length) , 1)
				}
				//最后创建一个临时数组存储 根据上一个乱序的数组从targetArray中取得数据
				var tempArray3 = new Array();
				for (var i = 0; i < arrayLength; i ++){
					tempArray3[i]=targetArray[tempArray2[i][0]]
				}
				//返回最后得出的数组
				return tempArray3
			},
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
				
				stage.addChild(containerBg,container,container2,container3,containerLine);
				stage.x=80
				stage.y=80
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
			this.createArrs();
			
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
