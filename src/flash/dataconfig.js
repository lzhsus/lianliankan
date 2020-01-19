// 生成初始数据
// 生成初始数据
var newUpDJS = '',containerListJS = [];
var numL=4;
var interval=10,rectLongJS=30;
function start(newUpD,containerList){
    newUpDJS=newUpD;
    containerListJS = containerList;
    var dataList=[];
    dataList = dataListFunc(numL)
    // 
    dataFastList(dataList[0],dataList[dataList.length-1])

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
    var newDataList = randomOrder(values);
    weizhi.map((obj,i)=>{
        obj.index = i
        obj.id=newDataList[i].id
        obj.type=newDataList[i].type
        obj.value=newDataList[i].value
    })
    // weizhi.forEach((element,i) => {
    //     drew(element)
    // });
    return weizhi
    // this.dataList = weizhi;
}
// 绘制元素
function drew(ele) {
    var rectX =rectLongJS,rectY =rectLongJS;//矩形大小
    var _sX = ele.x+ele.x_w*interval ,_sY = ele.y+ele.x_h*interval;//坐标

    var rect = new createjs.Shape();

    rect.graphics.beginFill("#b8ccf3").drawRect(_sX, _sY, rectX, rectY);
    rect.shadow = new createjs.Shadow("red", 0, 0, 0);
    rect.obj = ele
    var text = new createjs.Text(ele.type,"12px Arial","blue");
     
    text.x = _sX + rectX/3
    text.y = _sY + rectY/3
    contentAdd(rect)
    container.addChild(rect);
    container3.addChild(text)
    stage.update(text);
}
// 绘制边框
function drewBorder(obj){
    var rectX=obj.rectX,rectY=obj.rectY,_sX=obj._sX, _sY=obj._sY;
    var rect = new createjs.Shape();
    var rect1 = new createjs.Shape();
    rect.graphics.beginFill('red').drawRect(_sX, _sY,rectX, rectY)
    rect1.graphics.beginFill('#fff').drawRect(_sX+2, _sY+2,rectX-4, rectY-4)
    rect1.mask = rect
    // rect1.alpha=0
    container2.addChild(rect,rect1);
    
    stage.update();
}
// 随机数据
function randomOrder (targetArray){
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
}
function drawLine(start,cd){
				
    var _s = containerListJS;

    var f_sX = _s[0].obj.x + _s[0].obj.x_w*interval+rectLongJS/2 ,
        f_sY = _s[0].obj.y + _s[0].obj.x_h*interval+rectLongJS/2;//坐标
    var e_sX = _s[1].obj.x + _s[1].obj.x_w*interval+rectLongJS/2 ,
        e_sY = _s[1].obj.y + _s[1].obj.x_h*interval+rectLongJS/2;//坐标

    // 直线
    if(start == 'straight-line'){
        let g = new createjs.Graphics();
        /* 同一个 Graphics 实例， 可以多次绘制，以下线段、折线都是用 g 实例绘制的*/
        if(newUpDJS.length==1){
            var x = newUpDJS[0].x;
            var y = newUpDJS[0].y;
            g.setStrokeStyle(2).beginStroke("#000").moveTo(f_sX,f_sY).lineTo(x,y).lineTo(e_sX,e_sY)
        }else if(newUpDJS.length == 2){
            var x = newUpDJS[0].x + newUpDJS[0].x_w*interval+rectLongJS/2;
            var y = newUpDJS[0].y + newUpDJS[0].x_h*interval+rectLongJS/2;
            
            var x2 = newUpDJS[1].x + newUpDJS[1].x_w*interval+rectLongJS/2;
            var y2 = newUpDJS[1].y + newUpDJS[1].x_h*interval+rectLongJS/2;
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
}
// 取数据的第一个 左后一个
function dataFastList(f,l){
				
    var f_sX = f.x+f.x_w*interval ,f_sY = f.y+f.x_h*interval;//坐标
    var l_sX = l.x+l.x_w*interval+rectLongJS,l_sY = l.y+l.x_h*interval+rectLongJS;//坐标

    var rect = new createjs.Shape();
    rect.graphics.beginFill('red').drawRect(f_sX-10,f_sY-10,l_sX-f_sX+20,l_sY-f_sY+20)
    rect.graphics.beginFill('#fff').drawRect(f_sX-5,f_sY-5,l_sX-f_sX+10,l_sY-f_sY+10)
    containerBg.addChild(rect);
    stage.update()
}
// 生成数据最少一行四个
function dataListFunc(num=4){
    if(num<=numL) num = numL;
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
            x_w:(i+1)%numL?(i+1)%numL:numL,
            x_h:x_h,
            x:x*x_n+12,
            y:y*y_n+12
        }
        if(((i+1)/numL)%1===0){
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
}
// 事件绑定
function contentAdd(_self){
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
}
export default {
    start:start,
    drew:drew,
    drewBorder:drewBorder,
    randomOrder:randomOrder,
    drawLine:drawLine,
    dataFastList:dataFastList,
    dataListFunc:dataListFunc,
    contentAdd:contentAdd
}