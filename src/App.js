import React from "react";
// import logo from "./logo.svg";
import "./App.css";



import { Route, Switch } from "react-router-dom";
import Reservation from "./components/pages/Reservation";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import searchRoom from "./components/pages/SearchRoom";
import Login from "./components/pages/Login";

function App() {
  return (
    
    <Switch>
  
      <Route exact path={"/"} component={Home}/>
      <Route path={"/search-room"} component={searchRoom}/>
      <Route path={"/register"} component={Register} />
      <Route path={"/reserve"} component={Reservation} />
      <Route path={"/login"} component={Login} />
    </Switch>
  );
}

export default App;
