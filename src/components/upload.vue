<template>
  <div class="upload-img">
    <img v-show="uploadImg!=''" :src="uploadImg">
    <input v-if="uploadImg==''" @change='changeImage' type="file" accept="image/*"/>
  </div>
</template>
<script type="text/javascript">
  import loadImage from 'vendor/plugins/load-image.js';
  import  "vendor/plugins/load-image-orientation.js";
  import  "vendor/plugins/load-image-exif.js";
  import  "vendor/plugins/load-image-exif-map.js";
  import "vendor/utils/requestanimationframe";
  import "vendor/plugins/cropper";
  import Hammer from "vendor/plugins/hammer.min.js";
  require('assets/css/cropper.css');

  export default {
    props:['cropWidth','cropHeight'],
    data(){
      return {
        uploadImg:'',
        uploadImageEl:null,
        ticking:false,
        initAngle:0,
        HammerTrue:false,
        transform:{
          angle:0
        },
        canvas:null,
      }
    },
    methods:{
      eventInit(){
        var mc = new Hammer.Manager(this.$el)
        mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }))
        mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'))
        mc.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(mc.get('pan'))
        mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan'), mc.get('rotate')])
        mc.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }))
        mc.add(new Hammer.Tap())
        mc.on("rotatestart rotatemove", this.onRotate);
      },
      getCropperCanvas(){
        if(!this.uploadImg){
          return false;
        }
        let cropWidth=this.cropWidth?this.cropWidth:640;
        let cropHeight=this.cropHeight?this.cropHeight:640;
        return this.uploadImageEl.cropper("getCroppedCanvas",{ width: cropWidth, height: cropHeight});
      },
      getCropperBase64(type="image/jpeg",quality=.8){

        if(!this.uploadImg){
          return false;
        }
        let cropWidth=this.cropWidth?this.cropWidth:640;
        let cropHeight=this.cropHeight?this.cropHeight:640;
        let canvas=this.uploadImageEl.cropper("getCroppedCanvas",{ width: cropWidth, height: cropHeight});
        if(type=="image/jpeg"){
          return canvas.toDataURL("image/jpeg",quality);
        }else{
          return canvas.toDataURL("image/png");
        }
      },
      getCanvas(){
        return this.canvas;
      },
      getImgbase64(){
        return this.uploadImg;
      },
      resetElement(){
          this.transform = {
              angle: 0,
          }
          this.requestElementUpdate()
      },
      updateElementTransform() {
          if(this.HammerTrue ){
          this.uploadImageEl.cropper('rotateTo', this.transform.angle);
        }
          this.ticking = false
      },
      onRotate(ev) {
          if(ev.type == 'rotatestart') {
              this.initAngle = this.transform.angle||0
          }
          this.transform.angle = this.initAngle + ev.rotation;
          this.requestElementUpdate();
      },
      requestElementUpdate(){
          if(!this.ticking) {
              requestAnimationFrame(this.updateElementTransform);
              this.ticking = true;
          }
      },
      clearFile(){
        this.$el.querySelector('input[type="file"]').value=''; 
      },
      changeImage(e){
            let file= e.target.files[0];
            let supportedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
            if (file && supportedTypes.indexOf(file.type) >= 0) {
              
            } else {
                // alert('文件格式只支持：jpg、jpeg 和 png');
                this.clearFile();
                return;
            }
            loadImage.parseMetaData(file, (data)=>{
                var orientation = 1
                if (data.exif) {
                    orientation = data.exif[0x0112]
                }
                loadImage(file, (canvas)=>{
                  this.canvas=canvas;
                  this.uploadImg=canvas.toDataURL("image/jpeg",0.8);
                  this.$nextTick(()=>{
                      this.uploadImageEl.cropper('destroy');
                      this.uploadImageEl.cropper({
                          viewMode: 3,
                          dragMode: 'move',
                          autoCrop:1,
                          autoCropArea: 1,
                          restore: false,
                          modal: false,
                          guides: false,
                          highlight: false,
                          cropBoxMovable: false,
                          cropBoxResizable: false
                      });  
                      this.HammerTrue=true;
                  })
                  
                }, {maxWidth: 640, canvas: true, orientation: orientation});
            });
            
    },
    },
    mounted() {
      this.uploadImageEl=$('.upload-img img');
      this.eventInit();
    }
  }
</script>
<style lang='scss'>
  .upload-img{
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
    input[type='file']{
      display:block;
      position:absolute;
      width:100%;
      height:100%;
      opacity: 0;
    }
  }
</style>