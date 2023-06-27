/**
 * @name: index
 * @author: GOLU
 * @date: 2023/6/21 21:27
 * @description：index
 * @update: 2023/6/21 21:27
 */
import Vue from "vue";
import VueRouter from 'vue-router'
import routes from '@/router/routes';

Vue.use(VueRouter);

// 配置路由
const router = new VueRouter({
	// 配置路由
	routes,
	scrollBehavior(){
		return {y: 0}
	}
});


export default router
