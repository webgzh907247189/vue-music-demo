import { Context } from 'koa'
import {controller,get} from '../router'
@controller('a')
export class Music{
    @get('test')
    async hello(ctx: Context,next: any): Promise<void>{
		ctx.body = '?????????12321321??'
	}
}