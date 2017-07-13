import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import MyAccount from './Components/MyAccount/MyAccount';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/MyAccount' component={MyAccount}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
