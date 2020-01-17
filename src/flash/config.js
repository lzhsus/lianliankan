import canvasAutoRotation from "vendor/createjs/canvas_auto_rotation";
import flexpos from "vendor/createjs/flexpos";
const res = require('vendor/createjs/createjs-res');
import Loading from "vendor/ui/loading";
var flashObj={
  loading: {name: 'loading'},
  bottomLayer: {name: "bg"},
  topLayer: {name: "nav"},
  middleLayer: {
      p1: {name: "p1"},
      p2: {name: "p2"},
  },
  asset: {

  },
  firstPage: 'p1',
  firstload: ['p1','p2'],
  preload: [],
  preloadNum: 1,
};
var flash;
function resize(){
    let stageRect = canvasAutoRotation.canvasResize(
        $("#canvas")[0],
        $(window).width(),
        $(window).height()
    );
    flexpos.displayResetPos(stageRect.width, stageRect.height);
}
function gotoPageHandler(e){
  Loading.show();
  flash.goto(e.page).done(()=>{
      setTimeout(()=>{
          Loading.hide()
      },50);
    vueApp.globalDispatcher.$emit("flashLoadComplete",{pageShow:e.pageShow});


  });
}
export default function(firstPage){
  flashObj.firstPage = firstPage||'p1';
  Loading.show()
  var promise=new Promise(function(resolve,reject){
    flash = new res.Flash(document.getElementById('canvas'));
    flash.loadInit(flashObj)
    .done((lib) => {
        vueApp.globalDispatcher.$emit('startGame',{level:0})
        setTimeout(()=>{
            resolve();
            Loading.hide()
        },100);

    })
  })

  vueApp.globalDispatcher.$on("gotoPage",gotoPageHandler);
  canvasAutoRotation.setRootDisplay(flash.getRootDisplay());
  $(window).on("resize",resize);
  resize();
  return promise;
}
