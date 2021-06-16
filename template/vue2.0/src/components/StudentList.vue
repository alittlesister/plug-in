<template>
	<div class="student-list-info">
		<div class="student-portrait-title">
			<div>
				<span>选择学生</span>
			</div>
			<div>
				<span @click="toggleStudentState">{{ isEdit ? '完成' : '编辑' }}</span>
			</div>
		</div>
		<div class="portrait">
			<div>
				<i
					@click="toggleState(0)"
					:class="{ active: studentIndex === 0 }"
					class="iconfont iconyonghu1 is-all"
				></i>
				<span>全部</span>
			</div>
			<div v-for="(item, index) in list" :key="index">
				<van-image
					@click="toggleState(index + 1)"
					:class="{ active: studentIndex === index + 1 }"
					round
					:src="
						item.Sex == 0 ? require('@/assets/boy.svg') : require('@/assets/girl.svg')
					"
				></van-image>
				<span>{{ item.Name }}</span>
				<van-icon @click="deleteInfo(item)" v-show="isEdit" name="cross" />
			</div>
			<div @click="addStudent">
				<van-icon name="plus" />
				<span>添加</span>
			</div>
		</div>

		<van-popup :style="{ height: '65%' }" v-model="showPicker" position="bottom" round>
			<add-info
				@hideLayerFunc="hideLayer"
				:isShow="showPicker"
				@getAllInfo="getInfoList"
			></add-info>
		</van-popup>
		<van-dialog v-model="show" @cancel="show = false" :showConfirmButton="false">
			<div class="delete-info">
				<van-icon name="clear" />
				<div class="delete-info-msg">删除学生信息？</div>
			</div>
			<div class="delete-btn">
				<van-button @click="show = false" size="normal" type="default">取消</van-button>
				<van-button size="normal" @click="deleteInfoConfirm" type="info">确定</van-button>
			</div>
		</van-dialog>
	</div>
</template>
<script>
import { Image as VanImage, Popup, Tag, Button, Dialog } from 'vant'
import AddInfo from '@/components/AddInfo.vue'

export default {
	components: {
		[VanImage.name]: VanImage,
		[Popup.name]: Popup,
		[Button.name]: Button,
		[Tag.name]: Tag,
		AddInfo,
		[Dialog.Component.name]: Dialog.Component,
	},
	props: {
		isShow: {
			type: Boolean,
			default: false,
		},
		isShowDelete: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			show: false,
			studentIndex: 0,
			showPicker: false,
			list: [],
			show: false,
			isEdit: false,
			item: '',
		}
	},
	methods: {
		addStudent() {
			this.showPicker = true
			this.$store.state.homeControls = false
		},
		toggleState(index) {
			this.studentIndex = index
			this.$emit('toggleStudent', index)
		},
		toggleStudentState() {
			this.isEdit = !this.isEdit
		},
		hideLayer(b) {
			this.showPicker = b
			this.$store.state.homeControls = !b
		},
		getInfoList(data) {
			this.list = data
			//学生
			this.$emit('getInfoListData', data)
		},
		deleteInfo(item) {
			//删除数据函数
			this.item = item
			this.show = true
		},
		deleteInfoConfirm() {
			this.$emit('deleteStudent', this.item)
			this.show = this.isShowDelete
		},
	},
	computed: {},
	mounted() {},
}
</script>
<style lang="scss" scoped>
.student-list-info {
	width: 100%;
	box-sizing: border-box;
	padding: 0 16px;
	.student-portrait-title {
		width: 100%;
		height: 30px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 5px;
		> div:first-child {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
			font-size: 14px;
			font-weight: 400;
			color: #303133;
		}
		> div:last-child {
			font-size: 13px;
			font-weight: 400;
			color: #909399;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
			span {
				padding: 4px 10px;
				border: 1px solid #409eff;
				color: #409eff;
				border-radius: 13px;
			}
		}
	}
	.portrait {
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		> div {
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: center;
			margin-right: 8px;
			position: relative;
			.is-all,
			.van-image {
				border: 1px solid transparent;
				box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16);
			}
			> span {
				font-size: 12px;
				font-weight: 400;
				transform: scale(0.9);
			}
			> i.van-icon-cross {
				position: absolute;
				top: -5px;
				right: -5px;
				z-index: 56;
				background: #c0c4cc;
				color: #fff;
				border-radius: 50%;
				font-size: 12px;
				padding: 6px;
				transform: scale(0.8);
			}
			.is-all.active,
			.van-image.active {
				background: #409eff;
				border: 1px solid transparent;
			}
			.is-all.active + span,
			.van-image.active + span {
				color: #409eff;
			}
		}

		.is-all {
			display: inline-block;
			width: 44px;
			text-align: center;
			background: #c0c4cc;
			height: 44px;
			line-height: 50px;
			border-radius: 50%;
			color: #fff;
			font-size: 40px;
			overflow: hidden;
		}
		.van-image {
			width: 44px;
			height: 44px;
		}
		.van-icon.van-icon-plus {
			display: inline-block;
			width: 44px;
			text-align: center;
			height: 44px;
			line-height: 44px;
			border: 1px dashed #c0c4cc;
			color: #c0c4cc;
			font-size: 18px;
			border-radius: 50%;
			background: #f2f6fc;
		}
	}
	.van-image {
		width: 44px;
		height: 44px;
	}
}
</style>