module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"p1_atlas_", frames: [[158,386,156,154],[295,118,156,154],[0,386,156,154],[0,542,610,36],[0,0,486,116],[0,237,184,147],[0,118,293,117],[316,274,159,137],[453,118,198,91]]}
];


// symbols:



(lib.a1 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.a2 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.a3 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.happy_209_1578291505094_29 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.happy_336_1578291505095_31 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.happy_338_1578291505095_30 = function() {
	this.initialize(img.happy_338_1578291505095_30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,727,1116);


(lib.happy_381_1578291505097_35 = function() {
	this.initialize(img.happy_381_1578291505097_35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.happy_474_1578291505093_27 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.happy_635_1578291505092_22 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.happy_646_1578291505093_26 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.happy_721_1578291505094_28 = function() {
	this.spriteSheet = ss["p1_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.happy_441_1578291505091_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.happy_646_1578291505093_26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_441_1578291505091_18, new cjs.Rectangle(0,0,159,137), null);


(lib.happy_363_1578291505092_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.happy_721_1578291505094_28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_363_1578291505092_20, new cjs.Rectangle(0,0,198,91), null);


(lib.happy_271_1578291505092_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.happy_474_1578291505093_27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_271_1578291505092_19, new cjs.Rectangle(0,0,184,147), null);


(lib.happy_807_1578291505088_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.happy_338_1578291505095_30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_807_1578291505088_9, new cjs.Rectangle(0,0,727,1116), null);


(lib.happy_794_1578291505087_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.happy_635_1578291505092_22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_794_1578291505087_6, new cjs.Rectangle(0,0,293,117), null);


(lib.happy_646_1578291505088_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.happy_336_1578291505095_31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_646_1578291505088_10, new cjs.Rectangle(0,0,486,116), null);


(lib.happy_608_1578291505089_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_608_1578291505089_11, new cjs.Rectangle(0,0,156,154), null);


(lib.happy_504_1578291505088_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.happy_209_1578291505094_29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_504_1578291505088_8, new cjs.Rectangle(0,0,610,36), null);


(lib.happy_394_1578291505089_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.happy_381_1578291505097_35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_394_1578291505089_14, new cjs.Rectangle(0,0,750,1334), null);


(lib.happy_370_1578291505089_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_370_1578291505089_13, new cjs.Rectangle(0,0,156,154), null);


(lib.happy_026_1578291505089_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.happy_026_1578291505089_12, new cjs.Rectangle(0,0,156,154), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A57KAIAAz/MAz3AAAIAAT/g");
	this.shape.setTransform(166,64);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,332.1,128.1), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvnPoIAA/PIfPAAIAAfPg");
	this.shape.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,200,200), null);


// stage content:
(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.b1 = new lib.元件1();
	this.b1.parent = this;
	this.b1.setTransform(547.1,881.4,1,1,0,0,0,100,100);
	this.b1.alpha = 0.012;

	this.b0 = new lib.元件1();
	this.b0.parent = this;
	this.b0.setTransform(547.1,673,1,1,0,0,0,100,100);
	this.b0.alpha = 0.012;

	this.b2 = new lib.元件1();
	this.b2.parent = this;
	this.b2.setTransform(547.1,464.7,1,1,0,0,0,100,100);
	this.b2.alpha = 0.012;

	this.a2 = new lib.元件1();
	this.a2.parent = this;
	this.a2.setTransform(218,881.4,1,1,0,0,0,100,100);
	this.a2.alpha = 0.012;

	this.a1 = new lib.元件1();
	this.a1.parent = this;
	this.a1.setTransform(218,673,1,1,0,0,0,100,100);
	this.a1.alpha = 0.012;

	this.a0 = new lib.元件1();
	this.a0.parent = this;
	this.a0.setTransform(218,464.7,1,1,0,0,0,100,100);
	this.a0.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.a0},{t:this.a1},{t:this.a2},{t:this.b2},{t:this.b0},{t:this.b1}]}).wait(1));

	// 图层 4
	this.btn = new lib.元件2();
	this.btn.parent = this;
	this.btn.setTransform(374.1,1074.3,1,1,0,0,0,166,64);
	this.btn.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// btn
	this.instance = new lib.happy_794_1578291505087_6();
	this.instance.parent = this;
	this.instance.setTransform(375.5,1073.5,1,1,0,0,0,146.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 5
	this.instance_1 = new lib.happy_370_1578291505089_13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(550.5,886,1,1,0,0,0,80.5,80);

	this.instance_2 = new lib.happy_026_1578291505089_12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(550.5,677,1,1,0,0,0,80.5,80);

	this.instance_3 = new lib.happy_608_1578291505089_11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(550.5,468,1,1,0,0,0,80.5,80);

	this.instance_4 = new lib.happy_441_1578291505091_18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(220.5,890.5,1,1,0,0,0,79.5,68.5);

	this.instance_5 = new lib.happy_271_1578291505092_19();
	this.instance_5.parent = this;
	this.instance_5.setTransform(215,676.5,1,1,0,0,0,92,73.5);

	this.instance_6 = new lib.happy_363_1578291505092_20();
	this.instance_6.parent = this;
	this.instance_6.setTransform(217,462.5,1,1,0,0,0,99,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// 组 41
	this.instance_7 = new lib.happy_646_1578291505088_10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(376,204,1,1,0,0,0,243,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// 图层 8
	this.instance_8 = new lib.happy_504_1578291505088_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(382,300,1,1,0,0,0,305,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// 图层 9
	this.instance_9 = new lib.happy_807_1578291505088_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(378.5,615,1,1,0,0,0,363.5,558);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// 图层 2
	this.instance_10 = new lib.happy_394_1578291505089_14();
	this.instance_10.parent = this;
	this.instance_10.setTransform(375,667,1,1,0,0,0,375,667);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,667,750,1334);
// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/p1/happy_338_1578291505095_30.png?1578980855249", id:"happy_338_1578291505095_30"},
		{src:"images/p1/happy_381_1578291505097_35.jpg?1578980855249", id:"happy_381_1578291505097_35"},
		{src:"images/p1/p1_atlas_.png?1578980855234", id:"p1_atlas_"}
	],
	preloads: []
};




});