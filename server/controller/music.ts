import {controller,get} from '../router'
@controller('')
export class Music{
	@get('hello')
	async hello(ctx,next){
		ctx.body = '???????????'
	}
}