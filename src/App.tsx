import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Spinner } from './components';
import {
  Home,
  Login,
} from './modules';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Spinner />
      </div>
    );
  }
}

export default App;
