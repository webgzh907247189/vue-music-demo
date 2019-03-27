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
module.exports = {jobType}