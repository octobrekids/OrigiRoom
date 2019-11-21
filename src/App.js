import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Reservation from "./components/pages/Reservation";
import Reservation2 from "./components/pages/Reservation2";

function App() {
  return (
    <Switch>
      <Route path={"/reserve"} component={Reservation} />
      <Route path={"/reserve2"} component={Reservation2} />
    </Switch>
  );
}

export default App;
