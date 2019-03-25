<template>
	<div>
		<router-view /> <!--  一级路由，载体 -->
	</div>
</template>

<script>
	var a = {
		name: '111'
	}
	console.log({
		...a,
		sex: '22'
	})

	export default {
		name: 'app',
		data() {
			return {}
		},
		created() {
			window.aa = this
		},
	}

</script>

<style>
</style>
