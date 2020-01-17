<template>
    <div class="pop" id="shoplist">
        <div class="pop-content">
            <a href="javascript:;" class="closepop-btn" @click="closePOP"></a>
            <input type="text" class="div_abs ipt" id="nameShopIpt" placeholder="请输入姓名">
            <input type="tel" class="div_abs ipt" id="mobileShopIpt" placeholder="请输入手机号码">
            <select id="cityIpt" class="div_abs ipt" @change="cityUpdate">
                <option disabled selected>请选择城市</option>
                <option v-for="item in cities " :key="item.index" :value="item.city">{{item.city}}</option>
            </select>
            <select id="shopIpt" class="div_abs ipt">
                <option disabled selected>请选择门店</option>
                <option v-for="item in shops " :value="item.value+','+item.shop_id+','+item.address">{{item.name}}
                </option>

            </select>
            <a class="div_abs submitBtn" @click="doSendInfo"></a>
        </div>
    </div>
</template>
<script type="text/javascript">
    import * as EventManager from "../class/EventManager";
    import * as Service from "../class/Service";

    export default {
        props: [
            'prizes'
        ],
        data() {
            return {
                cities: listData.cities,
                shops: listData.shops,

            }
        },
        methods: {
            closePOP() {
                this.$emit('closePOP');
            },
            doSendInfo() {
                //service
//                this.$emit('closePOP');
                console.log("goto exchange page")
                this.$emit(EventManager.SHOW_EXCHANGE)

            },
            cityUpdate: cityUpdate,


        },
        mounted() {
            bindAddress();
        }


    }

    console.log("prizepage")
    let listData = {"cities": [], "shops": []}


    function cityUpdate() {

        let cityIpt = $("#cityIpt");
        let shopIpt = $("#shopIpt");

        let city = cityIpt.find("option:selected").text();

        Service.getCityList({city: city}).then((data)=>{
            for (let i = 0; i < data.result.list.length; i++) {
                listData.cities.push(data.result.list[i]);
                console.log(listData);
            }
        })


        $.getJSON(vueApp.config.serverPath + 'shop/list?callback=?', {city: city}).done((data) => {

            for (let i = 0; i < data.result.list.length; i++) {
                console.log("aaaa", data.result)
                listData.shops.push(data.result.list[i]);
            }
        });
    }

    function bindAddress() {

        Service.getCityList().then((data)=>{
                for (let i = 0; i < data.result.list.length; i++) {
                    listData.cities.push(data.result.list[i]);
                    console.log(listData);
                }
        })

        console.log("bindaddress")
        // $.getJSON(vueApp.config.serverPath + 'shop/city').done((data) => {
        //     for (let i = 0; i < data.result.list.length; i++) {
        //         listData.cities.push(data.result.list[i]);
        //         console.log(listData);
        //     }
        // });
    }
</script>
<style lang='scss' scoped>
    #shoplist {
        .pop-content {
            /*background:url(~@/static/images/myprize.png) no-repeat;*/
            width: 658px;
            height: 860px;
            background-size: cover;

            #nameShopIpt {
                width: 300px;
                top: 100px;

            }
            #mobileShopIpt {
                width: 300px;
                top: 150px;
            }
            #cityIpt {
                width: 300px;
                top: 200px;
            }

            #shopIpt {
                width: 300px;
                top: 250px;
            }

            .submitBtn {
                width: 150px;
                height: 75px;
                top: 300px;

            }
        }

    }
</style>