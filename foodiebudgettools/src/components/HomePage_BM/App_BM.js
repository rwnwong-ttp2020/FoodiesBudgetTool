import React from 'react';
import Navbar from './Navbar';
import './App_BM.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';

function App(props) {
  return (
    <>
      <Router>
        <Navbar userName = {props.userName}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
