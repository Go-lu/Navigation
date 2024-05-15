<h1 style="text-align: center; color=#fc5531;">Golu-Navigation已升级迁移，最新项目请导航到以下仓库</h1>

> **前端：[GoluNavigationWeb](https://github.com/Go-lu/GoluNavigationWeb)**
>
> **后端：[GoluNavigationServer](https://github.com/Go-lu/GoluNavigationServer.git)**
----
<h2 style="text-align: center;">Golu-Navigation</h1>

### 一个简洁且现代化的导航页，前端使用vue，后端node，由json配置网站数据 

##### 设计效果：
###### _点此预览： [Demo](http://demo.nav.golu.top)_
> - [x] 具有ipv6、ipv4、lan三种网络状态的导航聚合切换
> - [x] 可切换白天和夜晚模式
> - [x] 动态网页title [一言和天气]
> - [x] 丰富的随机动画效果 [使用animate.css]
> - [ ] 隐私导航页 [密码验证或登录验证]
> - [ ] 搜索框 [添加后可作为浏览器首页]
> - [ ] 后台管理
> - [ ] 使用数据库存储配置信息
> - [ ] ~~更换后端工具~~
> - [ ] ......
 
## 食用方式：
> 1. 克隆到本地后cd到Nav目录，依次运行 `npm install` -> `vue build` ( 请先到[和风天气](https://dev.qweather.com/)获取自己token，替换 `/Nav/src/components/Weather/index.vue`里config的key参数里后再进行构建操作 )
> 2. 将打包后的dist目录扔进navServer目录，cd到navServer目录依次运行 `npm install` -> `node app.js`
>
> 3. 说明：
> > 1. 默认端口为8082，可自行修改app.js
> > 2. 配置文件在 `/navServer/public`,三个json文件，对应三种网络状态
> > 3. 图标文件在 `/navServer/dist/icons`
