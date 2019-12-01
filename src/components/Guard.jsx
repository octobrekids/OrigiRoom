import React from "react";
import User from "./data/User";
import { withRouter } from "react-router-dom";

function Guard(props) {
  const auth = User.getAuth();
  if (!auth) props.history.push("/user/login");
  return (props.children);
}
export default withRouter(Guard);
