<template>
	<div :id="$style.app">
		<m-header></m-header>
        <tab></tab>
		<router-view>
        </router-view> <!--  一级路由，载体 -->
	</div>
</template>

<script>
    import MHeader from '@/components/m-header/m-header'
    import Tab from '@/components/tab/tab'
	export default {
		name: 'app',
		data() {
			return {}
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
