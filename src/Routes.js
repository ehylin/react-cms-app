import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home, Error, NotFound, StartHere, Blog } from './screens';
import { Header, Footer } from './components';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/startHere" component={StartHere} />
        <Route path="/blog" component={Blog} />
        <Route exact path="/error" component={Error} />
        <Route exact path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}