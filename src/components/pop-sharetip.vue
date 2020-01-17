<template>
    <div class="sharetip" @click="closePOP()">
        <div class="pop-content">
            <!--<a href="javascript:;" class="closepop-btn" @click="closePOP"></a>-->
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {}
        },
        methods: {
            closePOP() {
                console.log("rule close click")
                this.$emit('closePOP');
            }
        }
    }
</script>
<style lang='scss' scoped>

    .sharetip{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        .pop-content {
            position: absolute;
            left: 55%;
            top: 1rem;
            background: url(~@/static/images/sharetip.png) no-repeat;
            width: 7.333rem;
            height: 8.413rem;
            background-size: contain;
            -webkit-transform: translate(-50%, 0%);
            transform: translate(-50%, 0%);
        }

    }
</style>