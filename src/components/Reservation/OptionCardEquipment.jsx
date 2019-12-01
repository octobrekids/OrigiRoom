import React from "react";
import { Row, Col, Card, InputNumber } from "antd";

function selected(s) {
  return s
    ? { marginTop: 16, boxShadow: "1px 1px 10px 1px #1890ff" }
    : { marginTop: 16, background: "" };
}

export default function OptionCard(props) {
  function onDataChange(e) {
    props.onChange({...props.data, n:e})
  }
  return (
    <Col span={10}>
      <Card onClick={onDataChange} className="extra" style={selected(props.selected)} bordered={false}>
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
              <span>{props.data.n} Baht</span>
            </Row>
            <Row>
            <InputNumber onChange={onDataChange} min={0} max={props.maximum}/>
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
