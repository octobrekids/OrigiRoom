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
  if (data["guestnumber"]) forms["guestnumber"] = data["guestnumber"];
  if (data.capacity) forms.capacity = data.capacity;
  if (data.equipment) forms.equipment = data.equipment;
  if (data.catering) forms.catering = data.catering;
  if (data.firstName) forms.firstName = data.firstName;
  if (data.lastName) forms.lastName = data.lastName;
  if (data.companyEmail) forms.companyEmail = data.companyEmail;
  if (data.Mobile) forms.Mobile = data.Mobile;

  if (data.companyName) forms.companyName = data.companyName;
  if (data.contactPerson) forms.contactPerson = data.contactPerson;
  if (data.fullInvoice) forms.fullInvoice = data.fullInvoice;
  if (data.vatNumber) forms.vatNumber = data.vatNumber;

  if (data.Email) forms.Email = data.Email;
  if (data.cardholderName) forms.cardholderName = data.cardholderName;
  if (data.cardNumber) forms.cardNumber = data.cardNumber;
  if (data.expiredDate) forms.expiredDate = data.expiredDate;
  if (data.cvv) forms.cvv = data.cvv;

  return {
    ...prevStateForm,
    ...forms
  };
}
function totalPrice(forms, room) {
  // const nOfGuest = Number(forms.guestnumber);
  // console.log("total n guest", nOfGuest);
  // if (!nOfGuest) return;
  // // const keys = Object.keys(forms);
  // const calc = ["catering", "equipment"];
  // const total = calc.reduce((acc, e) => {
  //   const data = forms[e];
  //   console.log('total data', data)
  //   if (Array.isArray(data)) {
  //     const subPrice = data.reduce((accx, x) => accx + x.price * x.n, 0);
  //     return subPrice;
  //   } else {
  //     const price = acc + (data && data.price * nOfGuest)
  //     console.log('total catering', price)
  //     return price;
  //   }
  // }, 0);
  let total = 0;
  total += (room.pricing && room.pricing.price) || null;
  total +=
    Number(forms.guestnumber) *
    ((forms.catering && Number(forms.catering.price)) || null);
  const equipment = forms.equipment
    .map(p => Number(p.n) * Number(p.price))
    .reduce((acc, e) => acc + Number(e), 0);
  total += equipment;
  total += 500;
  console.log("total price", total);
  return total;
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
      // "check-in": null,
      // "check-out": null,
      guestnumber: "",
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
      // specialNote: "",
      Email: "",
      cardholderName: "",
      cardNumber: "",
      expiredDate: "",
      cvv: "",
      price: 0
    },
    stage: 0,
    next: false,
    room: ""
  };
  onTotal = e => {
    console.log("total price", e);
    return this.setState(prevState => {
      return {
        total: e
      };
    });
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
    if (stage === 5) return this.props.history.push("/user/");

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
          // forms: dataParsing(prevState.forms, values),
          forms: {
            ...dataParsing(prevState.forms, values),
            price: totalPrice(this.state.forms, this.state.room)
          }
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
                          data={this.state.forms}
                        />
                      </Col>
                    </Row>
                  </Col>
                   
                  
                  <Col
                    span={7}
                    style={{backgroundColor:'#1890ff', minHeight:window.innerHeight}}
                  >
                
                    <Sidebar
                    
                      data={this.state.forms}
                      stage={this.state.stage}
                      room={this.state.room}
                    />
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
