import axios from 'axios'
import requests from "./request";

//对外暴露一个函数，只要外部调用这个函数，就想服务器发起ajax请求
// 获取展示数据
export const getWebData = (linkType) => requests({url: `/getWebData/${linkType}`,method: "GET"});

//获取一言
export const getHitokoto = () =>axios({url:"https://v1.hitokoto.cn/",method:"GET"})

// 添加展示数据

// 删除展示数据

// 修改展示数据


