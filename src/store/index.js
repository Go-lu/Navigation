// 引入vuex，相当于最大的仓库
import Vuex from "vuex";
// 引入vue
import Vue from "vue";

// 引入小仓库
import home from "./home"

// 使用vuex
Vue.use(Vuex);

// 对外暴露Store实例
export default new Vuex.Store({
	// 使用模块化开发vuex
	modules:{
		home
	}
})