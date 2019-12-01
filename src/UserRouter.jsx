import React from "react";
import { Switch, Route } from "react-router-dom";
import Reservation from "./components/pages/Reservation";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import searchRoom from "./components/pages/SearchRoom";
import Login from "./components/pages/Login";
import roomDetail from "./components/pages/RoomDetail";
import confirmRegister from "./components/pages/ConfirmRegister";
import Guard from "./components/Guard";

export default function UserRouter() {
  return (
    <Switch>
      <Route path={"/user/login"} component={Login} />
      <Route exact path={"/user"} component={Home} />
      <Route path={"/*/searchRoom"} component={searchRoom} />
      <Route path={"/*/roomdetail"} component={roomDetail} />
      <Route path={"/*/register"} component={Register} />
      <Route path={"/*/confirmRegister"} component={confirmRegister} />
      <Route path={"/*/reserve"} component={Reservation} />
    </Switch>
  );
}

// export default withRouter(UserRouter);
// export default UserRouter
