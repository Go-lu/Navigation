/**
 * @name: routers
 * @author: GOLU
 * @date: 2023/6/21 21:27
 * @description：routers
 * @update: 2023/6/21 21:27
 */
import Home from '@/pages/home'

export default [
	{
		path: "/home",
		component: Home,
		meta: {show: true}
	},
	// 重定向
	{
		redirect: "/home",
		path: "*"
	}
]

