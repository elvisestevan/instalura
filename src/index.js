import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from "./components/Login";
import "./css/login.css";
import "./css/reset.css";
import "./css/timeline.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(  
(
  <Router>
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/timeline" component={App} />
    </Switch>
  </Router>    
), document.getElementById('root'));
