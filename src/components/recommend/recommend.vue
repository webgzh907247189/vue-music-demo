<template>
	<div :class="$style.test">
        我是reCommend
	</div>
</template>

<script>
	import {getBaner,baseUrl,config,dataConfig,requestUrl} from '@/api/index'
	export default {
		name: 'reCommend',
		data() {
			return {
				
			}
		},
		methods: {
			_getBanner(){
				let params = Object.entries(Object.assign({},config,dataConfig)).reduce((result,[key,value])=>{
					result += `&${key}=${value}`
					return result
				},'').slice(1)
				let url = requestUrl + (params.includes('?') ? params : `?${params}`)
				getBaner(url)
			}
		},
		created(){
			this._getBanner()
		}
	}

</script>

<style scoped lang="scss" module>
.test{
    
}
</style>
