module.exports=(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:


(lib.qrimg = function() {
	this.initialize(img.qrimg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,110);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.qrimg();
	this.instance.parent = this;
	this.instance.setTransform(-59,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-55,118,110);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.qrimg();
	this.instance.parent = this;
	this.instance.setTransform(-59,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-55,118,110);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_76 = function() {
		this.stop()
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(1));

	// 图层 4
	this.instance = new lib.补间1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-91.1,93);
	this.instance._off = true;

	this.instance_1 = new lib.补间2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(236,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},67).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:false},0).to({_off:true,x:236},9).wait(1));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AgIgBQACAAAEAAQADgBACACIADADIADAA");
	this.shape.setTransform(168.2,197.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AgQADQACgBADgKQAGAAAFAAQAIAAAHAAQABAGABAHQgHACgEACQgGAAABgB");
	this.shape_1.setTransform(168.2,198);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1).p("AgaAJQACgEACgUQAMAAALAAQANAAAMAAQABANAAANQgOADgJACQgPAAACgD");
	this.shape_2.setTransform(168.6,198.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(1,1,1).p("AglAPQADgGACgfQARAAAQAAQASAAATAAQAAAUAAAUQgXADgOACQgXAAACgE");
	this.shape_3.setTransform(168.9,199);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(1,1,1).p("AgwAUQADgHADgqQAVAAAWAAQAYAAAXAAQAAAbAAAaQgeAEgTACQghAAACgF");
	this.shape_4.setTransform(169.3,199.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(1,1,1).p("Ag6AaQADgKACg0QAbAAAaAAQAeAAAdAAQAAAigBAhQgmAEgYACQgqAAACgH");
	this.shape_5.setTransform(169.7,199.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(1,1,1).p("AhFAgQADgMADg/QAfAAAgAAQAkAAAiAAQAAAogCAoQguAFgdABQgyABACgI");
	this.shape_6.setTransform(170.1,200.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#666666").ss(1,1,1).p("AhQAmQAEgPAChIQAlAAAlAAQApAAAoAAQgBAugCAvQg2AFghABQg9ABADgJ");
	this.shape_7.setTransform(170.5,200.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#666666").ss(1,1,1).p("AhbArQAEgQAChTQArAAAqAAQAuAAAuAAQgBA1gCA1Qg/AFgmACQhFABADgL");
	this.shape_8.setTransform(170.9,201.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(1,1,1).p("AhmAxQAFgTAChdQAvAAAwAAQAzAAA0AAQgCA8gCA7QhHAGgrACQhOAAADgM");
	this.shape_9.setTransform(171.3,201.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#666666").ss(1,1,1).p("AhwA3QAFgVABhoQA1AAA1AAQA5AAA4AAQgBBDgDBCQhOAGgwACQhYAAAEgN");
	this.shape_10.setTransform(171.7,202.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#666666").ss(1,1,1).p("Ah8A9QAGgXABhzQA6AAA7AAQA+AAA+AAQgCBKgDBJQhWAGg2ACQhgABAEgP");
	this.shape_11.setTransform(172.1,202.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#666666").ss(1,1,1).p("AiGBCQAGgZABh9QA/AABAAAQBEAABDAAQgCBQgDBQQhfAHg6ABQhpABAEgQ");
	this.shape_12.setTransform(172.4,203.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#666666").ss(1,1,1).p("AiRBIQAGgbACiIQBEAABEAAQBKAABJAAQgDBXgDBWQhnAIhAABQhxABAEgR");
	this.shape_13.setTransform(172.9,203.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#666666").ss(1,1,1).p("AicBOQAGgdACiSQBJAABKAAQBPAABPAAQgEBdgEBdQhuAIhFABQh6ABAFgT");
	this.shape_14.setTransform(173.3,204.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#666666").ss(1,1,1).p("AinBUQAHggABicQBPAABPAAQBUAABVAAQgEBkgEBjQh3AIhJACQiEABAFgU");
	this.shape_15.setTransform(173.6,204.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#666666").ss(1,1,1).p("AiyBaQAHgiABinQBVAABUAAQBZAABbAAQgEBrgFBqQh/AIhOACQiNABAFgW");
	this.shape_16.setTransform(174,205.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#666666").ss(1,1,1).p("Ai8BgQAHgkABiyQBaAABZAAQBfAABgAAQgFBygEBwQiHAKhUABQiVABAFgX");
	this.shape_17.setTransform(174.4,205.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#666666").ss(1,1,1).p("AjIBlQAIgmABi8QBfAABeAAQBlAABlAAQgFB4gFB4QiOAJhZABQieACAFgY");
	this.shape_18.setTransform(174.8,206.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#666666").ss(1,1,1).p("AjSBrQAIgoABjHQBkAABjAAQBrAABqAAQgFB/gFB+QiXAKheABQinACAGga");
	this.shape_19.setTransform(175.2,206.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#666666").ss(1,1,1).p("AjdBxQAIgrABjQQBpAABpAAQBwAABwAAQgFCFgGCEQifALhiABQixACAGgb");
	this.shape_20.setTransform(175.6,207);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#666666").ss(1,1,1).p("AjoB2QAJgsABjbQBuAABuAAQB2AAB1AAQgFCMgHCLQimALhoABQi5ABAGgc");
	this.shape_21.setTransform(176,207.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#666666").ss(1,1,1).p("AjzB8QAJguABjmQBzAABzAAQB7AAB8AAQgGCTgHCRQivAMhsABQjCACAGge");
	this.shape_22.setTransform(176.4,208);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#666666").ss(1,1,1).p("Aj9CCQAJgwABjxQB4AAB5AAQCAAACBAAQgHCagGCYQi3AMhyABQjLACAFggg");
	this.shape_23.setTransform(176.7,208.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#666666").ss(1,1,1).p("AkICIQAJgzABj7QB+AAB9AAQCGAACHAAQgHChgHCeQi/AMh3ACQjUABAGggg");
	this.shape_24.setTransform(177.1,208.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#666666").ss(1,1,1).p("AkTCNQAKg1AAkFQCDAACDAAQCMAACLAAQgHCngHCmQjHAMh8ABQjcACAGgig");
	this.shape_25.setTransform(177.5,209.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#666666").ss(1,1,1).p("AEQCmQo5AkALg3QALg3AAkPIIyAAg");
	this.shape_26.setTransform(177.9,209.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},50).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(1));

	// 图层 1
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#666666").ss(1,1,1).p("Ap2nYQGQAKFlCdQFmCfEVEgQBPBTBFBZQjUBOjKApQnjBilNiLQkjh5imkkQh6jWgKjgQCKgQCNADg");
	this.shape_27.setTransform(40.6,-37.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#666666").ss(1,1,1).p("Auem+QCNgYCZgFQGGAAFiCYQFjCYErEZQBqBRA3BlQjZBajHAsQngBslRh+Qknhri4krQiLjdgCjjg");
	this.shape_28.setTransform(40.2,-36.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#666666").ss(1,1,1).p("AuwmwQCSggCjgOQF9gJFgCSQFgCSFAESQCFBPAqBwQjeBnjEAvQneB1lUhwQkshejIkxQiejlAFjlg");
	this.shape_29.setTransform(39.7,-36.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#666666").ss(1,1,1).p("AvBmkQCVgnCvgWQFzgTFdCMQFdCMFWEKQCgBNAdB9QjkByjBAzQnbB+lYhiQkxhRjZk3QiwjsAOjpg");
	this.shape_30.setTransform(39.2,-36.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#666666").ss(1,1,1).p("AvSmXQCZgvC6geQFqgcFaCFQFaCGFsEEQC6BKARCJQjrB+i9A3QnZCHlbhVQk2hEjqk8QjBj1AVjrg");
	this.shape_31.setTransform(38.7,-35.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#666666").ss(1,1,1).p("AvjmJQCcg4DFgnQFhglFYCAQFXCAGBD9QDWBHADCUQjwCLi7A6QnVCRlghIQk6g3j6lCQjUj8Adjtg");
	this.shape_32.setTransform(38.2,-35.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#666666").ss(1,1,1).p("Av1l9QChg/DQgvQFYgvFUB6QFUB6GYD1QDwBGgKCgQj2CWi3A+QnTCaljg6Qk/gqkLlHQjmkFAkjwg");
	this.shape_33.setTransform(37.7,-35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#666666").ss(1,1,1).p("AwGlwQCkhHDcg4QFOg4FRB0QFSB0GtDuQELBEgXCrQj8Cji0BBQnQCjlngsQlEgdkclNQj3kMAsjzg");
	this.shape_34.setTransform(37.3,-34.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#666666").ss(1,1,1).p("AwYlkQCohQDnhAQFFhBFOBuQFPBuHCDmQEmBDgjC2QkCCviyBFQnMCslrgeQlJgQktlTQkJkUA0j1g");
	this.shape_35.setTransform(36.9,-34.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#666666").ss(1,1,1).p("AwqlZQCshXDxhIQE8hLFNBoQFKBoHZDfQFBBAgxDDQkIC7iuBIQnKC2lugRQlOgDk9lZQkckcA8j4g");
	this.shape_36.setTransform(36.5,-33.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#666666").ss(1,1,1).p("Aw9lOQCwhfD9hRQEzhTFJBhQFIBiHuDYQFcA+g+DOQkNDIirBLQnIC/lxgDQlTALlOlfQktkkBCj7g");
	this.shape_37.setTransform(36.1,-33.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#666666").ss(1,1,1).p("AxPlEQC0hnEIhZQEphdFHBbQFFBcIEDQQF2A8hKDbQkTDTipBPQnEDJl2AKQlXAYlfllQk/ksBKj9g");
	this.shape_38.setTransform(35.7,-32.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#666666").ss(1,1,1).p("Axhk5QC3hvEThiQEghmFEBVQFCBWIaDJQGRA6hYDmQkYDfimBTQnBDSl5AYQldAklvlqQlRkzBSkAg");
	this.shape_39.setTransform(35.3,-31.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#666666").ss(1,1,1).p("AxzkwQC7h3EehqQEXhvFBBPQE/BQIvDCQGsA3hkDyQkfDsiiBWQm/Dbl9AmQlhAxmAlwQljk7BakDg");
	this.shape_40.setTransform(34.9,-31.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#666666").ss(1,1,1).p("AyGklQC/iAEqhyQENh5E+BKQE8BJJFC7QHHA1hxD/QklD3ifBaQm8DkmBAzQlmA/mRl2Ql0lDBhkFg");
	this.shape_41.setTransform(34.6,-30.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#666666").ss(1,1,1).p("AyZkbQDEiHE0h7QEEiCE7BDQE5BEJbCzQHiAzh/ELQkqEDicBdQm5DumEBAQlrBMmil8QmHlLBpkHg");
	this.shape_42.setTransform(34.2,-29.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#666666").ss(1,1,1).p("AyrkRQDHiPE/iDQD7iME4A+QE3A9JwCsQH9AxiMEXQkwEPiZBhQm2D3mIBOQlwBZmymCQmZlTBxkKg");
	this.shape_43.setTransform(33.9,-29.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#666666").ss(1,1,1).p("Ay+kHQDLiXFLiLQDxiVE1A3QE0A4KGCkQIXAviYEjQk2EbiWBkQmzEAmMBcQl0BmnEmIQmqlbB4kMg");
	this.shape_44.setTransform(33.5,-28.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#666666").ss(1,1,1).p("AzQj9QDPifFViTQDoifEzAyQExAxKcCdQIyAtimEvQk7EniTBoQmxEJmPBpQl5B0nUmOQm9ljCAkPg");
	this.shape_45.setTransform(33.1,-27.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#666666").ss(1,1,1).p("AzjjzQDTinFhicQDeinEwArQEuAsKyCVQJNArizE6QlBE0iQBrQmuETmTB3Ql+CAnlmTQnOlrCHkSg");
	this.shape_46.setTransform(32.8,-27.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#666666").ss(1,1,1).p("Az1joQDWivFsikQDWixEsAlQErAlLICPQJnApi/FGQlHE/iNBvQmrEcmXCFQmDCNn1mZQnglzCPkUg");
	this.shape_47.setTransform(32.4,-26.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#666666").ss(1,1,1).p("A0IjeQDai3F3itQDMi6EqAfQEoAgLeCHQKCAnjMFRQlOFMiJByQmoEmmbCSQmICaoGmfQnyl6CXkXg");
	this.shape_48.setTransform(32.1,-25.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#666666").ss(1,1,1).p("A0bjTQDfi/GCi1QDDjEEnAZQElAaLzB/QKdAljZFeQlTFXiHB2QmlEvmeCgQmNCnoXmkQoEmDCekZg");
	this.shape_49.setTransform(31.7,-25.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#666666").ss(1,1,1).p("A0tjIQDijHGNi+QC6jNEkATQEiAUMJB4QK4AjjmFpQlZFkiEB5QmiE4miCuQmRC0oomqQoWmLCmkbg");
	this.shape_50.setTransform(31.4,-24.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#666666").ss(1,1,1).p("A1Ai+QDljPGZjGQCwjWEhANQEgAOMfBwQLSAhjzF1QlfFwiAB9QmgFCmmC7QmVDBo5mwQoomSCukfg");
	this.shape_51.setTransform(31.1,-24.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#666666").ss(1,1,1).p("A1SizQDpjXGkjOQCnjgEeAHQEdAIM0BpQLtAfkAGBQlkF8h+CAQmcFLmqDIQmaDPpKm2Qo6maC2khg");
	this.shape_52.setTransform(30.7,-23.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#666666").ss(1,1,1).p("A1lioQDtjfGvjWQCejpEbABQEaABNKBiQMIAdkNGNQlqGIh6CEQmaFUmuDWQmfDcpam8QpMmiC9kkg");
	this.shape_53.setTransform(30.3,-23);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#666666").ss(1,1,1).p("A14idQDxjnG6jfQCUjyEZgFQEYgFNfBaQMjAbkaGZQlxGUh3CIQmXFdmyDkQmjDpprnCQpemqDFkmg");
	this.shape_54.setTransform(30,-22.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#666666").ss(1,1,1).p("A2LiSQD1juHFjoQCLj7EWgLQEVgLN1BTQM9AZknGkQl2Ggh0CMQmUFmm1DxQmpD2p7nHQpwmyDMkpg");
	this.shape_55.setTransform(29.7,-21.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#666666").ss(1,1,1).p("A2diGQD5j3HQjvQCBkFETgRQESgROLBMQNYAWk0GxQl8GshxCPQmRFwm5D+QmtEDqNnNQqBm6DUkrg");
	this.shape_56.setTransform(29.3,-21.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#666666").ss(1,1,1).p("A2wh6QD9j+Hbj5QB4kOEQgXQEQgXOgBFQNzAUlBG8QmBG5hvCSQmOF5m9ENQmyEQqdnTQqTnCDbkug");
	this.shape_57.setTransform(29,-20.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#666666").ss(1,1,1).p("A3DhuQEBkGHmkBQBvkXEOgdQEMgdO2A9QOOASlOHIQmHHFhrCWQmMGCnBEaQm3EdqtnZQqmnJDjkxg");
	this.shape_58.setTransform(28.6,-20.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#666666").ss(1,1,1).p("A3VhgQEEkPHykJQBlkhELgjQEJgjPMA2QOpAQlbHUQmNHRhoCZQmJGMnEEnQm8Erq/nfQq3nRDrkzg");
	this.shape_59.setTransform(28.3,-20.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#666666").ss(1,1,1).p("A3ohTQEIkXH9kRQBdkqEHgpQEHgpPhAuQPDAOlnHgQmTHdhlCcQmGGWnIE1QnBE3rPnlQrJnYDyk2g");
	this.shape_60.setTransform(27.9,-19.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#666666").ss(1,1,1).p("A37hGQENkeIIkaQBTkzEEgvQEEgvP3AmQPeAMl0HsQmZHqhiCfQmDGfnMFDQnFFErhnqQranhD5k5g");
	this.shape_61.setTransform(27.6,-19.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#666666").ss(1,1,1).p("A4Ng3QEQknITkiQBKk8EBg1QEBg1QNAfQP5AKmCH3QmeH3hfCiQmAGonQFQQnKFSrxnwQrtnpECk7g");
	this.shape_62.setTransform(27.2,-19.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#666666").ss(1,1,1).p("A4ggoQEUkvIekqQBAlGD/g7QD+g8QiAZQQUAHmOIEQmlIChcCmQl9GxnTFeQnPFfsCn2Qr+nxEJk9g");
	this.shape_63.setTransform(26.9,-19.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#666666").ss(1,1,1).p("A4zgZQEYk3IpkyQA3lQD8hBQD7hBQ4ARQQvAFmbIQQmrIOhYCqQl7G6nXFsQnUFrsSn8QsRn4ERlAg");
	this.shape_64.setTransform(26.6,-18.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#666666").ss(1,1,1).p("A5FgJQEck+I0k8QAulYD5hHQD4hIROAKQRJADmoIbQmwIbhWCtQl4HEnaF5QnZF5sjoCQsjoAEZlDg");
	this.shape_65.setTransform(26.2,-18.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#666666").ss(1,1,1).p("AnfwxQD2hORkACQRkACm2InQm1ImhTCxQl1HOneGGQndGGs1oIQs0oHEglHQEflGJAlDQAlliD1hNg");
	this.shape_66.setTransform(25.8,-18.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#666666").ss(1,1,1).p("A5EgKQEbk+I0k7QAulYD5hGQD5hIRMAKQRJAEmoIaQmwIahWCtQl4HEnaF4QnYF4sjoBQshoAEYlDg");
	this.shape_67.setTransform(26.2,-18.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#666666").ss(1,1,1).p("A4xgaQEYk2IokyQA4lOD8hBQD8hAQ1ARQQsAGmaIOQmqINhZCqQl7G5nWFqQnTFqsRn7QsPn3EQlAg");
	this.shape_68.setTransform(26.6,-19);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#666666").ss(1,1,1).p("A4dgqQETkuIckpQBClED/g6QD/g7QfAaQQQAImNIBQmkIBhcClQl+GwnSFbQnOFdr/n1Qr8nvEIk9g");
	this.shape_69.setTransform(27,-19.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#666666").ss(1,1,1).p("A4Jg7QEPkkIQkhQBMk6ECg0QECg0QIAhQPzAKl/H2QmdHzhfCiQmBGmnPFNQnJFPrtnvQrpnnEAk7g");
	this.shape_70.setTransform(27.3,-19.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#666666").ss(1,1,1).p("A32hJQEMkdIEkXQBWkxEFgtQEFguPxApQPXANlxHoQmXHnhjCeQmEGcnLE/QnEFBrbnpQrWneD3k4g");
	this.shape_71.setTransform(27.7,-19.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#666666").ss(1,1,1).p("A3ihYQEHkUH5kOQBgknEIgnQEIgoPaAxQO7APlkHcQmRHZhmCbQmHGTnGEwQm/EzrKniQrEnXDwk1g");
	this.shape_72.setTransform(28,-19.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#666666").ss(1,1,1).p("A3OhmQEDkLHtkGQBpkdELghQELghPDA5QOfAQlWHQQmLHMhpCYQmKGInDEjQm5Elq5ncQqwnPDokyg");
	this.shape_73.setTransform(28.4,-20.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#666666").ss(1,1,1).p("A27hzQD/kDHij9QBzkTEOgbQEOgaOsBAQODATlIHDQmFHAhtCUQmMF+m/EUQm1EYqnnXQqdnFDfkwg");
	this.shape_74.setTransform(28.8,-20.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#666666").ss(1,1,1).p("A2niAQD7j7HWj0QB9kJERgUQERgUOVBIQNnAVk7G2Ql/GzhvCRQmQF0m7EGQmwEKqVnRQqKm9DXktg");
	this.shape_75.setTransform(29.1,-21.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#666666").ss(1,1,1).p("A2TiMQD3jzHKjrQCHkAEUgOQEUgNN+BPQNKAYksGqQl5GmhzCNQmTFrm3D3QmrD8qDnKQp4m1DQkqg");
	this.shape_76.setTransform(29.5,-21.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#666666").ss(1,1,1).p("A2AiYQDzjrG/jiQCQj2EYgHQEWgINoBYQMuAakfGdQlzGZh2CJQmWFimzDpQmmDupxnEQplmtDHkng");
	this.shape_77.setTransform(29.9,-22.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#666666").ss(1,1,1).p("A1silQDvjhGzjaQCajsEagBQEZgBNSBfQMRAckRGSQlsGMh6CFQmZFXmvDbQmgDhpgm+QpSmlC/klg");
	this.shape_78.setTransform(30.2,-22.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#666666").ss(1,1,1).p("A1YiwQDrjZGnjRQCkjiEdAFQEcAGM7BnQL1AekEGFQlmF/h8CCQmcFNmsDNQmbDSpOm3QpAmdC4kig");
	this.shape_79.setTransform(30.6,-23.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#666666").ss(1,1,1).p("A1Fi7QDnjRGbjIQCujYEhALQEfAMMjBvQLaAgj3F4QlgFziAB+QmeFEmoC+QmWDFo9myQosmUCvkfg");
	this.shape_80.setTransform(31,-24);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#666666").ss(1,1,1).p("A0xjGQDjjJGPi/QC4jOEkASQEiASMMB2QK9AjjoFsQlaFmiDB6QmiE6mjCvQmSC3ormrQoZmMCnkcg");
	this.shape_81.setTransform(31.3,-24.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#666666").ss(1,1,1).p("A0djSQDfjAGDi2QDCjFEnAYQEkAZL2B+QKhAljbFfQlUFZiGB3QmlEwmeCiQmOCpoZmmQoGmDCfkag");
	this.shape_82.setTransform(31.7,-25.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#666666").ss(1,1,1).p("A0KjdQDbi4F4itQDLi7EqAfQEoAfLfCGQKEAnjNFSQlOFNiJBzQmoEmmbCTQmICcoHmgQn0l7CXkXg");
	this.shape_83.setTransform(32.1,-25.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#666666").ss(1,1,1).p("Az2joQDXivFsilQDVixEtAlQErAlLICOQJoApi/FHQlIE/iNBvQmqEdmXCFQmDCNn2mZQnhlzCPkUg");
	this.shape_84.setTransform(32.4,-26.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#666666").ss(1,1,1).p("AzijzQDSimFhicQDfioEwAsQEuAsKxCVQJMAsiyE5QlBEziQBsQmuESmTB3Ql+CAnlmUQnNlqCHkSg");
	this.shape_85.setTransform(32.8,-27.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#666666").ss(1,1,1).p("AzPj+QDPieFViTQDoieEzAyQExAyKbCeQIvAtikEuQk7EmiTBnQmxEJmPBoQl5BynTmNQm7liB/kPg");
	this.shape_86.setTransform(33.2,-27.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#666666").ss(1,1,1).p("Ay7kIQDKiWFKiKQDyiUE2A4QE0A5KEClQITAviXEhQk1EaiWBkQm0D+mLBaQl0BlnBmHQmolbB3kLg");
	this.shape_87.setTransform(33.5,-28.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#666666").ss(1,1,1).p("AyokTQDHiOE9iBQD8iKE5A+QE3A/JtCtQH3AyiJEUQkvENiZBgQm3D1mHBMQlvBXmwmBQmVlRBvkKg");
	this.shape_88.setTransform(33.9,-29.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#666666").ss(1,1,1).p("AyUkeQDCiFEyh5QEGiAE8BFQE6BFJWC1QHaA0h7EIQkpEAicBcQm6DsmEA9QlpBJmel7QmClJBnkHg");
	this.shape_89.setTransform(34.3,-29.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#666666").ss(1,1,1).p("AyBkoQC+h9EmhwQEQh2E/BLQE9BMI/C8QG/A2huD8QkjDzigBZQm8DhmAAvQlkA7mNl1QlvlABfkEg");
	this.shape_90.setTransform(34.7,-30.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#666666").ss(1,1,1).p("AxtkzQC6h0EahnQEahtFCBSQFABSIoDEQGjA5hgDtQkdDoijBVQnADYl8AgQlfAtl7luQlck4BXkCg");
	this.shape_91.setTransform(35.1,-31.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#666666").ss(1,1,1).p("Axak+QC2hrEPhfQEjhiFFBYQFEBYIRDMQGGA7hTDhQkWDbimBRQnDDOl4ASQlaAglplpQlKkwBPj/g");
	this.shape_92.setTransform(35.5,-32);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#666666").ss(1,1,1).p("AxGlIQCyhkEChVQEuhZFIBfQFGBeH6DUQFqA9hFDVQkQDOiqBNQnFDEl0AEQlVASlYliQk2koBHj8g");
	this.shape_93.setTransform(35.9,-32.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#666666").ss(1,1,1).p("AwzlTQCuhbD3hNQE3hPFLBlQFJBlHkDbQFNBAg3DIQkKDBitBKQnIC6lwgKQlRAElFlcQkkkgA/j5g");
	this.shape_94.setTransform(36.3,-33.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#666666").ss(1,1,1).p("AwglfQCqhTDrhEQFBhFFOBrQFNBsHMDjQEyBBgqC8QkEC0iwBHQnMCwlsgYQlLgLk0lVQkRkYA3j2g");
	this.shape_95.setTransform(36.7,-33.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#666666").ss(1,1,1).p("AwNlsQCmhKDfg7QFLg7FRBxQFQByG1DrQEVBEgbCvQj+Cni0BDQnOCnlognQlHgYkilQQj+kPAvj0g");
	this.shape_96.setTransform(37.1,-34.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#666666").ss(1,1,1).p("Av6l4QCihCDUgyQFUgyFTB4QFUB4GeDzQD5BFgOCkQj4Cai2A/QnSCdlkg1QlBgmkRlKQjrkGAnjxg");
	this.shape_97.setTransform(37.6,-34.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#666666").ss(1,1,1).p("AvomGQCdg5DJgqQFegnFWB+QFXB+GHD7QDdBHAACXQjyCOi6A7QnVCTlghDQk8g0j/lDQjYj/Afjug");
	this.shape_98.setTransform(38.1,-35.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#666666").ss(1,1,1).p("AvWmTQCagyC8ggQFogeFaCEQFZCFFxECQDABKAOCLQjsCBi9A3QnYCKlchSQk3hBjtk+QjGj2AXjrg");
	this.shape_99.setTransform(38.6,-35.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#666666").ss(1,1,1).p("AvEmiQCWgoCxgYQFygUFcCLQFcCLFaEJQCkBNAbB+QjlB0jAA0QnbCAlYhgQkyhQjck3QiyjuAOjpg");
	this.shape_100.setTransform(39.1,-36.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#666666").ss(1,1,1).p("AuymvQCSggClgPQF8gKFfCRQFfCRFDERQCIBPApByQjfBnjEAwQndB2lVhuQkthdjKkyQifjlAGjmg");
	this.shape_101.setTransform(39.7,-36.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#666666").ss(1,1,1).p("Aufm9QCNgYCagGQGFAAFjCXQFiCYEsEZQBsBRA2BlQjZBbjHAsQngBslRh9Qkohri4krQiNjdgBjjg");
	this.shape_102.setTransform(40.1,-36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_27}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-85.5,183.9,96.7);


// stage content:
(lib.无标题1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(180,144.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(404.2,259.1,182.9,95.6);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/qrimg.png", id:"qrimg"}
	],
	preloads: []
};




});