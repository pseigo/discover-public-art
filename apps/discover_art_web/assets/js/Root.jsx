import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';

const Root = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login }/>
        <Route exact path="/" component={ Profile }/>
      </Switch>
    </BrowserRouter>
  </>
);

export default Root;
