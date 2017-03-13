dva

index.js 启动dva框架

router.js 定义动态路由,每个路由中require各自的 models模块
	* childRoutes 定义app所有子路由
	* 通过children传递到 layout.js 渲染出子路由请求的组件

/routes/nfapp.js nfapp模块的实现  
	* 使用require组件来渲染页面
	* 定义action 封装为 loginProps传递到对应组件 Login (from './components/Login/nfapp.js')
	* 通过 connect 绑定 models 中对应模块的 namespace 如下
		export default connect(({ nfapp }) => ({ nfapp }))(Nfapp)
		nfapp 为 models/nfapp.js 中的 namespace: 'nfapp'
	*

/models/nfapp.js nfapp模块的 model
	* 在index.js中启动app时 app.model(require('./models/nfapp')) 加载
	* 定义当前模块的state
	* effects中对dispatch每个action
	* require(/services/nfapp.js) 执行action对应的api请求
	* reducers返回effects之后的state
	* subscriptions 中 setup 设置组件被请求时调用API

/services/nfapp.js
	* 定义 nfapp模块中 action 请求的 api

/components/Login/nfapp.js
	* nfapp模块引入的组件
	* 调用/routes/nfapp.js传递来的action

注意
	* 引入的组件如果是要在标签中使用 命名一定要大写开头 如下
		import WebAccount from './components/webAccount'
		<WebAccount />
