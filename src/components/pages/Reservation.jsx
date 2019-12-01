import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import MultiTabs from "../Reservation/MultiTabs";
import TabTimeline from "../Reservation/TabTimeline";
import api from "../api/reservation";
import { Layout } from "antd";
import Sidebar from "../Reservation/Sidebar";
import queryString from "querystring";
import { withRouter } from "react-router-dom";
import RoomData from "../data/Room";

const { Footer, Content } = Layout;

function dataParsing(prevStateForm, data) {
  let forms = {};
  if (data["checkin-picker"])
    forms["checkin-picker"] = data["checkin-picker"].format("YYYY-MM-DD");
  if (data["checkout-picker"])
    forms["checkout-picker"] = data["checkout-picker"].format("YYYY-MM-DD");
  if (data["guest-number"]) forms["guest-number"] = data["guest-number"];
  if (data.capacity) forms.capacity = data.capacity;
  if (data.equipment) forms.equipment = data.equipment;
  if (data.catering) forms.catering = data.catering;

  return {
    ...prevStateForm,
    ...forms
  };
}

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.formData = React.createRef();
  }

  componentDidMount() {
    const qs = this.props.history.location.search;
    const id = queryString.parse(qs)["?id"];
    const room = RoomData.getRoom(id);
    this.setState(prevState => {
      return {
        ...prevState,
        room
      };
    });
  }

  state = {
    welcome: "welcom text jaaaa",
    page: "0",
    forms: {
      "check-in": null,
      "check-out": null,
      "guest-number": "",
      capacity: "",
      catering: null,
      equipment: [],
      firstName: "",
      lastName: "",
      companyEmail: "",
      Mobile: "",
      companyName: "",
      contactPerson: "",
      fullInvoice: "",
      vatNumber: "",
      specialNote: "",
      Email: "",
      cardholderName: "",
      cardNumber: "",
      expiredDate: "",
      CVV: ""
    },
    stage: 0,
    next: false,
    room: ""
  };

  onNext = async () => {
    // check validation before go next
    const stage = await this.getFormData();
    console.log("form validation next", stage);

    // if (!stage) return;
    // if(stage < 0) {
    //   return this.setState(prevState => {
    //     return {
    //       ...prevState,
    //     }
    //   })
    // }
    if (stage < 0) return;

    this.setState(prevState => {
      let n = Number(this.state.page);

      return {
        ...prevState,
        page: String(++n),
        stage
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

  getFormData = () =>
    new Promise((resolve, reject) => {
      this.formData.current
        .handleSubmit()
        .then(values => {
          console.log("get form data", values);
          this.setState(
            prevState => {
              return {
                ...prevState,
                // forms: {
                //   ...values,
                //   "checkin-picker": values["checkin-picker"].format(
                //     "YYYY-MM-DD"
                //   ),
                //   "checkout-picker": values["checkin-picker"].format(
                //     "YYYY-MM-DD"
                //   )
                // },
                forms: dataParsing(prevState.forms, values),
                next: true
              };
            },
            () => {
              console.log("form updated", this.state);
              resolve(values.stage);
            }
          );
          // return values.stage;
        })
        .catch(err => {
          console.log("form data not valid", err);
          // return -1;
          this.setState(
            prevState => {
              return {
                ...prevState,
                next: false
              };
            },
            () => resolve(-1)
          );
        });
    });

  onSendAPI = () => {
    api.send(this.state.forms);
  };

  onType = ({ status, values }) => {
    console.log("on type naa");
    console.log(status, values);
    if (status) {
      return this.setState(prevState => {
        return {
          ...prevState,
          next: true,
          forms: dataParsing(prevState.forms, values)
        };
      });
    } else {
      return this.setState(prevState => {
        return {
          ...prevState,
          next: status,
          forms: dataParsing(prevState.forms, values)
        };
      });
    }
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
                        <MultiTabs
                          onType={this.onType}
                          page={this.state.page}
                          ref={this.formData}
                          room={this.state.room}
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
                    <Sidebar data={this.state.forms} stage={this.state.stage} />
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
                <Button
                  onClick={this.onNext}
                  type={this.state.next ? "primary" : "disabled"}
                >
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
export default withRouter(Reservation);
