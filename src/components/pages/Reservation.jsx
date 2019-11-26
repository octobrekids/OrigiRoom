import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import MultiTabs from "../Reservation/MultiTabs";
import TabTimeline from "../Reservation/TabTimeline";
import api from "../api/reservation";
import { Layout } from "antd";
import Sidebar from "../Reservation/Sidebar";

const { Footer, Content } = Layout;

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    this.formData = React.createRef();
  }

  state = {
    welcome: "welcom text jaaaa",
    page: "0",
    forms: {}
  };

  onNext = async () => {
    // check validation before go next
    const valid = await this.getFormData();
    console.log("form validation next", valid);
    // if (!stage) return;

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

  // onForm = data => {
  //   console.log("data forms", data);
  //   this.setState(
  //     prevState => {
  //       return {
  //         ...prevState,
  //         forms: data
  //       };
  //     },
  //     () => {
  //       this.onSendAPI();
  //     }
  //   );
  // };

  getFormData = async () => {
    // let stage = 1;
    this.formData.current
      .handleSubmit()
      .then(values => {
        console.log("get form data", values);
        this.setState(
          prevState => {
            return {
              ...prevState,
              forms: {
                ...values,
                "checkin-picker": values["checkin-picker"].format("YYYY-MM-DD"),
                "checkout-picker": values["checkin-picker"].format("YYYY-MM-DD")
              }
            };
          },
          () => {
            console.log("form updated", this.state);
          }
        );
        // return values.stage;

      })
      .catch(err => {
        console.log("form data not valid", err);
        return -1;
      });
  }

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
                        <TabTimeline page={Number(this.state.page)} />
                      </Col>
                    </Row>
                    <Row type="flex" justify="center">
                      <Col xs={20}>
                        <MultiTabs page={this.state.page} ref={this.formData} />
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
                    <Sidebar data={this.state.forms} />
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
      </React.Fragment>
    );
  }
}
