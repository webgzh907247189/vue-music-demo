import * as Koa from 'koa';
import * as Router from 'koa-router';
// import {
// 	graphiqlKoa,
// 	graphqlKoa
// } from 'graphql-server-koa';
// import schema from "./graphql/schema.js";

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
	ctx.body = 'Hello World!222';
});

// router.get('/graphql', async (ctx, next) => {
// 	const result = await graphqlKoa({
// 		schema: schema
// 	})(ctx, next);
// 	console.log(result);
// 	ctx.body = result;
// })

// router.post('/graphql', async (ctx, next) => {
// 	await graphqlKoa({
// 		schema: schema
// 	})(ctx, next);
// })

// 这个仅仅是在方便在浏览器上查看的,项目上线后可以删除
// router.get('/graphiql', async (ctx, next) => {
// 	await graphiqlKoa({
// 		endpointURL: '/graphql'
// 	})(ctx, next);
// })

app.use(router.routes());
app.listen(3000, () => {
	console.log('Server running on port 3000');
});
