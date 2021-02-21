import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Perfil from "../containers/Perfil";
import NotFound from "../containers/NotFound";
import Layout from "../containers/Layout";

// probando rama login

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profesores/:profesorId" component={Perfil}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
 