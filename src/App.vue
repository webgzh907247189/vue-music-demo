<template>
	<div :id="$style.app">
		<m-header></m-header>
		<tab></tab>
		<router-view>
		</router-view> <!--  一级路由，载体 -->
	</div>
</template>

<script>
	import gql from "graphql-tag";
	import MHeader from '@/components/m-header/m-header'
	import Tab from '@/components/tab/tab'
	export default {
		name: 'app',
		data() {
			//data中必须提前创建apollo中相应字段且字段名必须相同.
			return {
				hello: '',
				loading: 0
			}
		},
		apollo: {
			hello: {
				query() {
					return gql `{hello}`
				},
				loadingKey: "loading"
			}
		},
		created() {},
		components: {
			MHeader,
			Tab
		}
	}

</script>

<style lang="scss" module>
	@import '@/common/scss/index.scss';

	#app {
		position: fixed;
		top: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

</style>
