<template>
	<div class="index-wrapper" id="index">
		<!-- 动画 -->
		<canvas id='demoCanvas' width="750" height="1450"></canvas>
		<div class="start" >
			<div @click="startBtn">开始</div>
			<div @click="contentBtn">{{CONTENT?'只验证文字相同':'全部验证'}}</div>
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
				CONTENT:false,
				twoDimensionLength:8,
				configDataL:{
					shape:{
						w:40,
						h:40
					},
					interval:10,
					result:[]
				}
			}
		},
		components: {},
		computed: { },
		watch: {},
		methods: {
			contentBtn(){
				this.CONTENT=!this.CONTENT;
			},
			startBtn(){},
			// 绘制元素
			drew(ele,j) {
				var rectX =this.rectLong,rectY =this.rectLong;//矩形大小
				var x = ele.x*this.configDataL.shape.w + ele.x*this.configDataL.interval,
					y = ele.y*this.configDataL.shape.h + j*this.configDataL.interval;//坐标

				var rect = new createjs.Shape();
				var color = '#b8ccf3';
				var color2 ='#fff'
				if(ele.start){
					color ='#e5d6af'
					color2 = 'blue' 
				}  
				rect.graphics.beginFill(color).drawRect(x, y, this.configDataL.shape.w, this.configDataL.shape.h);
				rect.shadow = new createjs.Shadow("red", 0, 0, 0);
				rect.obj = ele
				var text = new createjs.Text(ele.txt||j,"12px Arial",color2);
				text.x = x + this.configDataL.shape.w/3
				text.y = y + this.configDataL.shape.h/3
				text.obj = ele
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
			// 创建数据
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
			// 绘制图形
			createPrate(){
				var index=0;
				this.twoDimension.forEach((item,i) => {
					item.forEach((obj,j)=>{
						if(obj.start){
							obj.txt = this.twoTextData[index].type;
							index++;
						}else{
							obj.txt = i;
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
				var _this =this;
				if(startObj.txt == endObj.txt){
					// true 可删除  false 不可删除
					var verifyGetstartObj = verify.getstart(this.twoDimension,startObj,endObj,this.twoDimensionLength);
					if(verifyGetstartObj.isTrue){
						this.drawLine(verifyGetstartObj,()=>{
							setTimeout(()=>{
								_this.delData(verifyGetstartObj)
							},1000)
						})
					}else if(this.CONTENT){
						this.drawLine(verifyGetstartObj,()=>{
							setTimeout(()=>{
								_this.delData(verifyGetstartObj)
							},1000)
						})
					}else{
						this.notOk()
					}
				}else{
					this.notOk()
				}
			},
			drawLine(verifyGetstartObj,cd){
				var _s = verifyGetstartObj;
				var w = this.configDataL.shape.w
				var h = this.configDataL.shape.h
				var interval = this.configDataL.interval

				var f_sX = _s.startObj.x*( w + interval )+w/2,
					f_sY = _s.startObj.y*( h + interval )+h/2;//坐标

				var e_sX = _s.endObj.x*( w + interval )+w/2,
					e_sY = _s.endObj.y*( h + interval )+h/2//坐标
				
				let g = new createjs.Graphics();
				/* 同一个 Graphics 实例， 可以多次绘制，以下线段、折线都是用 g 实例绘制的*/
				if(_s.breaks.length==1){
					var x = _s.breaks[0].x*( w + interval )+w/2;
					var y = _s.breaks[0].y*( h + interval )+h/2;
					g.setStrokeStyle(2).beginStroke("#000").moveTo(f_sX,f_sY).lineTo(x,y).lineTo(e_sX,e_sY)
				}else if(_s.breaks.length == 2){
					var x = _s.breaks[0].x*( w + interval )+w/2;
					var y = _s.breaks[0].y*( h + interval )+h/2;
					
					var x2 = _s.breaks[1].x*( w + interval )+w/2;
					var y2 = _s.breaks[1].y*( h + interval )+h/2;
					if()
					console.log('tow 折点',[_s.startObj.x,_s.startObj.y],_s.breaks,[_s.endObj.x,_s.endObj.y])
					g.setStrokeStyle(2).beginStroke("#000").moveTo(f_sX,f_sY).lineTo(x2,y2).lineTo(x,y).lineTo(e_sX,e_sY)
				}else{
					g.setStrokeStyle(2).beginStroke("#000").moveTo(f_sX,f_sY).lineTo(e_sX,e_sY)
				}
				// 简写形式
				// g.ss(20).s('#fafa35').mt(400,100).lt(400,260)
				// // 多点折线的简写形式

				// g.ss(1).s('#000').mt(600,400).lt(600, 200).lt(400,300).lt(500, 550)
				var line = new createjs.Shape(g);
				containerLine.addChild(line);
				stage.update()
				cd&&cd()
			},
			// 删除数据
			delData(verifyGetstartObj){
				var _s = verifyGetstartObj;
				var index = -1;
				container.children.forEach(e => {
					if(e.obj.x==_s.startObj.x&&e.obj.y==_s.startObj.y){
						e.alpha = 0
					}if(e.obj.x==_s.endObj.x&&e.obj.y==_s.endObj.y){
						e.alpha = 0
					}
				});
				container3.children.forEach(e => {
					if(e.obj.x==_s.startObj.x&&e.obj.y==_s.startObj.y){
						e.alpha = 0
					}if(e.obj.x==_s.endObj.x&&e.obj.y==_s.endObj.y){
						e.alpha = 0
					}
				});
				this.twoTextData.map(e=>{
					if(e.x==_s.startObj.x&&e.y==_s.startObj.y){
						e.start = 0
					}if(e.x==_s.endObj.x&&e.y==_s.endObj.y){
						e.start = 0
					}
				})
				this.twoDimension.map(item=>{
					item.forEach(e => {
						if(e.x==_s.startObj.x&&e.y==_s.startObj.y){
							e.start = 0
						}if(e.x==_s.endObj.x&&e.y==_s.endObj.y){
							e.start = 0
						}
					});
				})
				containerLine.removeAllChildren();
				this.configDataL.result = [];
			},
			// verifyTowStart(x,y,start=0){
			// 	this.twoDimension.forEach((item,i) => {
			// 		item.forEach((obj,j)=>{
			// 			if(obj.x == x &&obj.y==y){
			// 				start = obj.start
			// 			}
			// 		})
			// 	});
			// 	return start;
			// },
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
				createjs.Ticker.setFPS(30);
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
