<template>
	<div class="index-wrapper" id="index">
		<!-- 动画 -->
		<canvas id='demoCanvas' width="750" height="1450"></canvas>
		<div class="start" @click="startBtn">开始</div>
	</div>
</template>

<script>
	// 公共配置
	import Api from "api/index";
	// 公共方法
	import query from "vendor/utils/getUrlParms"
	var stage,container,circle,y_num=0,container2,containerBg,containerLine,interval=10,verifyResult=0;
	export default {
		name: "app",
		data() {
			return {
				pageShow: 'index',
				popShow: '',
				pageIndex: 1,
				dataList:[],
				numL:4,
				rectLong:30,
				resr:['',''],
				startObj:[{},{}]
			}
		},
		components: {},
		computed: { },
		watch: {},
		methods: {
			// 生成初始数据
			async startBtn(){
				var dataList=[]
				dataList = this.dataListFunc(this.numL)
				// 
				this.dataFastList(dataList[0],dataList[dataList.length-1])
				var values = [],weizhi = []
				dataList.forEach(element => {
					values.push({
						id:element.id,
						type:element.type,
						value:element.value
					})
					weizhi.push({
						x:element.x,
						y:element.y,
						x_h:element.x_h,
						x_w:element.x_w
					})
				});
				// var oldData = dataList
				var newDataList = this.randomOrder(values);
				weizhi.map((obj,i)=>{
					obj.id=newDataList[i].id
					obj.type=newDataList[i].type
					obj.value=newDataList[i].value
				})
				// // newDataList.map((element,i) => {
				// // 	element.x =this.dataList[i].x
				// // 	element.y =this.dataList[i].y
				// // 	element.x_h =this.dataList[i].x_h
				// // 	element.x_w =this.dataList[i].x_w
				// // });
				// var newData = [];
				// console.log(newDataList)
				// dataList.forEach((obj,i) => {
				// 	obj.id =newDataList[i].id
				// 	obj.type=newDataList[i].type
				// 	obj.value=newDataList[i].value
				// 	newData.push(obj)
				// 	// return obj
				// })
				// console.log(newData)
				// return
				weizhi.forEach((element,i) => {
					// if(i<1){

					// 	this.drew(element)
					// }
					this.drew(element)
				});
				this.dataList = weizhi;
			},
			// 绘制元素
			drew(ele) {
				var rectX =this.rectLong,rectY =this.rectLong;//矩形大小
				var _sX = ele.x+ele.x_w*interval ,_sY = ele.y+ele.x_h*interval;//坐标

				var rect = new createjs.Shape();
			
				rect.graphics.beginFill("#b8ccf3").drawRect(_sX, _sY, rectX, rectY);
				rect.shadow = new createjs.Shadow("red", 0, 0, 0);

				var text = new createjs.Text(ele.type,"12px Arial","blue");
				 
				text.x = _sX + rectX/3
				text.y = _sY + rectY/3
				this.contentAdd(rect)
				container.addChild(rect,text);
				stage.update();
			},
			drawLine(start,cd){
				var startDatas =this.startObj
				var f_sX = startDatas[0].x+startDatas[0].x_w*interval+this.rectLong/2 ,f_sY = startDatas[0].y+startDatas[0].x_h*interval+this.rectLong/2;//坐标
				var e_sX = startDatas[1].x+startDatas[1].x_w*interval+this.rectLong/2 ,e_sY = startDatas[1].y+startDatas[1].x_h*interval+this.rectLong/2;//坐标

				// 直线
				console.log(start)
				if(start == 'straight-line'){
					let g = new createjs.Graphics();
					/* 同一个 Graphics 实例， 可以多次绘制，以下线段、折线都是用 g 实例绘制的*/
					g.setStrokeStyle(2).beginStroke("red").moveTo(f_sX,f_sY).lineTo(e_sX,e_sY)
					// 简写形式
					// g.ss(20).s('#fafa35').mt(400,100).lt(400,260)
					// // 多点折线的简写形式
					// g.ss(1).s('#000').mt(600,400).lt(600, 200).lt(400,300).lt(500, 550)
					console.log('直线')
					var line = new createjs.Shape(g)

				}
				containerLine.addChild(line);
				stage.update()
				cd&&cd()
			},
			// 绘制边框
			drewBorder(obj){
				var rectX=obj.rectX,rectY=obj.rectY,_sX=obj._sX, _sY=obj._sY;
				var rect = new createjs.Shape();
				var rect1 = new createjs.Shape();
				rect.graphics.beginFill('red').drawRect(_sX, _sY,rectX, rectY)
				rect1.graphics.beginFill('#fff').drawRect(_sX+2, _sY+2,rectX-4, rectY-4)
				rect1.mask = rect
				// rect1.alpha=0
				container2.addChild(rect,rect1);
				stage.update();
			},
			// 取数据的第一个 左后一个
			dataFastList(f,l){
				
				var f_sX = f.x+f.x_w*interval ,f_sY = f.y+f.x_h*interval;//坐标
				var l_sX = l.x+l.x_w*interval+this.rectLong,l_sY = l.y+l.x_h*interval+this.rectLong;//坐标

				var rect = new createjs.Shape();
				rect.graphics.beginFill('red').drawRect(f_sX-10,f_sY-10,l_sX-f_sX+20,l_sY-f_sY+20)
				rect.graphics.beginFill('#fff').drawRect(f_sX-5,f_sY-5,l_sX-f_sX+10,l_sY-f_sY+10)
				containerBg.addChild(rect);
				stage.update()
			},
			// 生成数据最少一行四个
			dataListFunc(num=4){
				if(num<=this.numL) num = this.numL;
				const allNum = num*num;
				var datas = [];
				var _num = 1;
				var x=30,y=30;
				var x_n=1,y_n=1;
				var x_w =0,x_h=0;

				for(let i =0;i<allNum;i++){
					
					var obj={ 
						id:i+1,
						value:i+1,
						type:_num,
						x_w:(i+1)%this.numL?(i+1)%this.numL:this.numL,
						x_h:x_h,
						x:x*x_n+12,
						y:y*y_n+12
					}
					if(((i+1)/this.numL)%1===0){
						x_h++
					}
					if((i+1)%num==0){
						y_n ++,
						x_n =1
					}else{
						x_n++
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
			// 事件绑定
			contentAdd(_self){
				_self.addEventListener('click',()=>{
					if(verifyResult) return
					var index='',obj={};
					var dIndex=''
					var nC=[]
					container.children.forEach(e=>{
						if(!e.text){
							nC.push(e)
						}
					})
					nC.forEach((element,i) => {
						if(element.id==_self.id){
							dIndex = i
						}
					});
					// 判断点击的是否同一个 
					var isXiangtong = 0;

					container.children.forEach((element,i) => {
						if(element.id==_self.id){
							index = element.id;
							if(element.shadow.blur){
								isXiangtong = 1;
							}else{
								element.shadow.blur =10
							}
						}
					});
					// 同一个终止计划
					if(isXiangtong){
						return
					}
					if(this.resr[0]){
						this.resr[1]=index
						this.startObj[1] =this.dataList[dIndex]
						this.startObj[1].index = dIndex
						this.vreFun()
					}else{
						this.resr[0]=index;
						
						this.startObj[0] =this.dataList[dIndex]
						console.log(this.startObj[0])
						this.startObj[0].index = dIndex
					}
					obj = this.dataList[dIndex]
					// this.drewBorder({
					// 	rectX:this.rectLong,
					// 	rectY:this.rectLong,
					// 	_sX:parseInt(obj.x)+parseInt(obj.x_w),
					// 	_sY:parseInt(obj.y)+parseInt(obj.x_h)
					// })
					// container.removeChildAt(_self.id,_self.id+1);
					// stage.update()
					// console.log('_self---click事件',_self)
				})
			},
			// 验证结果位置关联
			verAddressFun(index_0,index_1){
				// 合并数据 初始数据 create生产的container 子集数据
				var _this = this;
				var containerDatas = this.resr;  //id
				var startDatas =this.startObj
				console.log(containerDatas)
				console.log(startDatas)
				// 同一维度 横向
				if(startDatas[0].y == startDatas[1].y){
					// 检查是否紧挨
					if(Math.abs(startDatas[0].x-startDatas[1].x) == this.rectLong){
						this.drawLine('straight-line',()=>{
							setTimeout(res=>{
								_this.delData(index_0,index_1)
							},200)
						})
					}else{

					}
				}
				
			},
			// 连线成功删除数据 ，重新初始化
			delData(index_0,index_1){
				// 连线成功删除数据 ，重新初始化
				container.removeChildAt(index_0,index_1,index_0+1,index_1+1);
				// 删除联系画布
				containerLine.removeAllChildren();
				this.resr=['',''];
				this.startObj=[{},{}];
			},
			// 验证结果
			vreFun(){
				var ids = this.resr;
				var index_0=-1;
				var index_1=-2;
				container.children.forEach((element,i) => {
					if(element.id==ids[0]){
						index_0 = i;
					}
					if(element.id==ids[1]){
						index_1 = i;
					}
				});
				var text_0=-1,text_1=-2;
				container.children.forEach((element,i) => {
					if(i==index_0+1){
						text_0=element.text
					}
					if(i==index_1+1){
						text_1=element.text
					}
				});
				var _this =this;
				var resrS = this.resr
				var startObjS = this.startObj;
				// 点击两次验证结果，此时不可点
				verifyResult = 1
				setTimeout(res=>{
					if(text_0==text_1){
						// 执行删除计划
						_this.verAddressFun(index_0,index_1)
					}else{
						var newRS =['',''],sRS=[{},{}]
						newRS[0] = resrS[1]
						sRS[0] = startObjS[1]
						container.children.forEach((element,i) => {
							if(element.id==resrS[0]){
								element.shadow.blur =0
							}
						})
						_this.resr =newRS;
						_this.startObj = sRS
					}
					verifyResult = 0
				},100)
				

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
				containerBg = new createjs.Container();
				containerLine = new createjs.Container();
				stage.addChild(containerBg,container,container2,containerLine)
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
			this.startBtn()
		}
	}
</script>

<style lang="scss">
#demoCanvas{
	border:1px solid #ccc;
}
#index{
	.start{
		position: fixed;top: 100px;left: 50%;
		transform: translateX(-50%);
	}
}
</style>
