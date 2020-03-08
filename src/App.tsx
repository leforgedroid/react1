import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";

import { Header } from "./components/header";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Users } from "./pages/users";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
