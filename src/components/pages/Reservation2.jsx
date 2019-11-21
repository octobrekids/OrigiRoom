import React from "react";
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function Reservation2() {
  return (
    <React.Fragment>
      <Layout style={{minHeight:'100vh'}}>
        <Sider style={{backgroundColor:'#096dd9'}}>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}
