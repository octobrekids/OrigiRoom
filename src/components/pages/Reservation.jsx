import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import MultiTabs from "../Reservation/MultiTabs";
import TabTimeline from "../Reservation/TabTimeline";
import api from "../api/reservation";
import { Layout } from "antd";
import logo from "../logo-origi.svg";


const { Header, Footer, Sider, Content } = Layout;

export default class Reservation extends Component {
  state = {
    welcome: "welcom text jaaaa",
    page: "0",
    forms: {}
  };

  onNext = () => {
    this.setState(prevState => {
      let n = Number(this.state.page);
      return {
        ...prevState,
        page: String(++n)
      };
    });
  };

  onPrev = () => {
    this.setState(prevState => {
      let n = Number(this.state.page);
      return {
        ...prevState,
        page: String(--n)
      };
    });
  };

  onForm = data => {
    console.log("data forms", data);
    this.setState(
      prevState => {
        return {
          ...prevState,
          forms: data
        };
      },
      () => {
        this.onSendAPI();
      }
    );
  };

  onSendAPI = () => {
    api.send(this.state.forms);
  };

  render() {
    console.log("cur states reservation", this.state);
    return (
      <React.Fragment>
        <Layout>
          <Layout>
            <Layout>
              <Content style={{ backgroundColor: "white" }}>
                <Row>
                  <Col xs={17}>
                  <Row type="flex" justify="center">
                      <Col xs={20} style={{ marginTop: "20px" }}>
                      <img src={logo} className="logo-origi" alt="logo" />
                      </Col>
                    </Row>
                    <Row type="flex" justify="center">
                      <Col xs={20} style={{ marginTop: "20px" }}>
                        <TabTimeline page={Number(this.state.page)} />
                      </Col>
                    </Row>
                    <Row type="flex" justify="center">
                      <Col xs={20}>
                        <MultiTabs
                          page={this.state.page}
                          onSubmit={this.onForm}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    xs={7}
                    style={{
                      backgroundColor: "#1890ff",
                      minHeight: "100vh"
                    }}
                  >
                    eieu
                  </Col>
                </Row>
              </Content>
            </Layout>
          </Layout>
          <Footer>
            <Row type="flex" justify="space-between">
              <Col span={20}>
            {Number(this.state.page) > 0 ? (
              <Button onClick={this.onPrev} type={"default"}>
                Back
              </Button>
            ) : null}
            </Col>
            <Col span={1}>
            <Button onClick={this.onNext} type={"primary"}>
              Next
            </Button>
            </Col>
            </Row>
          </Footer>
        </Layout>

        {/* <Row>
          <Col span={16}>
            euei
            <Row>
              <TabTimeline page={Number(this.state.page)} />
            </Row>
            <Row>
              <MultiTabs page={this.state.page} onSubmit={this.onForm}/>
            </Row>
          </Col>
          <Col span={8} style={{backgroundColor: '#1890ff', minHeight: window.innerHeight}}>eieu</Col>
        </Row> */}
        {/* <Row justify={"end"}>
          <Col>
            {Number(this.state.page) > 0 ? (
              <Button onClick={this.onPrev} type={"default"}>Back</Button>
            ) : null}
            <Button onClick={this.onNext} type={"primary"}>
              Next
            </Button>
          </Col>
        </Row> */}
      </React.Fragment>
    );
  }
}
