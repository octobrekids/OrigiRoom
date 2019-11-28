import React, { Component } from "react";
import { Row, Col, Card, Icon, Radio } from "antd";

const data = [{
    label: 'testja',
    icon: '1.png',
    n: 10
}]



export default class ExtraForm extends Component {

    onCardClick = () => {

    }




  render() {
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
          <span> Floor Size: ไซส์ห้องแงๆๆๆ</span>{" "}
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
