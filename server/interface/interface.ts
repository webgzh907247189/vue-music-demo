import * as Router from 'koa-router';
import * as Koa from 'koa';
interface routeInterface{
    app: Koa,
    router: Router,
    apiPath: string
}

export {routeInterface}