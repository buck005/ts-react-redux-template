import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
// 3.第三步把 Router 替换成 ConnectedRouter
import history from './store/history';
console.log('store=>', store)
ReactDOM.render(
    // Provider react-reduct 提供商，连接仓库
    <Provider store={store}>
        {/* <Router> */}
        <ConnectedRouter history={history}>
            <React.Fragment>
                <Link to='/'>counter1</Link>
                <Link to='/2'>counter2</Link>
                <Route exact path='/' component={Counter1} />
                <Route exact path='/2' component={Counter2} />
            </React.Fragment>
        </ConnectedRouter>
        {/* </Router> */}
    </Provider>
    , document.getElementById('root'));
