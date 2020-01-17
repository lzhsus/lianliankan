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
	var stage,container,circle,y_num=0;
	export default {
		name: "app",
		data() {
			return {
				pageShow: 'index',
				popShow: '',
				pageIndex: 1,
				dataList:[],
				numL:4,
				resr:['','']
			}
		},
		components: {},
		computed: { },
		watch: {},
		methods: {
			async startBtn(){
				this.dataList=[];
				
				this.dataList = this.dataListFunc(this.numL)
				var oldDataList = this.dataList
				console.log('dataList-------------------',this.dataList)
				var newDataList = this.randomOrder(oldDataList)
				// newDataList.map((element,i) => {
				// 	element.x =this.dataList[i].x
				// 	element.y =this.dataList[i].y
				// 	element.x_h =this.dataList[i].x_h
				// 	element.x_w =this.dataList[i].x_w
				// });
				this.dataList.map((obj,i)=>{
					obj.id =newDataList[i].id
					obj.type=newDataList[i].type
					obj.value=newDataList[i].value
				})
				console.log('newDataList-------------------',newDataList)
				// return
				this.dataList.forEach((element,i) => {
					this.drew(element)
				});
			},
			drew(ele) {
				console.log(ele)
				var rectX =30,rectY =30;//矩形大小
				var _sX = ele.x+ele.x_w ,_sY = ele.y+ele.x_h;//坐标

				var rect = new createjs.Shape();
			
				rect.graphics.beginFill("#b8ccf3").drawRect(_sX, _sY, rectX, rectY);
				var text = new createjs.Text(ele.type,"12px Arial","blue");
				 
				text.x = _sX + rectX/3
				text.y = _sY + rectY/3
				this.contentAdd(rect)
				container.addChild(rect,text);
				stage.update();
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
				console.log(_self)
				
				_self.addEventListener('click',()=>{
					console.log('container',container.children)
					var index=''
					container.children.forEach((element,i) => {
						if(element.id==_self.id){
							index = element.id;
						}
					});
					if(this.resr[0]){
						this.resr[1]=index
						this.vreFun()
					}else{
						this.resr[0]=index
					}
					// container.removeChildAt(_self.id,_self.id+1);
					// stage.update()
					// console.log('_self---click事件',_self)
				})
			},
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
				if(text_0==text_1){
					container.removeChildAt(index_0,index_1,index_0+1,index_1+1);
				}
				console.log(this.resr,text_0,text_1)
				this.resr=['','']
			}
		},

		mounted() {
			function init(){
				stage = new createjs.Stage("demoCanvas");
				stage.enableMouseOver(10); // 10 updates per second
				createjs.Touch.enable(stage); //允许设备触控
				//创建一个形状的显示对象
				container = new createjs.Container();
				stage.addChild(container)
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
