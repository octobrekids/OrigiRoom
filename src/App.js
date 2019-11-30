import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import adminRouter from "./AdminRouter";
import userRouter from "./UserRouter";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    permission: "user"
  };

  componentDidMount() {
    let params = this.props.history.location.pathname;
    params = params.split("/");
    const user = params.includes("user");
    if (!user) {
      return this.setState(prevState => {
        return {
          ...prevState,
          permission: "admin"
        };
      });
    }
    return this.setState(prevState => {
      return {
        ...prevState,
        permission: "user"
      };
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar permission={this.state.permission} />
        <Route path={"/user"} component={userRouter} />
        <Route path={"/admin"} component={adminRouter} />
      </React.Fragment>
    );
  }
}
export default withRouter(App);
