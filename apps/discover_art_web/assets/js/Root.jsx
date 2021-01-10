import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Checkins from './Checkins';
<<<<<<< HEAD
import Register from './Register';
=======
import MapPage from './MapPage';
>>>>>>> Add route to map

const Root = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login }/>
        <Route exact path="/Profile" component={ Profile }/>
        <Route exact path="/Checkins" component={ Checkins }/>
<<<<<<< HEAD
        <Route path="/Register" component={ Register }/>
=======
        <Route exact path="/Map" component={ MapPage }/>
>>>>>>> Add route to map
      </Switch>
    </BrowserRouter>
  </>
);

export default Root;
