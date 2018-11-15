import './config/reactotron';
import React from 'react';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

import initStore from '../src/reducers';

// Router
import Route from '../src/router'

const history = createBrowserHistory();
//initial store
const store = initStore(history);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App

