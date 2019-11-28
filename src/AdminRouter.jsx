import React from "react";
import { Switch, Route } from "react-router-dom";
import adminLogin from "./components/pages/admin/Login";

export default function AdminRouter() {
  return (
    <Switch>
      <Route path={"/admin/login"} component={adminLogin} />
    </Switch>
  );
}
