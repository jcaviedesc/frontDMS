import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import PrivateRoute from '../src/components/privateRoute';

// containers
import LoginPage from '../src/containers/LoginPage';
import HomePage from '../src/containers/HomePage';

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            {/* <Route path="/register" component={RegisterPage} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

