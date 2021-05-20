import {React, useState} from 'react';
import Navbar from './Navbar';
import './App_BM.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Map from './pages/Map';
import Chat from "./pages/Chat";
import CalBudget from '../Calculator/CalBudget'

function App(props) {

  console.log(props.userName);
  return (
    <>
      <Router>
        <Navbar userName = {props.userName} handleLogout={props.handleLogout}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/map' component={Map} />
          <Route path='/calculate' component={CalBudget} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
