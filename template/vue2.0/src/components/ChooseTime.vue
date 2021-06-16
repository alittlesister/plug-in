<template>
	<div class="choose-time">
		<van-popup :style="{ height: '70%' }" v-model="showPicker" position="bottom" round>
			<div class="layer-header">
				<div @click="showPicker = false">取消</div>
				<div>选择时间</div>
				<div @click="confirmInfo">确定</div>
			</div>
			<div class="show-time">
				<div>
					<span :class="{ active: showChooseTimeState === 1 }" @click="chooseStartTime">{{
						chooseTime.start
					}}</span>
					<span>至</span>
					<span :class="{ active: showChooseTimeState === 2 }" @click="chooseEndTime">{{
						chooseTime.end
					}}</span>
				</div>

				<div>
					<i @click="clearTime" class="iconfont iconshanchu" style="color: #409eff"></i>
				</div>
			</div>

			<van-datetime-picker
				v-model="currentDate1"
				v-if="showChooseTimeState === 1"
				type="datetime"
				:item-height="40"
				:show-toolbar="false"
				:columns-order="['year', 'month', 'day', 'hour', 'minute']"
				:formatter="formatter"
				:min-date="minDate"
				:max-date="maxDate"
				@change="getTime1"
			/>
			<van-datetime-picker
				v-model="currentDate2"
				v-if="showChooseTimeState === 2"
				type="datetime"
				:item-height="40"
				:show-toolbar="false"
				:columns-order="['year', 'month', 'day', 'hour', 'minute']"
				:formatter="formatter"
				:min-date="minDate"
				:max-date="maxDate"
				@change="getTime2"
			/>
		</van-popup>
	</div>
</template>
<script>
import { Popup, DatetimePicker, Toast } from 'vant'
export default {
	components: {
		[Popup.name]: Popup,
		[Toast.name]: Toast,
		[DatetimePicker.name]: DatetimePicker,
	},
	props: {
		isShow: {
			type: Boolean,
		},
		timeArray: {
			type: Array,
		},
	},
	data() {
		return {
			showPicker: false,
			minDate: new Date(2019, 6, 1),
			maxDate: new Date(),
			chooseTime: {
				start: '开始时间',
				end: '结束时间',
			},
			weekArr: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
			time: [this.dayjs(), this.dayjs()],
			currentDate1: new Date(),
			currentDate2: new Date(),
			showChooseTimeState: 0,
		}
	},
	methods: {
		formatter(type, val) {
			if (type === 'year') {
				return val + '年'
			}
			if (type === 'month') {
				return val + '月'
			}
			if (type === 'day') {
				return val + '日'
			}
			if (type === 'hour') {
				return val + '时'
			}
			if (type === 'minute') {
				return val + '分'
			}
		},
		clearTime() {
			this.chooseTime.start = '开始时间'
			this.chooseTime.end = '结束时间'
		},
		chooseStartTime() {
			this.showChooseTimeState = 1
		},
		chooseEndTime() {
			this.showChooseTimeState = 2
		},
		getTime1() {
			this.chooseTime.start =
				this.dayjs(this.currentDate1).format('MM') +
				'月' +
				this.dayjs(this.currentDate1).format('DD') +
				'日' +
				this.weekArr[this.dayjs(this.currentDate1).day()] +
				' ' +
				this.dayjs(this.currentDate1).format('HH:mm')
		},
		getTime2() {
			this.chooseTime.end =
				this.dayjs(this.currentDate2).format('MM') +
				'月' +
				this.dayjs(this.currentDate2).format('DD') +
				'日' +
				this.weekArr[this.dayjs(this.currentDate2).day()] +
				' ' +
				this.dayjs(this.currentDate2).format('HH:mm')
		},
		confirmInfo() {
			if (this.chooseTime.start === '开始时间') {
				Toast({
					message: '请选择开始时间',
					position: 'top',
				})
				return
			}
			if (this.chooseTime.end === '结束时间') {
				Toast({
					message: '请选择结束时间',
					position: 'top',
				})
				return
			}

			if (this.dayjs(this.currentDate1).isAfter(this.dayjs(this.currentDate2))) {
				Toast({
					message: '开始时间要小于结束时间',
					position: 'top',
				})
				return
			}

			this.showPicker = false
			this.time[0] = this.dayjs(this.currentDate1)
			this.time[1] = this.dayjs(this.currentDate2)
			//开始时间
			this.startTime = this.dayjs(this.dayjs(this.time[0]).format('YYYY-MM-DD HH:mm')).unix()

			//结束时间
			this.endTime = this.dayjs(this.dayjs(this.time[1]).format('YYYY-MM-DD HH:mm')).unix()
			this.$emit('confirmTime', this.time)
		},
	},
	mounted() {
		this.isShow ? (this.showPicker = true) : (this.showPicker = false)
		if (this.timeArray && this.timeArray.length) {
			this.currentDate1 = this.timeArray[0]
			this.currentDate2 = this.timeArray[1]
			this.time = this.timeArray
			this.getTime1()
			this.getTime2()
		}
	},
}
</script>
<style lang="scss">
.choose-time {
	.layer-header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		height: 44px;
		box-sizing: border-box;
		padding: 0 16px;
		> div {
			font-size: 16px;
			font-weight: 400;
		}
		> div:first-child {
			color: #909399;
		}
		> div:nth-child(2) {
			color: #303133;
		}
		> div:last-child {
			color: #409eff;
		}
	}
	.show-time {
		padding: 12px;
		> div:first-child {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			box-sizing: border-box;
			background: #fff;
			> span.active:not(:nth-child(2)) {
				color: #409eff;
				border: 1px solid #409eff;
			}
			> span:not(:nth-child(2)) {
				width: calc(100% - 50% - 28px);
				text-align: center;
				height: 38px;
				line-height: 38px;
				font-size: 14px;
				font-weight: 400;
				color: #303133;
				background: #f2f6fc;
				border-radius: 4px;
				border: 1px solid transparent;
			}
			> span:nth-child(2) {
				width: 28px;
				text-align: center;
				height: 38px;
				line-height: 38px;
				font-size: 14px;
				font-weight: 400;
				color: #909399;
			}
		}

		> div:last-child {
			display: flex;
			flex-flow: row nowrap;
			justify-content: flex-end;
			padding: 13px 0;
		}
	}
	.van-picker {
		height: calc(100% - 155px);
		overflow: hidden;
	}
}
</style>