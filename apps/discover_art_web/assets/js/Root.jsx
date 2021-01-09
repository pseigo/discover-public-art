import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Root = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HelloWorld } />
      </Switch>
    </BrowserRouter>
  </>
);

const HelloWorld = () => (
  <div>
    <h1>Discover Public Art</h1>
    <p>Welcome to React!</p>
  </div>
);

export default Root;
