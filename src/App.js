import './config/reactotron';
import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { withRouter } from 'react-router-dom'

import reducers from '../src/reducers';
import initStore from '../src/store'
import sagas from '../src/sagas'

// components
import PrivateRoute from '../src/components/privateRoute';

// containers
import LoginPage from '../src/containers/LoginPage';
import HomePage from '../src/containers/HomePage';

const history = createBrowserHistory();
const rootReducer = reducers(history);
const store = initStore(rootReducer, sagas, history)
console.tron.log('stores',store.getState())

console.tron.log("app.js history",history)
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
          <Router history={history}>
            <div>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              {/* <Route path="/register" component={RegisterPage} /> */}
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App

