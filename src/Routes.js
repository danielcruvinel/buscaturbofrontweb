import React from "react";
import { Switch, Route } from "react-router-dom";

import home from "./components/pages/home/";
import negocios from "./components/pages/negocios";
import veiculos from "./components/pages/veiculos";
import imoveis from "./components/pages/imoveis";
import cadastro from "./components/pages/cadastro";
import login from "./components/pages/login";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/negocios" component={negocios} />
      <Route path="/veiculos" component={veiculos} />
      <Route path="/imoveis" component={imoveis} />
      <Route path="/cadastro" component={cadastro} />
      <Route path="/login" component={login} />
    </Switch>
  );
};
