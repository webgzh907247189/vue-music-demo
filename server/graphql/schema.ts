import {
	GraphQLSchema
} from 'graphql';
import {Query} from './schemaConfig'

const myGraphQLSchema = new GraphQLSchema({
    query: Query
});

export {myGraphQLSchema}