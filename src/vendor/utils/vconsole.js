var isShow=false;
var count = 0
var vConsole;
document.addEventListener('touchstart', touchStartHandler);
function touchStartHandler(event){
    console.log(event.targetTouches)
	if(isShow){
        if (event.targetTouches.length >= 3&&vConsole) {
            isShow=false;
            count=0;
            sessionStorage.console=0;
            vConsole.destroy();
            vConsole=null;
            event=null;
        }
        return false;
    }
    if (event.targetTouches.length >= 3) {
        if (count == 0) {
            setTimeout(() => count = 0, 1000)
        }
        if (++count >= 3) {
            count = 0
            alert('vConsole');
            init();
        }
    }
}
function init(){
    sessionStorage.console=1;
	document.removeEventListener('touchstart', touchStartHandler);
	isShow=true;
	require.ensure([], function(require) {
      let VConsole=require('vconsole');
      vConsole = new VConsole();
      setTimeout(function(){
        document.addEventListener('touchstart', touchStartHandler);
      },5000);

   });
}
if(sessionStorage.console==1){
    init();
}
