import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Login from './Login';
import * as serviceWorker from './serviceWorker';
import DashboardNew from './Dashboard/DashboardNew';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={App} />
            {/* <Route path="/dashboard" component={DashboardNew} /> */}
        </Switch>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
