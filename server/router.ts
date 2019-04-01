import * as Router from 'koa-router';
import * as Koa from 'koa';
import {routeInterface} from './interface/interface'
import {resolve} from 'path'
import * as glob from 'glob'
import {getEnv} from './config/index'

export const symbolPrefix:symbol = Symbol('prefix')

export class Route implements routeInterface{
    public app: Koa
    public router: any
    public apiPath: string
    static routersMap:Map<{target: any, method: string, path: string}, Function | Function[]> = new Map()
    
    constructor(app: Koa,apiPath: string){
        this.app = app;
        this.router = new Router();
        this.apiPath = apiPath;
    }

    init(){
        let suffixName = getEnv() === 'development' ? 'ts' : 'js'
        glob.sync(resolve(this.apiPath, `./*.${suffixName}`)).forEach(require);
        
        console.log(Route.routersMap)

        for(let [conf,controller] of Route.routersMap){
            const controllers = Array.isArray(controller) ? controller : [controller]
            let prefixPath = conf.target[symbolPrefix]

            const routePath = prefixPath + conf.path
            let requestMethod = conf.method

            this.router[requestMethod](routePath, ...controllers)
        }

        this.app.use(this.router.routes()) //routePaths
        this.app.use(this.router.allowedMethods())
    }
}

export function normalize(path: string){
    return  path.startsWith('/') ? path : `/${path}`
}

export function controller(path: string){
    path = normalize(path)
    return function(target: any){
        target.prototype[symbolPrefix] = path
    }
}

export function router(conf: {path: string, method: string}){
    return function(target: any,key: string){
        conf.path = normalize(conf.path)
        Route.routersMap.set({
            target,
            ...conf
        },target[key])
    }
}

export function get(path: string){
    return router({
        method: 'get',
        path: path
    })
}