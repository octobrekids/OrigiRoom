import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import adminRouter from "./AdminRouter";
import userRouter from "./UserRouter";

function App() {
  return (
    <React.Fragment>
      <Route path={"/user"} component={userRouter} />
      <Route path={"/admin"} component={adminRouter} />
    </React.Fragment>
  );
}

export default App;
