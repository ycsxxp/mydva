import dva from 'dva';
import { browserHistory } from 'dva/router'
import './index.css';

// 1. Initialize
// const app = dva();
const app = dva({
	history: browserHistory
  // onError(e) {
  //   message.error(e.message, ERROR_MSG_DURATION);
  // }
	// initialState: {
	// 	products: [
	// 		{ name: 'dva', id: 1, comment: 'this is comment' },
	// 		{ name: 'antd', id: 2, comment: 'this is comment too' }
	// 	]
	// }
});

// 2. Plugins
// app.use({});
app.model(require('./models/nfapp'))
// app.model(require("./models/app"));
// 3. Model
// app.model(require('./models/example'));
// app.model(require('./models/products'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
