// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../App.scss';
// components
import PrivateRoute from '../components/privateRoute';

// containers
import LoginPage from '../containers/LoginPage';
import HomePage from '../containers/HomePage';
import { RegisterPage } from '../containers/RegisterPage';
import { DashboardPage } from '../containers/DashBoard';
import { DocumentPage } from '../containers/DocumentPage';



const ConnectedSwitch = connect()(Switch);



const Router = () => (
  <div className="App">
    <ConnectedSwitch>
      <PrivateRoute exact path="/" component={HomePage} />
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/document" component={DocumentPage} />
    </ConnectedSwitch>
  </div>
);

// const mapStateToProps = state => ({
// });

// const mapDispatchToProps = dispatch => ({
// });

const RouterContainer = withRouter(Router);

export default RouterContainer;
