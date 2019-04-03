import {Context} from 'koa'
import {controller,get,post} from '../router'
// import {graphqlKoa} from 'apollo-server-koa';
let {graphqlKoa} = require('apollo-server-koa');
import {myGraphQLSchema} from "../graphql/schema";

@controller('a')
export class Music {
	@get('test')
	async hello(ctx: Context, next: any): Promise < void > {
		ctx.body = '?????????12321321??'
    }

    // @post('graphql')
	// async postGraphiql(ctx: Context, next: any): Promise < void > {
	// 	await graphqlKoa({
	// 		schema: myGraphQLSchema
	// 	})
	// }

	// @get('graphql')
	// async graphql(ctx: Context, next: any): Promise < void > {
	// 	const result = await graphqlKoa({
	// 		schema: myGraphQLSchema
	// 	})
	// 	ctx.body = result;
	// }
}