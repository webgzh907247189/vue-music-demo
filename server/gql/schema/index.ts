import {readFileSync} from 'fs'
import {resolve} from 'path'
import { gql } from 'apollo-server-koa';
import * as glob from 'glob'
import { DocumentNode } from 'apollo-link';

// 同步读取当前目录下所有 .graphql 文件
function getGql(): Array<DocumentNode>{
    return glob.sync(resolve(__dirname, `./*.graphql`)).reduce((result,dir) => {
        const content = readFileSync(dir, {encoding: 'utf-8'});

        result.push(gql `${content}`); // gql字符串模板标签函数会解析schame定义语法
        return result
    },[]);
}
let typeDefs: Array<DocumentNode> = getGql() 
export {typeDefs}


// const books = [{
// 		title: 'Harry Potter and the Chamber of Secrets',
// 		author: 'J.K. Rowling',
// 	},
// 	{
// 		title: 'Jurassic Park',
// 		author: 'Michael Crichton',
// 	},
// ];

// const typeDefs = gql `
//     type Book {
//         author: String,
//         title: String
//         name: String
//     }
//     type Query {
//         hello: [Book]
//     }
// `;

// const resolvers = {
// 	Query: {
// 		hello: () => books
// 	},
// };