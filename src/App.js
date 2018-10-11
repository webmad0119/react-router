import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about/:id/:order' component={About} />
          </Switch>
          <Navigation></Navigation>


        </header>
      </div>
    );
  }
}

export default App;
