<template>
	<div :class="$style.test">
        router-link 测试
        <router-link tag="div" to="/test2" :class="$style.jump">
            跳转
        </router-link>
	</div>
</template>

<script>
	export default {
		name: 'Hello',
		data() {
			return {
				
			}
		},
		methods: {}
	}

</script>

<style scoped lang="scss" module>
@import "@/common/scss/variable.scss";
.jump{
    color: $color-theme
}
</style>
