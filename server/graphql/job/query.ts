import {
	GraphQLID,
	GraphQLNonNull,
	GraphQLList
} from 'graphql';

import {
	jobType
} from "./model";

// 引入数据模型
import userModel from './config.json';

const Jobs = {
	type: new GraphQLList(jobType), // 返回是一个数组
	args: {},
	async resolve(root, params, options) {
		const result = userModel
		return result;
	}
}

const Job = {
	type: jobType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	async resolve(root, params, options) {
		const result = userModel
		return result;
	}
}
export default {
	Jobs: Jobs,
	Job: Job
}
