import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home"
import Navigation from "./layout/Navigation"
import Reservation from "./pages/Reservation"

const App = () => 
(
  <Router>
    <div>
  <Navigation/>
  <Route exact path='/' component={Home}/>
  <Route path='/reservations' component={Reservation}/>
  </div>
</Router>
);


export default App;
