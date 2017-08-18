import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import MyAccount from './Components/MyAccount/MyAccount';
import VideoTab from './Components/Video/Video-Tab';
import About from './Components/About/About';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/video' component={VideoTab}/>
                <Route path='/myaccount' component={MyAccount}/>
                <Route path='/about' component={About}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();


