import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import List from './pages/list'
import Set from './pages/set'

class App extends Component {
  render() {
    return(
      <Router>
        <Route exact path='/' component={List} />
        <Route path='/set' component={Set} />
      </Router>
    )
  }
}

export default App;
