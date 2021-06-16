<template>
	<div class="swiper-week">
		<swiper
			ref="mySwiper"
			:options="swiperOptions"
			:auto-destroy="true"
			:delete-instance-on-destroy="true"
			:cleanup-styles-on-destroy="true"
			@ready="handleSwiperReadied"
			@click-slide="handleClickSlide"
			:autoUpdate="true"
			@touchStart="touchStart"
			:dir="'rtl'"
		>
			<swiper-slide v-for="(item, i) in dataArr" :key="i">
				<div class="day" :class="{ active: chooseIndex === i }">
					<!-- <div style="font-size: 12px">{{ item }}</div> -->
					<div class="c-day">{{ weekArr[dayjs(item).day()] }}</div>
					<div class="c-date">{{ dayjs(item).date() }}</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	directives: {
		swiper: directive,
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper
		},
	},
	methods: {
		touchStart(swiper, event) {
			if (swiper.realIndex >= this.dataArr.length - 5) {
				this.generateDate()
			}
		},
		generateDate() {
			let array = []
			if (!this.currentTime) {
				this.currentTime = this.dayjs().format('YYYY-MM-DD')
				array.push(this.currentTime)
			}
			for (let index = 0; index < 9; index++) {
				this.currentTime = this.dayjs(this.currentTime)
					.subtract(1, 'day')
					.format('YYYY-MM-DD')
				array.push(this.currentTime)
			}
			this.dataArr.push(...array)
		},
		toggleState(index) {
			this.toggleStateIndex = index
		},
		handleClickSlide(index) {
			this.chooseIndex = index
			this.$emit('handleChange', this.dataArr[index])
		},
		// swiper初始化
		handleSwiperReadied() {
			this.generateDate()
			this.swiper.slideTo(0, 0, false)
		},
	},
	data() {
		return {
			chooseIndex: 0,
			currentTime: '',
			swiperOptions: {
				slidesPerView: 5,
				slidesPerGroup: 5,
				spaceBetween: 0,
				observer: true,
			},
			dataArr: [],
			weekArr: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		}
	},
}
</script>
<style lang="scss">
.swiper-week {
	width: 100%;
	background: #fff;
	position: relative;
	z-index: 5;
	.swiper-slide {
		padding-top: 3px;
		padding-bottom: 3px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		.day {
			width: 44px;
			height: 44px;
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-content: center;
			align-items: center;
			border-radius: 4px;
			.c-day {
				font-size: 12px;
				font-weight: 400;
				color: #909399;
				margin-bottom: 3px;
			}
			.c-date {
				font-size: 14px;
				font-weight: 500;
				color: #606266;
			}
		}
		.day.active {
			background: #409eff;
			.c-day,
			.c-date {
				color: #fff;
			}
		}
	}
}
</style>