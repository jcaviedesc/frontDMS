import './config/reactotron';
import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';

import initStore from '../src/reducers';

// components
import PrivateRoute from '../src/components/privateRoute';

// containers
import LoginPage from '../src/containers/LoginPage';
import HomePage from '../src/containers/HomePage';

const history = createBrowserHistory();
const store = initStore();

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

export default App;

