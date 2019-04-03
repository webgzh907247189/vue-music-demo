import {
	GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

const User = new GraphQLObjectType({
	name: 'User',
	description: 'User对象',
	fields: {
		id: {
			type: GraphQLInt
		},
		name: {
			type: GraphQLString
		},
	}
});

const Query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		user: {
			type: User,
			args: {
				id: {
					type: GraphQLInt
				}
			},
			resolve: function (root, args) {
				return {
					id: 1,
					name: '2'
				};
			}
		}
	}
});

export {Query}