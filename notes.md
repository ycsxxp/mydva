dva

index.js 启动dva框架

router.js 定义动态路由,每个路由中require各自的 models模块
	* childRoutes 定义app所有子路由
	* 通过children传递到 layout.js 渲染出子路由请求的组件

/routes/nfapp.js nfapp模块的实现  
	1.使用require组件来渲染页面
	2.定义action 封装为 loginProps传递到对应组件 Login (from './components/Login/nfapp.js')

/models/nfapp.js nfapp模块的 model
	* 在index.js中启动app时 app.model(require('./models/nfapp')) 加载
	* 定义当前模块的state
	* effects中对dispatch每个action
	* require(/services/nfapp.js) 执行action对应的api请求
	* reducers返回effects之后的state

/services/nfapp.js
	1.定义 nfapp模块中 action 请求的 api

/components/Login/nfapp.js
	1.nfapp模块引入的组件
	2.调用/routes/nfapp.js传递来的action
