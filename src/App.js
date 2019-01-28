import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Login from './containers/login/login';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React App </h1>
        <BrowserRouter>
          <Switch>
            <Route  path="/login" name="Login" component={Login} />
            <Route path="/" name="Auth" component={AuthLayout} />
          </Switch>
        </BrowserRouter>

      </div>

    );
  }
}

export default App;
