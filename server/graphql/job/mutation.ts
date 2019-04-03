import {
	GraphQLNonNull,
	GraphQLBoolean
} from 'graphql';
import {
	jobInput
} from "./model";

// 引入job的数据模型
import userModel from './config.json';

const JobCreate = {
	type: GraphQLBoolean,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(jobInput) // 使用模型
		}
	},
	async resolve(root, params, options) {
		console.log('数据==>', params.data);
		const result = userModel
		return true;
	}
}

export default {
	JobCreate: JobCreate
}
