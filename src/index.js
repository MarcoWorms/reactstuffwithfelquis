import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import NoMatch from './NoMatch'
import Home from './Home'
import Login from './Login'

import './index.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="login" component={Login}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);

