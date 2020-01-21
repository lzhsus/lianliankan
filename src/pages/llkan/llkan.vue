<template>
	<div class="index-wrapper" id="index">
		<!-- 动画 -->
		<div class="play-num">游戏次数：{{playNum}}</div>
		<div class="play-num2" v-if="playSuccess">成功次数：{{playSuccess}}</div>
		<canvas id='demoCanvas' width="750" height="600"></canvas>
		<div class="start-box" >
			<div @click="startBtn(1)">简单</div>
			<div @click="startBtn(2)">容易</div>
			<div @click="startBtn(3)">困难</div>
			<div @click="startBtn(4)">变态</div>
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
	// import flash from 'flash/config.js'
	import dC from "../../flash/dataconfig.js"
	import verify from "../../flash/verify.js"
	import canvasAutoRotation from "vendor/createjs/canvas_auto_rotation";

	var stage,container,circle,y_num=0,container2,container3,containerBg,containerLine,interval=10;
	// var numL=4,rectLongJS=30;
	export default {
		name: "app",
		data() {
			return {
				pageShow: 'index',
				twoDimension:[],
				twoTextData:[],
				CONTENT:false,
				verifyResult:false,
				configDataL:{
					shape:{
						w:0,
						h:40
					},
					tow_length:8,
					interval:10,
					result:[],
					MaxRepetition:4
				},
				playNum:0,
				playSuccess:0,
				playStart:0,
				playId:0
			}
		},
		components: {},
		computed: { },
		watch: {},
		methods: {
			contentBtn(){
				this.CONTENT=!this.CONTENT;
			},
			startBtn(id){
				if(id==4){
					this.bt(id);
					return
				}
				if(this.playNum&&this.playStart){
              		vueApp.alert("重新开始！").then(res=>{
						if(id==4){
							this.bt(id)
							return
						}
						this.repetitionFunc(id);
						this.play();
						console.log(res);
					});
					return;
				}
				this.repetitionFunc(id)
				this.play()
			},
			bt(id){
				vueApp.alert("你选择了变态模式，你确定？").then(res=>{
					vueApp.alert("你确定？？").then(res=>{
						vueApp.alert("你真的确定？？？").then(res=>{
							vueApp.alert("那你做好思想准备了吗？？？？").then(res=>{
								vueApp.alert("你真的做好了？？？？？").then(res=>{
									vueApp.alert("你居然是倔强本身？？？？？？").then(res=>{
										vueApp.alert("go！！！！！！").then(res=>{
											this.repetitionFunc(id)
											this.play()
										})
									})
								})
							})
						})
					})
				})
			},
			// 难易程度
			repetitionFunc(id){
				if(id==1){
					this.configDataL={
						shape:{
							w:100,
							h:100
						},
						tow_length:8,
						interval:10,
						result:[],
						MaxRepetition:6
					}
				}else if(id==2){
					this.configDataL={
						shape:{
							w:80,
							h:80
						},
						tow_length:12,
						interval:10,
						result:[],
						MaxRepetition:28
					}
				}else if(id==3){
					this.configDataL={
						shape:{
							w:60,
							h:60
						},
						tow_length:16,
						interval:10,
						result:[],
						MaxRepetition:91
					}
				}else{
					this.configDataL={
						shape:{
							w:46,
							h:46
						},
						tow_length:20,
						interval:10,
						result:[],
						MaxRepetition:190
					}
				}
				this.playId = id;
			},
			// 判断是否完成
			isSuccessOk(){
				var isSuccess = 1;
				this.twoDimension.forEach(element => {
					element.forEach(e=>{
						if(e.start){
							isSuccess = 0;
						}
					})
				});
				return isSuccess;
			},
			play(){
				this.playNum++;
				localStorage.setItem("playNum", this.playNum);
				this.playStart = 1;
				this.clearCreate()
				this.createArrs();
			},
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
				var text = new createjs.Text(ele.txt||j,"30px Arial",color2);
				text.x = x + this.configDataL.shape.w/3
				text.y = y + this.configDataL.shape.h/3
				text.obj = ele
				if(ele.start){
					rect.visible=1
					text.visible=1
				}else{
					rect.visible=0
					text.visible=0
				}
				
				
				this.contentAdd(rect)
				container.addChild(rect);
				
				container3.addChild(text)
				stage.update();
			},
			// 创建数据
			createArrs(){
				var _length = this.configDataL.tow_length
				var arrs=[];
				for(var i=0;i<_length;i++){
					arrs[i]=[]
					for(var j=0;j<_length;j++){
						if(i==0||j==0||j==_length-1||i==_length-1){
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
					if(this.verifyResult) return
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
						this.verifyResult =true
						this.verifyResultFunc()
					}else{
						this.configDataL.result.push(_self)
					}	
				})
			},
			verifyResultFunc(){
				var _length = this.configDataL.tow_length
				var startObj = this.configDataL.result[0].obj;
				var endObj = this.configDataL.result[1].obj;
				var _this =this;
				if(startObj.txt == endObj.txt){
					// true 可删除  false 不可删除
					verify.setLenght(_length)
					var verifyGetstartObj = verify.getstart(this.twoDimension,startObj,endObj,_length);
					if(verifyGetstartObj.isTrue){
						verifyGetstartObj = verify.getstart(this.twoDimension,endObj,startObj,_length);
					}
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
					g.setStrokeStyle(6).beginStroke("#00B9ED").moveTo(f_sX,f_sY).lineTo(x,y).lineTo(e_sX,e_sY)
				}else if(_s.breaks.length == 2){
					var x = _s.breaks[0].x*( w + interval )+w/2;
					var y = _s.breaks[0].y*( h + interval )+h/2;
					
					var x2 = _s.breaks[1].x*( w + interval )+w/2;
					var y2 = _s.breaks[1].y*( h + interval )+h/2;
					// if()
					if(_s.fangxian == '上'||_s.fangxian == '下'){
						if(_s.startObj.y != _s.breaks[0].y){
							g.setStrokeStyle(6).beginStroke("#00B9ED").moveTo(f_sX,f_sY).lineTo(x,y).lineTo(x2,y2).lineTo(e_sX,e_sY)
						}else{
							g.setStrokeStyle(6).beginStroke("#00B9ED").moveTo(f_sX,f_sY).lineTo(x2,y2).lineTo(x,y).lineTo(e_sX,e_sY)
						}
					}else if(_s.fangxian == '左'||_s.fangxian == '右'){
						if(_s.startObj.y == _s.breaks[0].y){
							g.setStrokeStyle(6).beginStroke("#00B9ED").moveTo(f_sX,f_sY).lineTo(x,y).lineTo(x2,y2).lineTo(e_sX,e_sY)
						}else{
							g.setStrokeStyle(6).beginStroke("#00B9ED").moveTo(f_sX,f_sY).lineTo(x2,y2).lineTo(x,y).lineTo(e_sX,e_sY)
						}
					}else{
						g.setStrokeStyle(6).beginStroke("#00B9ED").moveTo(f_sX,f_sY).lineTo(x2,y2).lineTo(x,y).lineTo(e_sX,e_sY)
					}
					console.log('tow 折点',[_s.startObj.x,_s.startObj.y],_s.breaks,[_s.endObj.x,_s.endObj.y])
				}else{
					g.setStrokeStyle(6).beginStroke("#00B9ED").moveTo(f_sX,f_sY).lineTo(e_sX,e_sY)
				}
				
				this.circleFunc(f_sX,f_sY)
				this.circleFunc(e_sX,e_sY)
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
			promiseFunc(){
				return new Promise((resolve, reject)=>{
					setTimeout(res=>{
						if(true){
							resolve('success')
						}else{	
							reject('错误')
						}
					},2000)
				})
			},
			async delData(verifyGetstartObj){
				// var time = await this.promiseFunc()
				console.log('结束')
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
				stage.update()
				this.verifyResult=false
				this.configDataL.result = [];
				if(this.isSuccessOk()){
					this.playSuccess++
					localStorage.setItem("playSuccess", this.playSuccess);
					if(this.playId<4){
						vueApp.alert('游戏结束，开启下一关吧').then(res=>{
							var id =this.playId 
							id = id + 1
							if(id==4){
								this.bt(id);
								return
							}
							this.repetitionFunc(id)
							this.play()
						})
					}else{
						vueApp.alert('你居然完成了变态模式？？？？？？？').then(res=>{
							vueApp.alert('我已经开始怀疑你的身份了').then(res=>{
								vueApp.alert('我已经盯上你了').then(res=>{
									vueApp.alert('看.....').then(res=>{
										vueApp.alert('.....').then(res=>{
											vueApp.alert('.....').then(res=>{
												vueApp.alert('.....').then(res=>{
													vueApp.alert('啥也没有')
												})
											})
										})
									})
								})
							})
						})
					}
					
				}
				
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
				this.verifyResult=false
			},
			// 生成数据最少一行四个
			dataListFunc(num=this.configDataL.tow_length-2){
				var datas = [];
				var _num = 1;
				var _value = 0;
				for(let i =0;i<num*num;i++){
					var obj={ 
						type:_num,
						start:1
					}
					datas.forEach(element => {
						if(element.type ==obj.type){
							// _num++
							_value++
							if(_value==this.configDataL.MaxRepetition){
								_num++
								_value=0
							}
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
				// return targetArray
			},
			// 绘制圆圈
			circleFunc(x,y,r=10){
				let gC = new createjs.Shape();
					gC.graphics.beginFill("#00B9ED").drawCircle(x,y, r);
				containerLine.addChild(gC);
				stage.update()
			},
			// 
			clearCreate(){
				containerBg.removeAllChildren()
				container.removeAllChildren()
				container2.removeAllChildren()
				container3.removeAllChildren()
				containerLine.removeAllChildren()
			}
		},

		mounted() {
			function resize(){
				let stageRect = canvasAutoRotation.canvasResize(
					$("#demoCanvas")[0],
					$(window).width(),
					$(window).height()
				);
				// flexpos.displayResetPos(stageRect.width, stageRect.height);
			}
			canvasAutoRotation.setRootDisplay(document.getElementById('demoCanvas'))
			resize()
  			$(window).on("resize",resize);
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
				stage.y=80
				stage.addChild(containerBg,container,container2,container3,containerLine);
				
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
			this.playNum =localStorage.getItem("playNum");
			this.playSuccess =localStorage.getItem("playSuccess");
		}
	}
</script>

<style lang="scss">
#demoCanvas{
	border:1px solid #ccc;
}

#index{
	overflow-y:scroll;overflow-x: scroll;-webkit-overflow-scrolling : touch;


	.play-num{
		position: fixed;top: 12px;right: 20px;
	}
	.play-num2{
		position: fixed;top: 40px;right: 20px;
	}
	.start-box{
		position: fixed;bottom: 0;left: 0;
		display: flex;justify-content: center;align-items: center;
		width: 100%;
		>div{
			margin-top: 20px;
			font-size: 30px;color: #fff;font-weight: bold;
			padding: 10px;box-sizing: border-box;
			background: red;
			border-radius: 20px;
		}
	}
}
</style>
