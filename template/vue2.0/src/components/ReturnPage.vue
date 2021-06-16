<template>
	<div class="return">
		<van-icon @click="$router.go(-1)" :disabled="isDisabledLeft" name="arrow-left" />
		<van-icon @click="$router.go(1)" :disabled="isDisabledRight" name="arrow" />
	</div>
</template>
<script>
export default {
	data() {
		return {}
	},
	computed: {
		isDisabledLeft() {
			if (this.$route.matched.length <= 1) {
				return true
			}
			return false
		},
		isDisabledRight() {
			return false
		},
	},
	methods: {},
	mounted() {
		console.log(this.$route)
	},
}
</script>
<style lang="scss">
.return {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 55px;
	color: #191919;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	i:first-child {
		text-align: right;
		padding-right: 40px;
	}
	i:last-child {
		text-align: left;
		padding-left: 40px;
	}
	i {
		background: #f7f7f7;
		display: inline-block;
		width: 50%;
		line-height: 55px;
		height: 100%;
		box-sizing: border-box;
	}
	i[disabled] {
		color: #adadad;
		pointer-events: none;
	}
}
</style>