import React from 'react'
import { Layout, Menu, Row, Col } from "antd";
import logo from "../logo-origi.svg";
import User from './data/User'
import {withRouter} from 'react-router-dom'
const { Header } = Layout;


 function AdminNavbar(props) {
  function logout() {
    User.logout()
    return props.history.push('/user/login')
  }
    return (
        <div>
        <Layout >
        <Header className="header">
        

        <div className="logo"><img src={logo} alt="logo"/></div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            style={{ lineHeight: "65px", border:"0px", background: "#fff" }}
          >
        
            <Menu.Item key="1"><a href="/user/">Home</a></Menu.Item>
            <Menu.Item key="2"><a href="/user/search-room">Search Room</a></Menu.Item>

            <Menu.Item onClick={logout} key="3">Logout</Menu.Item>
         
          </Menu>
          
        </Header>
      </Layout>
        </div>
    )
}
export default withRouter(AdminNavbar)