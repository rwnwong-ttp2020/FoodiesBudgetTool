import React from 'react';
import Navbar from '../src/components_BM/Navbar';
import './App_BM.css';
import Home from '../src/components_BM/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from '../src/components_BM/pages/Services';
import Products from '../src/components_BM/pages/Products';
import SignUp from '../src/components_BM/pages/SignUp';

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
