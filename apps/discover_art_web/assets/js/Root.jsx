import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Checkins from './Checkins';
import MapPage from './MapPage';
import { UserProvider } from './UserProvider';

const Root = () => (
  <>
    <BrowserRouter>
      <UserProvider>
        <Switch>
          <Route exact path="/Login" component={ Login }/>
          <Route exact path="/Profile" component={ Profile }/>
          <Route exact path="/Checkins" component={ Checkins }/>
          <Route exact path="/Map" component={ MapPage }/>
          <Route exact path="/" component={ MapPage }/>
        </Switch>
      </UserProvider>
    </BrowserRouter>
  </>
);

export default Root;
