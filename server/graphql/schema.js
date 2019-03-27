import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';

// 引入job的查询与操作
import JobQueries from './job/query';
import JobMutations from './job/mutation';


export default new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Queries',
		fields: Object.assign(
			JobQueries
		)
	}),
	mutation: new GraphQLObjectType({
		name: 'Mutations',
		fields: Object.assign(
			JobMutations
		)
	})
})
