<template>
    <div class="pop-badge">
        <p class="head">
            <span class="badge-icon badge-icon01"><img :src="'static/images/game/mai-icon'+(beacon.isMai?'':'-2')+'.png'" class="img"></span>
            <span class="badge-icon badge-icon02"><img :src="'static/images/game/bao-icon'+(beacon.isBao?'':'-2')+'.png'" class="img"></span>
            <span class="badge-icon badge-icon03"><img src="static/images/game/shang-icon.png" class="img"></span>
            <span class="badge-icon badge-icon05"><img :src="'static/images/game/pin-icon'+(beacon.isPin?'':'-2')+'.png'" class="img"></span>
            <span class="badge-icon badge-icon04"><img :src="'static/images/game/jie-icon'+(beacon.isJie?'':'-2')+'.png'" class="img"></span>
        </p>
    </div>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {                
            }
        },
        methods: {
        },
        mounted() {
           
        },
        computed: {},
        props: ['beacon']

    }

</script>
<style lang='scss'>

</style>