<template>
	<div :class="$style.test" @click="createComponent">
        我是reCommend
        <div id="container" ref="container">

        </div>
	</div>
</template>

<script>
    import {getBaner,baseUrl,config,dataConfig,requestUrl} from '@/api/index'
    import Vue from 'vue'
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
            },
            createComponent(){
                /***
                 * https://mp.weixin.qq.com/s/eR-xkKmj_greWRsOmCDLwg
                 */
                let MyComponent = Vue.extend({
                    template: '<p>{{testVal}}</p>',
                    data(){
                        return {
                        }
                    },
                    props: ['testVal']
                })
                let myComponent = new MyComponent({
                    propsData: { testVal: "996" }
                })
                myComponent.$mount();
                this.$refs.container.appendChild(myComponent.$el);
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
