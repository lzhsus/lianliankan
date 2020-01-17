<template>
    <div class="noprize">
        <div class="pop-content">
            <a href="javascript:;" @click="btnReplay()" class="closepop-btn"></a>
        </div>
    </div>
</template>
<script type="text/javascript">
    import * as EventManager from "../class/EventManager";
    import * as GlobalDispatcher from "../common/GlobalDispatcher";

    export default {
        data() {
            return {}
        },
        methods: {
            btnReplay() {
                this.$emit("closePOP")
                GlobalDispatcher.dispatcher.dispatchEvent(EventManager.GAMEREPLAY);
            }
        }
    }
</script>
<style lang='scss' scoped>
    .noprize {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);

        .pop-content {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            width:649px;
            height:540px;
            background:url(~@/static/images/noprize.png) no-repeat;
            background-size:contain;
            .closepop-btn {
                position: absolute;
                left: 2rem;
                top: 3.5rem;
                width: 4rem;
                height: 2rem;
                background-size: cover;
                display: block;
            }
        }
    }




</style>