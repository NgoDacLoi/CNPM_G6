import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Home from './home';

const rous = (  
  <Router>  
  <div>  
  <Route exact path="/" component={App} />  
  <Route path="/home" component={Home} />  
  </div>  
  </Router>  
  )  
  ReactDOM.render(rous, document.getElementById('root'));

