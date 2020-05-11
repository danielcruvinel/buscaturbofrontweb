import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/";
import Sobre from "./pages/Sobre/";
import NotFound from "./pages/NotFound";

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/sobre">
        <Sobre />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
