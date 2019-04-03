import * as Koa from 'koa';
import {Route} from './router'
// import { ApolloServer, gql } from 'apollo-server-koa';


// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;
 
// Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!',
//   },
// };
// const server = new ApolloServer({ typeDefs, resolvers });
const app = new Koa();

// applyMiddleware将graphql服务连接到koa框架
// server.applyMiddleware({ app });

const cusRouter = new Route(app,`${__dirname}/controller`);
cusRouter.init(); //注册路由

app.listen(3000, () => {
	console.log('Server running on port 3000');
});