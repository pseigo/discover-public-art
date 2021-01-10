import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Checkins from './Checkins';
import Register from './Register';

const Root = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login }/>
        <Route exact path="/Profile" component={ Profile }/>
        <Route exact path="/Checkins" component={ Checkins }/>
        <Route path="/Register" component={ Register }/>
      </Switch>
    </BrowserRouter>
  </>
);

export default Root;
