import React from 'react'
import { Layout, Menu, Row, Col } from "antd";
import logo from "../logo-origi.svg";

const { Header } = Layout;

export default function AdminNavbar() {
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

            <Menu.Item key="3">Login</Menu.Item>
         
          </Menu>
          
        </Header>
      </Layout>
        </div>
    )
}
