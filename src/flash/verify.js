
function line(twoDimension,startObj,endObj){
    var arrs=[]
    twoDimension.forEach(item => {
        item.forEach(element => {
            // 横线
            if(startObj.y == endObj.y){
                if(startObj.x<endObj.x){
                    startObj.x++;
                    if(startObj.x<endObj.x){
                        arrs.push({
                            x: startObj.x,
                            y: startObj.y
                        })
                    }
                }else{
                    endObj.x++;
                    if(endObj.x<startObj.x){
                        arrs.push({
                            x: endObj.x,
                            y: endObj.y
                        })
                    }
                }
            }
        });
    });
    return arrs;
}
function side(){
    
}
export default{
    line:line
}