import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Navigation from './Navigation'
import NotLoggedIn from './notLoggedin';

class App extends Component {
  loggedIn = !false

  render = () => {
    var loggedIn = this.loggedIn
    return (
      <div className="App">
        <header className="App-header">
          {/* https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route path='/about/:id/:order' component={About} />
            <Route exact path="/" render={() => {
              return loggedIn ? <Redirect to="/home" /> : <NotLoggedIn />
            }} />
          </Switch>
          <Navigation></Navigation>
        </header>
      </div>
    );
  }
}

export default App;
