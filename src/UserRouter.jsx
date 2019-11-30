import React from "react";
import { Switch, Route } from "react-router-dom";
import Reservation from "./components/pages/Reservation";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import searchRoom from "./components/pages/SearchRoom";
import Login from "./components/pages/Login";
import roomDetail from "./components/pages/RoomDetail";


export default function UserRouter() {
  return (
   
    <Switch>
    
      <Route path={"/*/search-room"} component={searchRoom} />
      <Route path={"/*/register"} component={Register} />
      <Route path={"/*/login"} component={Login} />
      <Route path={"/*/reserve"} component={Reservation} />
      <Route path={"/*/reserve"} component={Reservation} />
      <Route path={"/*/roomdetail"} component={roomDetail} />
      <Route exact path={"*/"} component={Home} />
    </Switch>
  );
}

// export default withRouter(UserRouter);
// export default UserRouter
