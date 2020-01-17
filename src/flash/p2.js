var appData=require("../common/appData");
var Scroller=require("vendor/plugins/scroller/Scroller");
require('vendor/utils/requestanimationframe.js')
var _self;
var libs=module.exports;
var scrollerObj;
var shapeObj=[];
var shapeArr;
function construct(display){
    _self=display;
    shapeObj['a']=[];
    shapeObj['b']=[];
    for(var i=0;i<4;i++){
        _self['a'+i].ID=i;
        _self['a'+i].type="a";
        _self['a'+i].addEventListener("mousedown",mouseDownHandler);
        _self['a'+i].addEventListener("pressmove",mouseMoveHandler);
        _self['a'+i].addEventListener("pressup",mouseUpHandler);
        _self['a'+i].contactMC=null;


        _self['b'+i].ID=i;
        _self['b'+i].type="b";
        _self['b'+i].contactMC=null;
        _self['b'+i].addEventListener("mousedown",mouseDownHandler);
        _self['b'+i].addEventListener("pressmove",mouseMoveHandler);
        _self['b'+i].addEventListener("pressup",mouseUpHandler);

        shapeObj['a'][i]=new createjs.Shape();
        shapeObj['b'][i]=new createjs.Shape();
        _self.addChild( shapeObj['a'][i], shapeObj['b'][i]);
    }

    _self.btn.addEventListener('click',btnClickHandler)

}
var startX;
var startY;
var drawType;
function mouseDownHandler(e){
    var target=e.currentTarget;
    startX=target.x;
    startY=target.y;
    if(target.type=="a"){
        startX+=100
    }else{
        startX-=100
    }
    drawType=target.type;
}
function mouseMoveHandler(e){
    var target=e.currentTarget;
    var x=e.localX;
    var y=e.localY
    var pt=target.localToLocal(x,y,_self)
    if( target.contactMC){
        var type=target.contactMC.type;
        var ID=target.contactMC.ID;
        console.log(type,ID)
        shapeObj[type][ID].graphics.clear();
        target.contactMC.contactMC=null;
        target.contactMC=null;
    }


    shapeObj[target.type][target.ID].graphics.clear();
    shapeObj[target.type][target.ID].graphics.beginFill("#00B9ED");
    shapeObj[target.type][target.ID].graphics.drawCircle(startX,startY,8);
    shapeObj[target.type][target.ID].graphics.drawCircle(pt.x,pt.y,8);

    shapeObj[target.type][target.ID].graphics.setStrokeStyle(4);
    shapeObj[target.type][target.ID].graphics.beginStroke("#00B9ED");
    shapeObj[target.type][target.ID].graphics.moveTo(startX,startY);
    shapeObj[target.type][target.ID].graphics.lineTo(pt.x,pt.y);


}
function mouseUpHandler(e){
    var target=e.currentTarget;
    var x=e.localX;
    var y=e.localY
    var pt=target.localToLocal(x,y,_self)
    if(drawType=='a'){
        var type='b';
    }else{
        var type='a';
    }
    for(var i=0;i<4;i++){
        var rect=new createjs.Rectangle(_self[type+i].x-100,_self[type+i].y-100,200,200);
        if(rect.contains(pt.x,pt.y)){

            if(_self[type+i].contactMC){
                var tempType=_self[type+i].contactMC.type;
                var tempID=_self[type+i].contactMC.ID;

                shapeObj[tempType][tempID].graphics.clear();

                var tempType=_self[type+i].type;
                var tempID=_self[type+i].ID;

                shapeObj[tempType][tempID].graphics.clear();

                _self[tempType+tempID].contactMC.contactMC=null;
                _self[tempType+tempID].contactMC=null;
            }

            shapeObj[target.type][target.ID].graphics.clear();
            shapeObj[target.type][target.ID].graphics.beginFill("#00B9ED");
            shapeObj[target.type][target.ID].graphics.drawCircle(startX,startY,8);
            if(drawType=="a"){
                shapeObj[target.type][target.ID].graphics.drawCircle(_self[type+i].x-100,_self[type+i].y,8);
            }else{
                shapeObj[target.type][target.ID].graphics.drawCircle(_self[type+i].x+100,_self[type+i].y,8);
            }

            shapeObj[target.type][target.ID].graphics.setStrokeStyle(4);
            shapeObj[target.type][target.ID].graphics.beginStroke("#00B9ED");
            shapeObj[target.type][target.ID].graphics.moveTo(startX,startY);
            if(drawType=="a"){
                shapeObj[target.type][target.ID].graphics.lineTo(_self[type+i].x-100,_self[type+i].y);
            }else{
                shapeObj[target.type][target.ID].graphics.lineTo(_self[type+i].x+100,_self[type+i].y);
            }
            _self[type+i].contactMC=target
            target.contactMC=_self[type+i]
            return;
        }
    }
    if(target.contactMC){
        target.contactMC.contactMC=null;
        target.contactMC=null;
    }
    shapeObj[target.type][target.ID].graphics.clear();




}
function btnClickHandler(){
    var b=true;
    for(var i=0;i<4;i++){
        if(!_self['a'+i].contactMC){
            vueApp.alert('请完成连线！')
            return false;
        }
        if(_self['a'+i].contactMC!=_self['b'+i]){
            var b=false;
        }
    }
    if(!b){
        vueApp.globalDispatcher.$emit("fail");
    }else{
        vueApp.globalDispatcher.$emit("win");
    }
    console.log(b)
}

module.exports.construct=construct;
