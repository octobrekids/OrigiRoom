import React, { Component } from "react";
import { Row, Col, Card, Icon, Radio } from "antd";


export default class ExtraForm extends Component {


  handleSubmit = () =>
  new Promise((resolve, reject) => {
    this.props.form.validateFields((err, values) => {
      if (err) return reject(err);
      console.log("Received values of form: ", values);
      resolve({ stage: 2, ...values });
    });
  });

handleStatus = () => {
  this.props.form.validateFields((err, values) => {
    if (err) return this.props.onType({ status: false, values });
    return this.props.onType({ status: true, values });
  });
};


  render() {
    console.log('jubjub',this.props.room)
    return (
      <div style={{ marginLeft: "10%" }}>
        <h1>2) Extras</h1>
        <Row>
          {" "}
          <span>
            <b>Capacity</b>
          </span>
        </Row>
        <Row style={{ marginBottom: "10px" }}>
          <span> Floor Size: {this.props.room.size} </span>{" "}
        </Row>

        <Row gutter={16} style={{paddingBottom:'20px',paddingRight:'10px'}}>
            <Col span={6}>
              <Card className="extra" bordered={false} >
                <Row>
                  <Col span={8}>
                    <Icon type="disconnect" className="iconExtra" />
                  </Col>
                  <Col span={16}>
                    <Row>
                      <span>
                        <b>wtf</b>
                      </span>
                    </Row>
                    <Row>
                      <span>Standing</span>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card className="extra" bordered={false}>
                <Row>
                  <Col span={8}>
                    <Icon type="disconnect" className="iconExtra" />
                  </Col>
                  <Col span={16}>
                    <Row>
                      <span>
                        <b>wtf</b>
                      </span>
                    </Row>
                    <Row>
                      <span>Standing</span>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
            <Card className="extra" bordered={false}>
              <Row>
                <Col span={8}>
                  <Icon type="disconnect" className="iconExtra" />
                </Col>
                <Col span={16}>
                  <Row>
                    <span>
                      <b>wtf</b>
                    </span>
                  </Row>
                  <Row>
                    <span>Standing</span>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
          <Card className="extra" bordered={false}>
            <Row>
              <Col span={8}>
                <Icon type="disconnect" className="iconExtra" />
              </Col>
              <Col span={16}>
                <Row>
                  <span>
                    <b>wtf</b>
                  </span>
                </Row>
                <Row>
                  <span>Standing</span>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
        </Row>

      
          
      </div>
    );
  }
}
