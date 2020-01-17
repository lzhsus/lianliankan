<template>
    <div class="pop-list">
        <div class="pop-content">
            <div class="list-prize">
                <ul class="clearfix">

                    <li v-for="item,index in prizearr">
                        <div class="rank">{{index+1}}</div>
                        <div class="headimg"><img :src="item.user_info.headimgurl"></div>
                        <div class="name">{{item.user_info.nickname}}</div>
                        <div class="score">{{item.score}}</div>
                    </li>

                </ul>
                <a href="javascript:void(0);" class="btn_gotohaowan" @click="closePOP"></a>
            </div>
            <div class=""></div>
        </div>

    </div>

</template>
<script type="text/javascript">

    import * as Service from "../class/Service";

    export default {
        props: [
            // 'prizearr'
        ],
        data() {
            return {
                prizearr: [


                ],
                rankIdx:0,
            }
        },
        methods: {
            getRank(){
                return ++this.rankIdx
            },
            update(){
                Service.rank().then((data)=>{
                    console.log("rank get :",data)
                    if(data.success){
                        this.prizearr=data.result.list;
                    }

                })
            },
            closePOP(){
                this.$emit("closePOP")
            },
            checkIsGetPrize(pid) {
//                console.log(pid,this.prizearr)
                for (let i = 0; i < this.prizearr.length; i++) {
                    if (this.prizearr[i] == pid) return true;
                }
            },
        },
        mounted() {

        }
    }

</script>
<style lang='scss' scoped>
    $lightyellow: #ffce89;
    $lightred: #ff0000;

    .pop-list {
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        background: rgba(0,0,0,0.7);
        .pop-content{
            position: absolute;
            transform: translate(-50%,0);
            left: 50%;
            top:0;
            width:580px;
            height:1177px;
            /*overflow: scroll;*/
            background:url(~@/static/images/rank.png) no-repeat;
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
            ul{
                border:white 2px solid ;
                border-radius: 50px;
                margin-top: 280px;
                width:600px;
                height:750px;
                overflow: scroll;
                -webkit-overflow-scrolling: touch;
                background: #5187c5;
                li{
                    color:white;
                    line-height: 100px;
                    display: flex;
                    width: 600px;
                    height: 100px;
                    /*background: url("/static/images/banner_prize.png");*/

                    background-size: 100%;
                    line-height: 134px;
                    .rank{
                        width:170px;
                        line-height: 100px;
                        height:100px;

                        font-size:20PX;
                    }
                    .headimg{
                        width:100px;
                        line-height: 100px;
                        height:100px;
                        img{
                            width: 80px;
                            border-radius: 50px;
                            border: white 1px solid;
                        }
                    }
                    .name{
                        line-height: 100px;
                        height:100px;
                        flex:1;
                        text-align: left;
                    }

                    .score{
                        line-height: 1.333rem;
                        height: 1.333rem;
                        width: 2.5rem;
                        text-align: center;
                        font-size: 20PX;
                    }
                }
                li:nth-child(odd) {
                    background:#5187c5;


                }
                li:nth-child(even){
                    background: #99cdec;
                }
            }



            .btn_gotohaowan {
                display: block;
                width: 7rem;
                height: 1.32rem;
                text-align: center;
                margin: 0.267rem auto;
                /*background: url("/static/images/btn_gotohaowan.png") no-repeat;*/
                background-position-x: center;
                background-size: contain;
                margin-left: 1.3rem;

            }

        }

    }
</style>