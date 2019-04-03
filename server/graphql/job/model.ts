import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLID
} from 'graphql'


export const jobType = new GraphQLObjectType({
	name: 'job',
	fields: {
		_id: {
			type: GraphQLID
		},
		job_name: {
			type: GraphQLString
		}
	}
})

// 定义输入的的模型
export let jobInput = new GraphQLInputObjectType({
	name: 'jobInput',
	fields: {
		job_name: {
			type: GraphQLString
		}
	}
})
