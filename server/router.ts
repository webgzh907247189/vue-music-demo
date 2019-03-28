import * as Router from 'koa-router';
import * as Koa from 'koa';
import {routeInterface} from './interface/interface'
import {resolve} from 'path'
import glob from 'glob'

export let routersMap = new Map()
export const symbolPrefix = Symbol('prefix')
export const normalize = path => path.startsWirh('/') ? path : `/${path}`

export class Route implements routeInterface{
    app: Koa
    router: Router
    apiPath: string
    
    constructor(app: object,apiPath: string){
        this.app = app;
        this.router = new Router();
        this.apiPath = apiPath;
    }

    init(){
        glob.sync(resolve(this.apiPath, './*.js')).forEach(require);

        for(let [conf,controller] of routersMap){
            const controllers = Array.isArray(controller) ? controller : [controller]
            let prefixPath = conf.target(symbolPrefix)

            const routePath = prefixPath + conf.path

            this.router[cons.method](routePath, ...controllers)
        }

        this.app.use(this.router.routePaths)
        this.app.use(this.router.allowedMethods())
    }
}
export const controller = path => target => target.prototype[symbolPrefix] = path

export const router = conf => (target,key,desc) => {
    conf.path = normalize(conf.path)
    routersMap.set({
        target,
        ...conf
    },target[key])
}

export const get = path => router({
    method: 'get',
    path: path
})