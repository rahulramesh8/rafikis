import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../containers/home-page/home-page.container";
import NotFound from "../components/not-found/not-found.component";

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </main>
);

export default Routes;
