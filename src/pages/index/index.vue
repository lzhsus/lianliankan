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
				popShow: '',
				pageIndex: 1,
				dataList:[],
				numL:4,
				rectLong:30,
				resr:['',''],
				containerList:[{},{}],
				startObj:[{},{}],
				childrens:[],
				newUpD:[],
				CONTENT:0,

			}
		},
		components: {},
		computed: { },
		watch: {},
		methods: {
			contentBtn(){
				this.CONTENT=!this.CONTENT
			},
			// 生成初始数据
			async startBtn(){
				// var list =await dC.start(this.newUpD,this.containerList);
				// list.forEach((element,i) => {
				//     this.drew(element)
				// });
				// return; 
				var dataList=[];
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
					obj.index = i
					obj.id=newDataList[i].id
					obj.type=newDataList[i].type
					obj.value=newDataList[i].value
				})
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
				rect.obj = ele
				var text = new createjs.Text(ele.type,"12px Arial","blue");
				 
				text.x = _sX + rectX/3
				text.y = _sY + rectY/3
				this.contentAdd(rect)
				container.addChild(rect);
				container3.addChild(text)
				stage.update(text);
			},
			drawLine(start,cd){
				
				var _s = this.containerList;

				var f_sX = _s[0].obj.x + _s[0].obj.x_w*interval+this.rectLong/2 ,
					f_sY = _s[0].obj.y + _s[0].obj.x_h*interval+this.rectLong/2;//坐标
				var e_sX = _s[1].obj.x + _s[1].obj.x_w*interval+this.rectLong/2 ,
					e_sY = _s[1].obj.y + _s[1].obj.x_h*interval+this.rectLong/2;//坐标

				// 直线
				if(start == 'straight-line'){
					let g = new createjs.Graphics();
					/* 同一个 Graphics 实例， 可以多次绘制，以下线段、折线都是用 g 实例绘制的*/
					if(this.newUpD.length==1){
						var x = this.newUpD[0].x;
						var y = this.newUpD[0].y;
						g.setStrokeStyle(2).beginStroke("#000").moveTo(f_sX,f_sY).lineTo(x,y).lineTo(e_sX,e_sY)
					}else if(this.newUpD.length == 2){
						var x = this.newUpD[0].x + this.newUpD[0].x_w*interval+this.rectLong/2;
						var y = this.newUpD[0].y + this.newUpD[0].x_h*interval+this.rectLong/2;
						
						var x2 = this.newUpD[1].x + this.newUpD[1].x_w*interval+this.rectLong/2;
						var y2 = this.newUpD[1].y + this.newUpD[1].x_h*interval+this.rectLong/2;
						console.log(f_sX,f_sY)
						console.log(x,y)
						console.log(x2,y2)
						console.log(e_sX,e_sY)
						g.setStrokeStyle(2).beginStroke("#000").moveTo(f_sX,f_sY).lineTo(x,y).lineTo(x2,y2).lineTo(e_sX,e_sY)
					}else{
						g.setStrokeStyle(2).beginStroke("#000").moveTo(f_sX,f_sY).lineTo(e_sX,e_sY)
					}
					// 简写形式
					// g.ss(20).s('#fafa35').mt(400,100).lt(400,260)
					// // 多点折线的简写形式

					// g.ss(1).s('#000').mt(600,400).lt(600, 200).lt(400,300).lt(500, 550)
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
						index:i,
						value:i+1,
						type:_num,
						del:0,
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
					var isBol = parseInt(Math.random()*2)
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
					// 判断点击的是否同一个 
					var isXiangtong = 0;
					var containerIndex = ''
					container.children.forEach((element,i) => {
						if(element.id ==_self.id){
							containerIndex = i;
							if(element.shadow.blur){
								isXiangtong = 1;
							}else{
								element.shadow.blur =10
							}
						}
					});
					this.childrens = container.children;
					// 同一个终止计划
					if(isXiangtong){
						return
					}
					if(this.containerList[0].id){
						this.containerList[1] = _self;
						this.containerList[1].containerIndex=containerIndex
						this.vreFun()
					}else{
						this.containerList[0] = _self;
						this.containerList[0].containerIndex=containerIndex
					}
				})
			},
			// a
			interval(coord,into){
				var _s = this.containerList;
				var isDel = 0;
				if(coord == 'x'){
					// 中间有间隙 判断中间的数据还是否存在
						var isNum = Math.abs(_s[0].obj.x-_s[1].obj.x)/this.rectLong-1;
						var mixID = _s[0].obj.x>_s[1].obj.x?_s[1].obj.id:_s[0].obj.id;
						var containerDatasIndex = '';
						var exists = [];//存在的数据 位置坐标;
						this.dataList.forEach((element,i) => {
							if(element.id == mixID){
								containerDatasIndex = i
							}
						});
						var notDel = 0;
						for(let i =0;i<isNum;i++){
							containerDatasIndex++;
							if(!this.dataList[containerDatasIndex].isDel){
								notDel=1
							}
						}
						// 中间有数据 不可直线线连接
						if(!notDel){
							console.log('直线删除')
							isDel = 1;//中间有数据 但已经删除
						}else{
							isDel = 0
						}
					if( into == 'top'){
						console.log('into' ,into)
						if(!isDel){
							console.log('直接上边删除')
							// 尝试上边删除删除
							var upD = [{},{}];
								upD[0].y =	_s[0].obj.y-this.rectLong
								upD[0].x =	_s[0].obj.x
								upD[0].x_w = _s[0].obj.x_w
								upD[0].x_h = _s[0].obj.x_h
								upD[1].y =	_s[1].obj.y-this.rectLong
								upD[1].x =	_s[1].obj.x
								upD[1].x_w = _s[1].obj.x_w
								upD[1].x_h = _s[1].obj.x_h
							this.newUpD = upD; //折点
							isDel = 1
						}
					}else if( into == 'botton'){
						console.log('into' ,into)
						console.log('直接下面删除');
							var upD = [{},{}];
								upD[0].y =	_s[0].obj.y+this.rectLong
								upD[0].x =	_s[0].obj.x
								upD[0].x_w = _s[0].obj.x_w
								upD[0].x_h = _s[0].obj.x_h
								upD[1].y =	_s[1].obj.y+this.rectLong
								upD[1].x =	_s[1].obj.x
								upD[1].x_w = _s[1].obj.x_w
								upD[1].x_h = _s[1].obj.x_h
							this.newUpD = upD; //折点
							isDel = 1;
					}else{
						
						if(!isDel){  
							console.log('尝试上边删除')
							// 尝试上边删除删除
							var upD = [{},{}];
								upD[0].y =	_s[0].obj.y-this.rectLong
								upD[0].x =	_s[0].obj.x
								upD[1].y =	_s[1].obj.y-this.rectLong
								upD[1].x =	_s[1].obj.x
							
							var upDobj = {}
							if(upD[0].x < upD[1].x){
								upDobj = upD[0]
							}else{
								upDobj = upD[1]
							}
							var upDIndex = '';
							this.dataList.forEach((element,i)=> {
								if(element.x == upDobj.x&&element.y == upDobj.y){
									upDIndex = i
								}
							}); 
							console.log('s',upDIndex )
							this.dataList.forEach((element,i)=> {
								if(element.x == upD[0].x&&element.y == upD[0].y){
									upD[0].x_w = element.x_w
									upD[0].x_h = element.x_h;
								}
							}); 
							this.dataList.forEach((element,i)=> {
								if(element.x == upD[1].x&&element.y == upD[1].y){
									upD[1].x_w = element.x_w
									upD[1].x_h = element.x_h;
								}
							});
							console.log('***************',upD)
							this.newUpD = upD; //折点
							var n_isNum = isNum + 2;
							var n_notDel = 0;
							for(let i =0;i<n_isNum;i++){
								console.log('---'+i+'--',JSON.stringify(this.dataList[upDIndex]))
								if(!this.dataList[upDIndex].isDel){
									n_notDel = 1
								}
								upDIndex ++
							}
							console.log('n_notDel',n_notDel)
							if(!n_notDel){
								console.log('尝试上边删除-success')
								isDel = 1
							}else{
								isDel = 0
							}
						}
						// 尝试下面删除
						if(!isDel){
							console.log('尝试下面删除');
							var upD = [{},{}];
								upD[0].y =	_s[0].obj.y+this.rectLong
								upD[0].x =	_s[0].obj.x
								upD[1].y =	_s[1].obj.y+this.rectLong
								upD[1].x =	_s[1].obj.x
							var upDobj = {}
							if(upD[0].x < upD[1].x){
								upDobj = upD[0]
							}else{
								upDobj = upD[1]
							}
							console.log('upDobj',upDobj)
							var upDIndex = '';
							this.dataList.forEach((element,i)=> {
								if(element.x == upDobj.x&&element.y == upDobj.y){
									upDIndex = i
								}
							}); 
							console.log('upDIndex',upDIndex)
							this.dataList.forEach((element,i)=> {
								if(element.x == upD[0].x&&element.y == upD[0].y){
									upD[0].x_w = element.x_w
									upD[0].x_h = element.x_h;
								}
							}); 
							this.dataList.forEach((element,i)=> {
								if(element.x == upD[1].x&&element.y == upD[1].y){
									upD[1].x_w = element.x_w
									upD[1].x_h = element.x_h;
								}
							});
							this.newUpD = upD; //折点
							var n_isNum = isNum + 2;
							var n_notDel = 0;
							for(let i =0;i<n_isNum;i++){
								console.log('---'+i+'--',this.dataList[upDIndex])
								if(!this.dataList[upDIndex].isDel){
									n_notDel = 1
								}
								upDIndex ++
							}
							console.log('n_notDel',n_notDel)
							if(!n_notDel){
								console.log('尝试下面删除-success')
								isDel = 1
							}else{
								isDel = 0
							}
						}
					}
				}
				if(coord == 'y'){
					
				}
				
				return isDel;
			},
			// 验证结果位置关联
			verAddressFun(){
				// 判断是否符合删除条件
				var isDel = 0;
				var _s = this.containerList;
				console.log(_s)
				// 同一纬度
				if(_s[0].obj.y == _s[1].obj.y){
					if(Math.abs(_s[0].obj.x-_s[1].obj.x) == this.rectLong){
						isDel = 1
					}else{
						// 判断是不是在边上
						console.log('--------------------',_s[0].obj.x,_s[1].obj.x)
						if(_s[0].obj.y<=this.rectLong+12){
							isDel = this.interval('x','top');
							// 上放
						}else if(_s[0].obj.y>=this.rectLong*4+12){
							isDel = this.interval('x','botton');
							// 最下
						}else{
							isDel = this.interval('x');
						}
					}
				}
				// 同意经度
				if(_s[0].obj.x == _s[1].obj.x){// 同一经度 纵向
					// 检查是否紧挨
					if(Math.abs(_s[0].obj.y - _s[1].obj.y) == this.rectLong){
						isDel = 1
					}else{
						
					}
				}

				var _this =this
				if(isDel){
					this.drawLine('straight-line',()=>{
						setTimeout(res=>{
							_this.delData()
						},1000)
					})
				}else{
					this.notOk()
				}
			},
			// 连线成功删除数据 ，重新初始化
			delData(){
				var _s = this.containerList;
				this.dataList.map((item,i)=>{
					_s.forEach(element => {
						if(item.id == element.obj.id){
							item.isDel = 1
						}
					});
				})
				console.log(_s,this.dataList)
				// 连线成功删除数据 ，重新初始化
				container.removeChildAt(_s[0].containerIndex,_s[1].containerIndex);
				container3.removeChildAt(_s[0].containerIndex,_s[1].containerIndex)
				// 删除联系画布
				containerLine.removeAllChildren();
				this.resr=['',''];
				this.newUpD=[];
				this.startObj=[{},{}];
				this.containerList=[{},{}]
			},
			// 验证结果
			vreFun(){
				var _s = this.containerList;
				if(_s[0].obj.type == _s[1].obj.type){
					if(this.CONTENT){
						this.delData()
					}else{
						this.verAddressFun()
					}
				}else{
					this.notOk()
				}
			},
			// 不符合删除条件
			notOk(){
				this.newUpD=[]
				var _s = this.containerList;
				var sRS=[{},{}];
				sRS[0] = _s[1]
				container.children.forEach((element,i) => {
					if(element.id==_s[0].id){
						element.shadow.blur =0
					}
				})
				this.containerList = sRS;
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
