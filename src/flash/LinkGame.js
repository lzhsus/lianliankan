// /***
//  * 函数等于
//  */
// var LinkGame = {};
// /** 1、这种封装个方法getter和setter方法都在该构造函数中，数据较多的时候占用的内存较大* */
// function Person(name, age, no) {
//     let parameter = arguments;
//     console.log(parameter)
//     // this._name = name;
//     // this._age = age;
//     // this._no = no;
//     // this.checkNo = function (no) {
//     //     if (!no.constructor == "string" || no.length != 4)
//     //         throw new Error("学号必须为4位");
//     // };
//     // //var _no,_age,_name; 
//     // this.setNo = function (no) {
//     //     this.checkNo(no);
//     //     this._no = no;
//     // };
//     // this.getNo = function () {
//     //     return this._no;
//     // };
//     // this.setName = function (name) {
//     //     this._name = name;
//     // };
//     // this.getName = function () {
//     //     return this._name;
//     // };
//     // this.setAge = function (age) {
//     //     this._age = age;
//     // };
//     // this.getAge = function () {
//     //     return this._age;
//     // };
//     // this.setNo(no);
//     // this.setName(name);
//     // this.setAge(age);
// }
// Person.prototype = {
//     toString: function () {
//         return "no = " + this.getNo() + " , name = " + this.getName() + " , age = " + this.getAge();
//     }
// };
// /**
//  * global {全局的}
//  */
// (function(global){  
//     function LinkGame(object) {  
//         return new LinkGame.prototype.init(object)
//     }
//     LinkGame.prototype = {
//         constructor:LinkGame,
//         name:'',
//         // 此时创建的是 init 构造函数的实例
//         init:function(object){  
//             LinkGame.name = object.name;
//             console.log('init',object)
//         },
//         create(object){
//             console.log(LinkGame.name)
//             console.log('create',object)
//         }
//     }
//     LinkGame.prototype.init.prototype = LinkGame.prototype;
//     //---1、创建了一个init的对象
//     //---2、执行css方法
//     // -->找对象本身有没有css方法，并没有
//     // -->找对象的原型：init.prototype -->jquery.prototype
//     // -->发现jquery.prototype中有一个css方法
//     global.LinkGame = LinkGame;
// })(window)
function LinkGame() { 
    var parame = arguments[0];
    this.length = parame.length||4; //长度
    this.x = parame.x||0; //默认坐标y =0
    this.y = parame.y||0; //默认坐标y =0
    this.init = ()=>{
        console.log(this.length)
    },
    this.createAxis2D =function () {  
        
    }
}
LinkGame.prototype = {
    
}

export {
    LinkGame
}