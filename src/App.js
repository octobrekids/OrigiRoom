import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Reservation from "./components/pages/Reservation";
import Register from "./components/pages/Register";

function App() {
  return (
    <Switch>
      <Route path={"/register"} component={Register} />
      <Route path={"/reserve"} component={Reservation} />
    </Switch>
  );
}

export default App;
