import React from "react";
import { Layout, Menu } from "antd";
import logo from "./logo-origi.svg";

const { Header } = Layout;

export default function Navbar() {
  return (
    <div>
      <Layout>
        <Header className="header">
        <div className="logo"><img src={logo}/></div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            style={{ lineHeight: "64px", background: "#fff" }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Search Room</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}
