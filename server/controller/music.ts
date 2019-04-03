import {Context} from 'koa'
import {controller,get,post} from '../router'
import {graphiqlKoa,graphqlKoa} from 'graphql-server-koa';
import schema from "../graphql/schema";

@controller('a')
export class Music {
	@get('test')
	async hello(ctx: Context, next: any): Promise < void > {
		ctx.body = '?????????12321321??'
    }
    
    @post('graphql')
	async postGraphiql(ctx: Context, next: any): Promise < void > {
		await graphqlKoa({
			schema: schema
		})(ctx, next);
	}

	@get('graphql')
	async graphql(ctx: Context, next: any): Promise < void > {
		const result = await graphqlKoa({
			schema: schema
		})(ctx, next);
		console.log(result);
		ctx.body = result;
	}

	// 这个仅仅是在方便在浏览器上查看的,项目上线后可以删除
	@get('graphiql')
	async graphiql(ctx: Context, next: any): Promise < void > {
		await graphiqlKoa({
			endpointURL: '/graphql'
		})(ctx, next);
	}
}