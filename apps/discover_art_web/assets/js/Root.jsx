import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Checkins from './Checkins';

const Root = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login }/>
        <Route exact path="/Profile" component={ Profile }/>
        <Route exact path="/Checkins" component={ Checkins }/>
      </Switch>
    </BrowserRouter>
  </>
);

export default Root;
