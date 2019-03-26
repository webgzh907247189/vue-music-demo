<template>
	<div id="app">
		<m-header></m-header>
		<router-view /> <!--  一级路由，载体 -->
	</div>
</template>

<script>
	import MHeader from '@/components/m-header/m-header'
	export default {
		name: 'app',
		data() {
			return {}
		},
		created() {},
		components: {
			MHeader
		}
	}
</script>

<style lang="scss">
    @import '@/common/scss/index.scss';
	#app {
		position: fixed;
		top: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
</style>
