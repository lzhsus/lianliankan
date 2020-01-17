<template>
    <div class="success">
        <div class="pop-content">
            <div class="score">{{this.score}}</div>
            <!--<a href="javascript:;" class="closepop-btn" @click="closePOP"></a>-->
            <a href="javascript:;" class="btn-lottery" @click="lottery"></a>
        </div>
    </div>
</template>
<script type="text/javascript">
    import * as EventManager from "../class/EventManager";
    import * as Service from "../api";

    export default {
        data() {
            return {
                score: 0
            }
        },
        methods: {
            lottery() {
                // let data = {success: false}
                Service.lottery().then((data) => {
                    this.$emit("closePOP")
                    console.log("lottery data:",data)
                    if (data.success) {

                        vueApp.globalDispatcher.$emit(EventManager.SHOW_POP, {name: "info"})
                    }
                    else {
                        vueApp.globalDispatcher.$emit(EventManager.SHOW_POP, {name: "noprize"})
                    }
                })
            },

            closePOP() {
                console.log("rule close click")
                this.$emit('closePOP');
            }
        }
    }
</script>
<style lang='scss' scoped>
    .success {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
    }

    .pop-content {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        width: 649px;
        height: 951px;
        background: url(~@/static/images/success.png) no-repeat;
        background-size: contain;

        .score {
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
        .closepop-btn {
            position: absolute;
            left: 3rem;
            top: 11.133rem;
            width: 2rem;
            height: 1.5rem;
            /* background: url(/dist/images/btn_close.png?3a5636a9cd) no-repeat; */
            background-size: cover;
            display: block;
        }

        .btn-lottery {
            position: absolute;
            left: 2rem;
            top: 7.5rem;
            width: 4rem;
            height: 1.5rem;
            /* background: url(/dist/images/btn_close.png?3a5636a9cd) no-repeat; */
            background-size: cover;
            display: block;
        }

    }

</style>