import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import MyAccount from './Components/MyAccount/MyAccount';
import Search from './Components/Search/search';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/search' component={Search}/>
                <Route path='/myaccount' component={MyAccount}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();


