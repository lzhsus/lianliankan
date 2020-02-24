<template>
	<div class="index-wrapper" id="index">
		<div class="box">111</div>
	</div>
</template>

<script>
	import {LinkGame} from 'flash/LinkGame'
	// 公共配置
	import Api from "api/index";
	// 公共方法
	import query from "vendor/utils/getUrlParms"
	// import LinkGame from 'flash/LinkGame.js'
	export default {
		name: "app",
		data() {
			return {
				
			}
		},
		components: {},
		computed: { },
		watch: {},
		methods: {
		},

		mounted() {
			var linkGame =new LinkGame({
				length:8
			})
			linkGame.init()
		}
	}
</script>

<style lang="scss">
	.box{
		width: 100px;height: 100px;
		background: red;
	}
</style>
