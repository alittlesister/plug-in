<template>
	<div class="info-block">
		<van-row type="flex" align="center" justify="space-between" @click="clickEle">
			<van-col>
				<span class="info-block-title">{{ title }}</span>
			</van-col>
			<van-col class="slot-icon">
				<slot name="icon"></slot>
			</van-col>
		</van-row>
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'InfoBlock',
	data() {
		return {}
	},
	props: {
		title: {
			type: String,
		},
	},
	methods: {
		clickEle() {
			this.$emit('transferParent', '我要穿过来这个数据')
		},
	},
}
</script>
<style lang="scss">
.info-block {
	min-height: 44px;
	box-sizing: border-box;
	position: relative;
	margin-bottom: 4px;
	> div:first-child {
		padding: 0 16px;
		box-sizing: border-box;
	}
	&-title {
		position: relative;
		padding-left: 10px;
		line-height: 44px;
		font-size: 14px;
		font-weight: bold;
		color: #303133;
	}
	&-title:before {
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		height: 18px;
		width: 4px;
		background: #409eff;
		border-radius: #{'4PX'};
	}
	.slot-icon {
		color: #409eff;
		height: 52px;
		line-height: 52px;
	}
}
.info-block:before {
	content: '';
	position: absolute;
	box-sizing: border-box;
	pointer-events: none;
	right: 0;
	bottom: 0;
	left: 0;
	border-bottom: #{'1PX'} solid #ebedf0;
	transform: scaleY(0.5);
}
</style>
