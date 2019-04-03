import {
	GraphQLList
} from 'graphql';
import {
	userType
} from "./model";
import userModel from './config.json';


const users = {
	type: new GraphQLList(userType),
	args: {},
	async resolve(root, params, options) {
		const result = userModel
		return result;
	}
}

export default {
	users: users
}
