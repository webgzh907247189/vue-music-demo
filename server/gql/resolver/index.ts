import {resolve} from 'path'
import * as glob from 'glob'
import {getEnv} from '../../config/index'

let suffixName = getEnv() === 'development' ? 'ts' : 'js'

// 同步读取当前目录下所有 .js 文件  (排除 index.js)
function getResolvers(): Object{
    return glob.sync(resolve(__dirname, `./*.${suffixName}`)).filter(item => !item.includes(`index.${suffixName}`)).reduce((result,item)=>{
        // console.log(require(item),'item')
        return Object.assign({},result,require(item))
    },Object.create(null))
}

let resolvers :any = getResolvers()

console.log(resolvers,'resolvers')
export {resolvers}