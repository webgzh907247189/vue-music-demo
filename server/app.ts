import * as Koa from 'koa';
import {Route} from './router'

const app = new Koa();
const cusRouter = new Route(app,`${__dirname}/controller`);
cusRouter.init(); //注册路由

app.listen(3000, () => {
	console.log('Server running on port 3000');
});