import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './scss/index.scss';

import store from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root') as HTMLElement);

registerServiceWorker();
