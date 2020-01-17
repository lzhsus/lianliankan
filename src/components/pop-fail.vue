<template>
    <div class="fail">
        <div class="pop-content">
            <div class="score">{{this.score}}</div>
            <a href="javascript:;" class="btn-sharetip" @click="showPopSharetip()"></a>
            <a href="javascript:;" class="btn-replay" @click="replay()"></a>
            <a href="javascript:;" class="btn-goto-index" @click="gotoIndex()"></a>
        </div>
    </div>
</template>
<script type="text/javascript">
    import * as EventManager from "../class/EventManager";
    import * as GlobalDispatcher from "../common/GlobalDispatcher";

    export default {
        data() {
            return {
                score:0,
            }
        },
        methods: {

            showPopSharetip(){
                console.log("pop-fail showpopsharetip")
                vueApp.globalDispatcher.$emit(EventManager.SHOW_POP,{name:"sharetip"})
            },
            replay() {
                // console.log("rule close click")
                this.$emit('closePOP');
                GlobalDispatcher.dispatcher.dispatchEvent(EventManager.GAMEREPLAY)
            },
            gotoIndex(){

                let evt=new createjs.Event(EventManager.SHOW_PANEL);
                evt.data={name:"index"}
                GlobalDispatcher.dispatcher.dispatchEvent(evt)
                this.$emit('closePOP');
                console.log("pop-fail globaldispathcer",GlobalDispatcher.dispatcher)
            },

        }
    }
</script>
<style lang='scss' scoped>
    .fail {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
    }

    .pop-content {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 52%;
        top: 45%;
        width: 649px;
        height: 1012px;
        background:url(~@/static/images/fail.png) no-repeat;
        background-size:contain;

        .score{
            position: absolute;
            left: 1.7rem;
            top: 4.5rem;
            width: 4rem;
            height: 1.5rem;
            line-height: 1.5rem;
            font-size: 80PX;
            color: white;
            text-shadow: grey 2px 2px 2px;
            /* background: url(/dist/images/btn_close.png?3a5636a9cd) no-repeat; */
            background-size: cover;
            display: block;
        }


        .btn-sharetip{
            position: absolute;
            left: 2rem;
            top: 7.8rem;
            width: 4rem;
            height: 1rem;
            background-size: cover;
            display: block;
        }

        .btn-replay {
            position: absolute;
            left: 2rem;
            top: 9.5rem;
            width: 4rem;
            height: 1rem;
            background-size: cover;
            display: block;
        }

        .btn-goto-index{
            position: absolute;
            left: 3rem;
            top: 11.5rem;
            width: 2rem;
            height: 2rem;
            background-size: cover;
            display: block;
        }
    }

</style>