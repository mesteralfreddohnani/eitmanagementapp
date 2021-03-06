import React from "react";
import { Router, Route, Switch } from "react-router";

import { createBrowserHistory } from "history";

// Route components
import App from "../../ui/App";
import EitForm from '../../ui/components/EitForm/EitForm.component';
import UpdateEitForm from "../../ui/components/UpdateEitForm/UpdateEit.component";

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
      <Route exact path="/" component={App} />
      <Route exact  path="/new" component={EitForm} />
      <Route exact  path="/edit/:id" component={UpdateEitForm} />
  </Router>
);
