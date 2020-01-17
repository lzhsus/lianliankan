<template>
    <div class="rule">
        <div class="pop-content">
            <a href="javascript:;" @click="closePOP" class="closepop-btn"></a>
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
    .rule {
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
        left: 50%;
        top: 50%;
        width:562px;
        height:1200px;
        background:url(~@/static/images/rule.png) no-repeat;
        background-size:contain;
        .closepop-btn {
            position: absolute;
            left: 2rem;
            top: 13.133rem;
            width: 3rem;
            height: 2rem;
            /* background: url(/dist/images/btn_close.png?3a5636a9cd) no-repeat; */
            background-size: cover;
            display: block;
        }
    }


</style>