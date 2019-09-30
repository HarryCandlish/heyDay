import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home"
import Navigation from "./layout/Navigation"

const App = () => 
(
  <Router>
    <div>
  <Navigation/>
  <Route exact path='/' component={Home}/>
  </div>
</Router>
);


export default App;
