import * as React from 'react';
import './styles/App.css';

import { Route, Switch } from 'react-router-dom';

import {
  Home,
  Login,
} from './modules';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    );
  }
}

export default App;
