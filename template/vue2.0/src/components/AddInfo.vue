<template>
	<div class="add-info">
		<div class="layer-header">
			<div @click="hideLayer">取消</div>
			<div>选择学生({{ count }}/5)</div>
			<div @click="confirmInfo">确定</div>
		</div>
		<van-steps active-color="#409EFF" direction="vertical" :active="active">
			<van-step v-for="(item, i) in stepArr" :key="i">{{ item }}</van-step>
		</van-steps>
		<div
			:style="{
				height: 'calc(100% - ' + (132 + (37 * stepArr.length - 1)) + 'px)',
			}"
			class="scroller"
		>
			<van-list
				v-model="loading"
				:finished="finished"
				finished-text="没有更多了"
				:offset="150"
				:immediate-check="false"
				@load="onLoad"
				@check="CheckIsBottom"
			>
				<van-cell
					@click="setData(item2, index)"
					v-for="(item2, index) in dataList"
					:key="index"
					:title="item2.Name"
					:class="item2.active == true ? 'active' : ''"
				>
					<van-icon name="success" />
				</van-cell>
			</van-list>
		</div>
	</div>
</template>
<script>
import { getGardenPageList } from '@/api/user.js'
import { Search, List, Cell, Toast, Step, Steps } from 'vant'
import { getList } from '@/api/axios.js'
import { getByUserIdChildren } from '@/api/InOrOutRecords/OutElectronicfence.js'

export default {
	name: 'AddInfo',
	components: {
		[Search.name]: Search,
		[List.name]: List,
		[Step.name]: Step,
		[Steps.name]: Steps,
		[Cell.name]: Cell,
	},
	props: {
		isShow: {
			type: Boolean,
		},
		clickedData: {
			type: Array,
		},
	},
	data() {
		return {
			userinfo: JSON.parse(this.defineMethods.getCookie('LoginUserInfo')),
			active: 1,
			count: 0,
			stepArr: ['请选择'],
			searchVal: '',
			chooseDataList: [],
			dataList: [],
			loading: false,
			finished: false,
			pageIndex: 1,
			pageSize: 20,
			Pagerecords: null,
		}
	},
	methods: {
		hideLayer() {
			this.$emit('hideLayerFunc', !this.isShow)
		},
		confirmInfo() {
			this.hideLayer()
			this.$emit('getAllInfo', this.chooseDataList)
		},
		onSearch() {
			this.pageIndex = 1
			this.finished = false
			this.dataList.splice(0)
			this.requestData()
		},
		CheckIsBottom() {
			console.log('到底了')
		},
		async requestData() {},
		onLoad() {
			console.log('到底部了')
		},
		setData(item, index) {
			if (item.active == false) {
				if (this.count >= 5) {
					Toast.fail('添加学生不能超过5个')
					return
				}

				item.active = true
				this.dataList[index].active = true
				this.chooseDataList.push(item)
			} else {
				this.dataList[index].active = false
				this.chooseDataList.splice(
					this.chooseDataList.findIndex((items) => items.id == item.id),
					1
				)
			}
			this.count = this.chooseDataList.length
			this.chooseDataList.length > 0
				? (this.stepArr[0] = this.chooseDataList
						.map((item) => {
							return item.Name
						})
						.join(','))
				: (this.stepArr[0] = '请选择')
		},
	},
	created() {
		//监听chooseDataList数据发生变化时给dataList重新赋值
		this.$watch('chooseDataList', function (newValue, oldValue) {
			this.count = this.chooseDataList.length
			this.chooseDataList.length > 0
				? (this.stepArr[0] = this.chooseDataList
						.map((item) => {
							return item.Name
						})
						.join(','))
				: (this.stepArr[0] = '请选择')

			if (this.chooseDataList.length == 0) {
				this.dataList.forEach((x) => {
					x.active = false
				})
				return
			}

			let indexs = []
			this.chooseDataList.forEach((x) => {
				let index = this.dataList.findIndex((item) => item.id === x.id)
				indexs.push(index)
			})

			this.dataList.forEach((x) => {
				x.active = false
			})
			indexs.forEach((x) => {
				this.dataList[x].active = true
			})
		})
	},
	async mounted() {
		//根据家长Id查询家长绑定的学生
		let data = await getByUserIdChildren(this.userinfo.id)
		let array = []
		if (this.clickedData == undefined) {
			array = data.Data.map((item) => {
				return {
					id: item.id,
					Name: item.Name,
					active: false,
					HeadUrl: item.HeadUrl,
					Sex: item.Sex,
				}
			})
			this.dataList = array
			return
		}

		array = data.Data.map((item) => {
			if (this.clickedData.includes(item.id)) {
				this.chooseDataList.push({
					id: item.id,
					Name: item.Name,
					active: true,
					HeadUrl: item.HeadUrl,
					Sex: item.Sex,
				})
				item.active = true
				return {
					id: item.id,
					Name: item.Name,
					active: true,
					HeadUrl: item.HeadUrl,
					Sex: item.Sex,
				}
			}
			return {
				id: item.id,
				Name: item.Name,
				active: false,
				HeadUrl: item.HeadUrl,
				Sex: item.Sex,
			}
		})

		this.count = this.clickedData.length
		this.dataList = array
	},
}
</script>
<style lang="scss" scoped>
.add-info {
	width: 100%;
	height: 100%;
	background: #fff;
	overflow: hidden;
	.van-steps {
		background-color: #f2f6fc;
	}
	.van-step--vertical:first-child::before {
		background-color: #f2f6fc;
	}
	.scroll-container {
		width: 100%;
	}
	.van-cell {
		transition: all 0.3s;
		i {
			opacity: 0;
		}
	}
	.van-cell.active {
		color: #409eff;
		i {
			opacity: 1;
			color: #409eff;
		}
	}
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
}
</style>
<style lang="scss">
.van-icon-search,
.van-search__action {
	color: #909399;
}
// .van-step__icon--active,
// .van-step__title--active {
//   color: #409eff;
// }
</style>