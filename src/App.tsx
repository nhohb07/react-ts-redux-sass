import * as React from 'react';
import './styles/App.css';

import { Home } from './modules';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
