import * as Koa from 'koa';
import {
	Route
} from './router'
import {
	ApolloServer,
	gql
} from 'apollo-server-koa';

const books = [{
		title: 'Harry Potter and the Chamber of Secrets',
		author: 'J.K. Rowling',
	},
	{
		title: 'Jurassic Park',
		author: 'Michael Crichton',
	},
];

const typeDefs = gql `
    type Book {
        author: String,
        title: String
        name: String
    }
    type Query {
        hello: [Book]
    }
`;

const resolvers = {
	Query: {
		hello: () => books
	},
};
const server = new ApolloServer({
	typeDefs,
    resolvers,
    // mocks: true
});
const app = new Koa();

// applyMiddleware将graphql服务连接到koa框架
server.applyMiddleware({app});

const cusRouter = new Route(app, `${__dirname}/controller`);
cusRouter.init(); //注册路由

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
