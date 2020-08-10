import dva from 'dva';
import routers from './router';
import appModel from './models/app';
import { createBrowserHistory as createHistory } from 'history';
import 'antd/dist/antd.css';
import './index.less';

const history = createHistory();
let app = null

app = dva({
    history,
    onError(error) {
    },
})
// 2. Plugins
// app.use({});

// 3. Model
app.model(appModel)

// 4. Router
app.router(routers);
// 5. Start
app.start('#superRoot');