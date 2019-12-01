import React from "react";
import { Row, Col, Card } from "antd";

function selected(s) {
  return s
    ? { marginTop: 16, background: "red" }
    : { marginTop: 16, background: "" };
}

export default function OptionCard(props) {
  return (
    <Col span={10}>
      <Card className="extra" style={selected(props.selected)} bordered={false}>
        <Row>
          <Col span={8}>
            <img src={props.data.icon} className="iconExtra" />
          </Col>
          <Col span={16}>
            <Row>
              <span>
                <b>{props.data.label}</b>
              </span>
            </Row>
            <Row>
              <span>{props.data.n}</span>
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
