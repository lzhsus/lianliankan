
<template>
    <div class="prizelist">
        <div class="pop-con">
            <em class="close div_abs" @click="closeMyPrize()"></em>
            <!-- 首次进入获得券和节徽章 -->
            <div class="coupon">
                <p class="head">
                        <span class="badge-icon">
                            <img v-if="cpState[0]" src="~@/static/images/game/mai-icon.png" class="img">
                            <img v-else src="~@/static/images/game/mai-icon-2.png" class="img">
                        </span>
                    <span class="badge-icon">
                            <img v-if="cpState[1]" src="~@/static/images/game/bao-icon.png" class="img">
                            <img v-else src="~@/static/images/game/bao-icon-2.png" class="img">
                        </span>
                    <span class="badge-icon">
                            <img v-if="cpState[2]" src="~@/static/images/game/shang-icon.png" class="img">
                            <img v-else src="~@/static/images/game/shang-icon-2.png" class="img">
                        </span>
                    <span class="badge-icon">
                            <img v-if="cpState[3]" src="~@/static/images/game/pin-icon.png" class="img">
                            <img v-else src="~@/static/images/game/pin-icon-2.png" class="img">
                        </span>
                    <span class="badge-icon">
                            <img src="~@/static/images/game/jie-icon.png" class="img">
                        </span>

                </p>
                <p class="tit-coupon"><img src="~@/static/images/index/myprize_tit-coupon_head.png" class="img"></p>

                <ul class="plist">
                    <li><img src="~@/static/images/index/coupon_0.png">
                        <p class="btnget div_abs" v-bind:class="{'div_abs_font':checkcpState(5)=='立即使用'}" @click="badgeClick(5)">{{checkcpState(5)}}</p></li>
                    <li><img src="~@/static/images/index/coupon_1.png">
                        <p class="btnget div_abs" v-bind:class="{'div_abs_font':checkcpState(6)=='立即使用'}" @click="badgeClick(6)">{{checkcpState(6)}}</p></li>
                    <li><img src="~@/static/images/index/coupon_2.png">
                        <p class="btnget div_abs" v-bind:class="{'div_abs_font':checkcpState(7)=='立即使用'}" @click="badgeClick(7)">{{checkcpState(7)}}</p></li>
                    <li><img src="~@/static/images/index/coupon_3.png">
                        <p class="btnget div_abs" v-bind:class="{'div_abs_font':checkcpState(8)=='立即使用'}" @click="badgeClick(8)">{{checkcpState(8)}}</p></li>
                    <li><img src="~@/static/images/index/coupon_4.png">
                        <p class="btnget div_abs" v-bind:class="{'div_abs_font':checkcpState(9)=='立即使用'}" @click="badgeClick(9)">{{checkcpState(9)}}</p></li>

                </ul>
                <p class="tit-coupon"><img src="~@/static/images/index/myprize_tit-real_head.png" class="img"></p>
                <ul class="reallist">
                    <li v-show="checkcpState(10)" @click="badgeClick(10)"><img src="~@/static/images/index/myprize_real0.png">
                        <p class="btnget div_abs">立即使用</p></li>
                    <li><img src="~@/static/images/index/myprize_real1.png">
                        <a href="http://r.eintone.com/site#!/item?id=181"><p class="btnget div_abs">立即抢兑</p></a></li>
                    <li><img src="~@/static/images/index/myprize_real2.png">
                        <a href="http://r.eintone.com/site#!/item?id=182"><p class="btnget div_abs">立即抢兑</p></a>
                    </li>

                </ul>
                <p class="bottomtip">

                    <img src="~@/static/images/index/myprize_bottom.png" style="margin-top:0.5rem;width: 90%"></p>
                <p class="bottom"><img src="~@/static/images/game/pop-top-bottom01.png"></p>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">

    import * as MainModel from "../class/MainModel";
    import * as Service from "../class/Service";



    export default {
        name:"prize",
        props: [
            // 'cpState'
        ],
        data() {
            return {
                showState:false,
                cpState: {
                    "0": false,
                    "1": false,
                    "2": false,
                    "3": false,
                    "4": false,
                    "5": false,
                    "6": false,
                    "7": false,
                    "8": false,
                    "9": false,
                    "10": false
                },
            }
        },
        methods: {

            checkcpState(idx) {
                // console.log("check cpstage")
                if (idx == 10) {
                    return this.cpState[idx];
                }
                if (this.cpState[idx]) {
                    return "立即使用";
                } else {
                    return "立即领取";
                }
            },
            closeMyPrize() {
                this.$parent.isShowPrize=false;
                //this.$emit("Close")
            },
            badgeClick(idx) {
                if (this.cpState[idx]) {
                    window.location.href = "http://r.eintone.com/card/coupons";
                    return;
                }
                var gid = MainModel.getGlobalId(idx);
                Service.getCoupon(gid).then((data) => {
                    console.log("get Coupon", data)

                    if (data.success) {
                        this.cpState[idx] = true;
                        vueApp.alert("领取成功！")
                    }
                    else {
                        vueApp.alert(data.msg)
                    }
                })
            },
            prizelistUpdate() {
                console.log("prize update")
                // _this.cpState["10"]=true;
                Service.game_info().then((data) => {
                    if (data.success) {
                        for (let i = 0; i < data.result.list.length; i++) {
                            let lid = MainModel.getLocalId(data.result.list[i].card_activity.id)
                            this.cpState[lid] = true;
                        }

                        for (let j = 0; j < data.result.badges.length; j++) {
                            let lid2 = MainModel.getLocalId(data.result.badges[j].jdy_badge_id);
                            this.cpState[lid2] = true;
                        }


                        // console.log(_this.cpState)

                    }

                })}
        },



    }
</script>
<style lang='scss'>
    /*我的奖口*/
    .prizelist {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 99;
        .pop-con {
            position: absolute;
            left: 50%;
            top: 7%;
            overflow: scroll;
             -webkit-overflow-scrolling: touch;
            width: 8.533rem;
            height: 13rem;

            transform: translateX(-50%);
            box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.39);
            border-radius: 4px;
            background: #fff no-repeat 0 bottom;
            background-size: 100% auto;
            .close {
                position: absolute;
                right: 0px;
                top: 0px;
                width: 75px;
                height: 75px;
                background: url("~@/static/images/game/close.png") no-repeat right top;
                background-size: auto 100%;
            }
            /* 首次进入获得券和节徽章 */
            .coupon {
                overflow: hidden;
                /*padding-bottom: 105px;*/
                .head {
                    width: 100%;
                    height: 1.7rem;
                    background: #f7b300 url("~@/static/images/index/myprize_head.png") no-repeat;
                    background-size: 100%;
                    padding-top: 1.08rem;
                    padding-bottom: 0.69rem;
                    .badge-icon {
                        width: 1.4rem;
                        height: 1.4rem;
                        display: inline-block;
                        background: url("~@/static/images/game/badge-icon-bg.png") no-repeat 0 bottom;
                        background-size: auto 100%;
                        .img {
                            width: 100%;
                            display: block;
                        }
                    }
                }
                .tit-coupon {
                    img {
                        width: 90%;
                        margin: .5rem;
                    }
                }
                .plist {

                    li {
                        width: 7.5rem;
                        margin-top: 0.2rem;
                        margin-left: 0.5rem;
                        position: relative;

                        .btnget {
                            top: 1.2rem;
                            right: 0.7rem;
                            width: 2rem;
                            height: 0.6rem;
                            line-height: 0.6rem;
                            color: #4c4c4c;
                            font-size: 12PX;
                            background-color:#fff6cc;
                        }
                        .div_abs_font{
                            background-color:rgba(255,246,204,0.65);
                        }

                        img {
                            width: 100%;
                        }
                    }
                }
                .tit {
                    font-size: 44px;
                    color: #f7b300;
                    line-height: 58px;
                    font-weight: bold;
                    position: relative;
                    z-index: 2;
                }
                .icon {
                    width: 427px;
                    height: 276px;
                    margin: -10px auto 0;
                    position: relative;
                    background: url("~@/static/images/game/pop-bg02.png") no-repeat 0 0;
                    background-size: auto 100%;
                    .img {
                        width: 124px;
                        height: 124px;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
                .list {

                }
                .buttom {

                }

            }
        }
    }
</style>