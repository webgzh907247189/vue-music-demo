import * as Koa from 'koa';
import {Route} from './router'
import {ApolloServer} from 'apollo-server-koa';
import {typeDefs} from './gql/schema';  // 加载所有的 schema
import {resolvers} from './gql/resolver';  // 加载所有的 resolver
import mocks from './gql/mock';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    mocks
});
const app = new Koa();

// applyMiddleware将graphql服务连接到koa框架
server.applyMiddleware({app});


const cusRouter = new Route(app, `${__dirname}/controller`);
cusRouter.init(); //注册路由


app.listen(3000, () => {
	console.log('Server running on port 3000');
});
