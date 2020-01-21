// 获取
function line(twoDimension,startObj,endObj,countDian){
    var arr=[];
    if(startObj.x == endObj.x){
        if(Math.abs(startObj.y-endObj.y)!=1){
            var resLength = startObj.y-endObj.y;
            if(resLength>0){
                for(let i=0;i<Math.abs(resLength)-1;i++){
                    arr.push({
                        x:startObj.x,
                        y:startObj.y-(i+1)
                    })
                }
            }else{
                resLength = Math.abs(resLength);
                for(let i=0;i<Math.abs(resLength)-1;i++){
                    arr.push({
                        x:endObj.x,
                        y:endObj.y-(i+1)
                    })
                }
            }
        }
    }else if(startObj.y == endObj.y){
        if(Math.abs(startObj.x-endObj.x)!=1){
            var resLength = startObj.x-endObj.x;
            if(resLength>0){
                for(let i=0;i<Math.abs(resLength)-1;i++){
                    arr.push({
                        x:startObj.x-(i+1),
                        y:startObj.y
                    })
                }
            }else{
                resLength = Math.abs(resLength);
                for(let i=0;i<Math.abs(resLength)-1;i++){
                    arr.push({
                        x:endObj.x-(i+1),
                        y:endObj.y
                    })
                }
            }
        }
    }
    return arr;
}
/**
 * 两个折点 上 右 下
 * ↑ → → ↓
 * ↑     ↓
 */
function breakLineUpRightDown(){

}
/**
 * 以折线行 
 * 不在同一x 不在同一y;
 * 
 */
function breakLineOne(twoDimension,startObj,endObj){
    var newSystem = resetSystemFunc(startObj,endObj);
    
}
/**
 * 获取两个 折点
 */
function getTowBreakFunc(startObj,endObj){
    return [{
        x:startObj.x,
        y:endObj.y
    },{
        x:endObj.x,
        y:startObj.y
    }]
}
/**
 * 
 * @param {默认起始点} startObj 
 * @param {默认终止点} endObj 
 * 重定义起始点 x做方向 x小的为起始点；y做方向 y小的做起始点;
 * 不在同一x y；取x 方向 x小的为起点；
 */
function resetSystemFunc(startObj,endObj,system='x'){
    // x轴
    var r = {
        startObj:'',
        endObj:''
    }
    if(system=='x'){
        if(startObj.x<endObj.x){
            r.startObj=startObj
            r.endObj=endObj
        }else{
            r.startObj=endObj
            r.endObj=startObj
        }
    }else if(system=='y'){
        if(startObj.y<endObj.y){
            r.startObj=startObj
            r.endObj=endObj
        }else{
            r.startObj=endObj
            r.endObj=startObj
        }
    }else{
        if(startObj.x<endObj.x){
            r.startObj=startObj
            r.endObj=endObj
        }else{
            r.startObj=endObj
            r.endObj=startObj
        }
    }
    return r;
}
/**
 * 验证坐标  start = 0不存在 start=1 存在
 * 
 */
/**
 * 
 * @param {x坐标} x 
 * @param {y坐标} y 
 * @param {当前坐标状态} start 
 */
function verifyTowStart(twoDimension,x,y,start=0){
    return twoDimension[x][y].start;
}
/***
 * 返回true 路线成功 
 */
function verifyLuxianIsOk(hint,twoDimension,startObj,one,tow,endObj){
    if(hint=='上'||hint=='下'){
        console.log(hint,startObj,one,tow,endObj)
    }
    var zbs=[]
    var isTrue=0
    line(twoDimension,startObj,one).forEach(element => {
        zbs.push(element);
    });
    line(twoDimension,one,tow).forEach(element => {
        zbs.push(element);
    });
    line(twoDimension,tow,endObj).forEach(element => {
        zbs.push(element);
    });

    zbs.push(one,tow); 
    zbs.forEach(e => {
        if(verifyTowStart(twoDimension,e.x,e.y)){
            isTrue = 1;
        }
    });
    return isTrue?false:true;
}
/**
 * 连个折点
 */
function towBrack(twoDimension,startObj,endObj){
    var getTowBreaks = getTowBreakFunc(startObj,endObj);
    var isTrue = 1;
    var breaks=[];
    var fangxian = ''
    // 初始点 startObj,endObj
    // 花园折点 getTowBreaks[0] getTowBreaks[1]
    var newOneBreaksObj = getTowBreaks[0];
    var newTowBreaksObj = getTowBreaks[1];
    // 去第一个折点 去第一个折点 x y--/y++;取地二个折点x 地一个折点y;
    // 上
    if(isTrue){
        var one_y = newOneBreaksObj.y;
        console.log('newOneBreaksObj.y',newOneBreaksObj)
        for(let i=0;i<newOneBreaksObj.y;i++){
            one_y--
            if(one_y<0) break;
            var one = {
                x:newOneBreaksObj.x,
                y:one_y
            };
            var tow = {
                x:newTowBreaksObj.x,
                y:one.y
            }
            var result=''
            if(startObj.x == one.x){
                result = verifyLuxianIsOk('上',twoDimension,startObj,one,tow,endObj)
            }else{
                result = verifyLuxianIsOk('上',twoDimension,startObj,tow,one,endObj)
            }
            if(result){
                isTrue=0
                fangxian = '上'
                breaks.push(one,tow)
                break
            }
        }
    }
    // 下
    if(isTrue){
        var one_y = newOneBreaksObj.y;
        console.log('newOneBreaksObj.y',twoDimensionLength,newOneBreaksObj)
        for(let i=0;i<twoDimensionLength-newOneBreaksObj.y;i++){
            one_y++
            if(one_y>=twoDimensionLength) break;
            var one = {
                x:newOneBreaksObj.x,
                y:one_y
            };
            var tow = {
                x:newTowBreaksObj.x,
                y:one.y
            }
            var result = ''
            if(startObj.x == one.x){
                result = verifyLuxianIsOk('下',twoDimension,startObj,one,tow,endObj)
            }else{
                result = verifyLuxianIsOk('下',twoDimension,startObj,tow,one,endObj)
            }
            if(result){
                isTrue=0
                fangxian = '下'
                breaks.push(one,tow)
                break
            }
        }
    }
    
    // 去第一个折点 去第一个折点 x y--/y++;取地二个折点x 地一个折点y;
    // 右
    if(isTrue){
        var one_x = newOneBreaksObj.x;
        for(let i=0;i<newOneBreaksObj.x;i++){
            one_x++;
            if(one_x>=twoDimensionLength) break
            var one = {
                x:one_x,
                y:newOneBreaksObj.y
            };
            var tow = {
                x:one.x,
                y:newTowBreaksObj.y
            }
            var result = ''
            if(startObj.y == one.y){
                result = verifyLuxianIsOk('右',twoDimension,startObj,one,tow,endObj)
            }else{
                result = verifyLuxianIsOk('右',twoDimension,startObj,tow,one,endObj)
            }
            if(result){
                isTrue=0
                fangxian = '右'
                breaks.push(one,tow)
                break
            }
            console.log('右--循环次数==',i)
        }
    }
    // 左
    if(isTrue){
        var one_x = newOneBreaksObj.x;
        for(let i=0;i<newOneBreaksObj.x;i++){
            one_x--;
            if(one_x<0) break;
            var one = {
                x:one_x,
                y:newOneBreaksObj.y
            };
            var tow = {
                x:one.x,
                y:newTowBreaksObj.y
            }
            var result = ''
            if(startObj.y == one.y){
                result = verifyLuxianIsOk('左',twoDimension,startObj,one,tow,endObj)
            }else{
                result = verifyLuxianIsOk('左',twoDimension,startObj,tow,one,endObj)
            }
            if(result){
                isTrue=0
                fangxian = '左'
                breaks.push(one,tow)
                break
            }
        }
    }
    // 第一次尝试一个 折点 绘制 
    return {
        breaks:breaks,
        fangxian:fangxian,
        isTrue:isTrue
    }
}
/**
 * 一个折点
 */
function oneBrack(twoDimension,startObj,endObj){
    // 两段 数据
    var getTowBreaks = getTowBreakFunc(startObj,endObj);
    // 两次获取数据;
    var isTrue = 0;
    // 第一次尝试一个 折点 绘制 
    var zbs = []
    var breaks=[]
    const one = getTowBreaks[0];
    const tow = getTowBreaks[1];
    line(twoDimension,startObj,one).forEach(element => {
        zbs.push(element);
    });
    line(twoDimension,one,endObj).forEach(element => {
        zbs.push(element);
    });
    zbs.push(one); 
    zbs.forEach(e => {
        if(verifyTowStart(twoDimension,e.x,e.y)){
            isTrue = 1;
        }
    });
    if(!isTrue){
        breaks=[one]
    }else{
        var isTrue = 0;
        // 第二次尝试一个 折点 绘制 
        var zbs = []
        var breaks=[];
        line(twoDimension,startObj,tow).forEach(element => {
            zbs.push(element);
        });
        line(twoDimension,tow,endObj).forEach(element => {
            zbs.push(element);
        });

        zbs.push(tow);
        zbs.forEach(e => {
            if(verifyTowStart(twoDimension,e.x,e.y)){
                isTrue = 1;
            }
        });
        if(!isTrue){
            breaks=[tow]
        }
    }
    return {
        breaks:breaks,
        isTrue:isTrue
    }
}
/**
 * 
 * @param {初始数据} twoDimension 
 * @param {开始点坐标} startObj 
 * @param {结束点坐标} endObj ;
 * twoDimensionLength总长度
 */
var twoDimensionLength =8;
function setLenght(length){
    twoDimensionLength = length
}
function getstart(twoDimension,startObj,endObj){
    var isTrue = 0;  //0 可以绘制  1存在 不可以绘制
    // 判断是否是直线
    if(startObj.x==endObj.x||startObj.y==endObj.y){
        var zbs = line(twoDimension,startObj,endObj);
        zbs.forEach(e => {
            if(verifyTowStart(twoDimension,e.x,e.y)){
                isTrue = 1;
            }
        });
        if(isTrue){
            var oneBrackobj = oneBrack(twoDimension,startObj,endObj)
            if(oneBrackobj.isTrue){
                var oneBrackobj = towBrack(twoDimension,startObj,endObj)
            }
        }
    }else{
        var oneBrackobj = oneBrack(twoDimension,startObj,endObj)
        if(oneBrackobj.isTrue){
            var oneBrackobj = towBrack(twoDimension,startObj,endObj)
        }
    }
    

    isTrue = oneBrackobj?oneBrackobj.isTrue:isTrue;
    return {
        startObj:startObj,
        endObj:endObj,
        breaks:oneBrackobj?oneBrackobj.breaks:[],
        fangxian:oneBrackobj?oneBrackobj.fangxian:'',
        isTrue:isTrue?false:true
    }
}

export default{
    line:line,
    getstart:getstart,
    setLenght:setLenght,
    verifyTowStart:verifyTowStart
}