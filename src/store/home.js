// 引入请求接口文件
import {getWebData, getHitokoto} from '@/api'

const state = {
	webData: {},
	Hitokoto: ""
};
const mutations = {
	// 设置仓库首页网页数据
	GETDATA(state, data){
		state.webData = data;
		document.title = state.webData.webTitle;
		// console.log(data)
	},
	// 设置仓库一言数据
	GETHITOKOTODATA(state, data){
		state.Hitokoto = data;
	}
};
const actions = {
	// 获取首页网站数据
	async getData({commit}, linkType){
		let result = await getWebData(linkType);
		if (result['code'] ===200){
			// console.log(result.data)
			commit("GETDATA", result.data);
			return "ok";
		}else {
			return Promise.reject(new Error("获取主页数据失败~"));
		}
	},

	// 获取一言
	async getHitokotoData({commit}){
		let result = await getHitokoto();
		if (JSON.stringify(result).indexOf("请求失败")!==-1){
			return Promise.reject(new Error("一言获取失败！"));
		}else {
			commit("GETHITOKOTODATA", result.data['hitokoto']);
			// console.log(result);
		}
	}
};
const getters = {
	navList(){
		return state.webData['navList'];
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}