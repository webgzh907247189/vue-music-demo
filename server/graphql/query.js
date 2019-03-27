import {
	GraphQLID,
	GraphQLNonNull,
	GraphQLList
} from 'graphql';

import {
	jobType
} from "./model";

// 引入数据模型
import jobModel from './../../models/job';

const Jobs = {
	type: new GraphQLList(jobType), // 返回是一个数组
	args: {},
	async resolve(root, params, options) {
		const result = jobModel.find().exec();
		return result;
	}
}
