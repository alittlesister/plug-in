<template>
	<div class="search-block">
		<van-search
			id="suggestId"
			v-model="searchVal"
			:placeholder="placeholder"
			show-action
			@search="onSearch"
			@input="onInput"
			@cancel="onCancel"
		>
		</van-search>
		<van-list
			v-model="loadingVal"
			:finished="finished"
			finished-text="没有更多了"
			:offset="100"
			:immediate-check="false"
			@load="OnLoad"
		>
			<van-empty v-if="dataList.length <= 0" description="" />
			<van-cell
				@click="clickSingleData(item)"
				v-for="item in dataList"
				:key="item.id"
				:title="item.name"
			/>
		</van-list>
	</div>
</template>
<script>
import { Search, List, Cell, Toast, Empty } from 'vant'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import { getList } from '@/api/axios.js'

export default {
	components: {
		BaiduMap,
		[Search.name]: Search,
		[List.name]: List,
		[Cell.name]: Cell,
		[Empty.name]: Empty,
	},
	props: {
		placeholder: {
			type: String,
		},
		loading: {
			type: Boolean,
		},
		finished: {
			type: Boolean,
			default: false,
		},
		dataList: {
			type: Array,
		},
	},
	data() {
		return {
			searchVal: '',
			pageIndex: 1,
			pageSize: 20,
			Pagerecords: null,
			loadingVal: false,
		}
	},
	//   watch:{

	//   },
	methods: {
		scrollToTop() {
			this.$el.scrollTop = 0
		},
		onSearch() {
			this.$emit('OnSearch', this.searchVal)
		},
		onInput() {
			this.$emit('onInput', this.searchVal)
		},
		onCancel() {
			this.$emit('CancelSearch')
		},
		OnLoad() {
			this.$emit('SearchLoad', this.loadingVal)
			if (this.loading === false) {
				this.loadingVal = false
			}
		},
		clickSingleData(item) {
			//this.searchVal = item.name;
			this.$emit('clickSingle', item)
		},
	},
	mounted() {},
}
</script>
<style lang="scss" scoped>
.search-block {
	width: 100%;
	height: 100%;
	background: #fff;
	.van-list {
		width: 100%;
		height: calc(100% - 54px);
		overflow: scroll;
	}
	//overflow: scroll;
	.scroll-container {
		width: 100%;
		height: calc(100% - #{'54PX'});
	}
	.van-cell__title {
		span {
			width: 100%;
			display: inline-block;
		}
		span:active {
			color: #409eff;
		}
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.5s;
	}
	.fade-enter,
	.fade-leave-to {
		transform: translateY(150%);
		opacity: 0;
	}
}
</style>
<style lang="scss">
.van-icon-search,
.van-search__action {
	color: #909399;
}
</style>