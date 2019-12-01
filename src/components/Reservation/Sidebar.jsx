import React from "react";
import { Row, Col } from "antd";

export default function Sidebar(props) {
  // console.log('props',props.data);
  console.log("props", props.room);
  const form = props.data;
  const room = props.room;

  let total = 0;

  // total += Number(form.guestnumber) * (form.catering && Number(form.catering.price) || null);
  // const equipment = form.equipment.map(p => (Number(p.n) * Number(p.price))).reduce((acc, e) => acc + Number(e), 0)
  // total += equipment

  // console.log('total', total)
  return (
    <div>
      <Row type="flex" justify="center">
        <Col span={20} style={{ marginTop: "10%" }}>
          <h1 className="sidebar">BOOKING RECAP</h1>
          {props.stage >= 0 ? (
            <React.Fragment>
              <Row>
                <h3 className="sidebar">
                  <b>Room Details</b>
                </h3>
              </Row>
              <Row>
                <span className="sidebar">
                  <b>{room.name || null}</b>
                </span>
              </Row>
              <Row type="flex" justify="space-between" className="sidebar">
                <Col>Price</Col>
                <Col>{(room.pricing && room.pricing.price) || null} Baht</Col>
              </Row>
              <hr style={{ borderColor: "#ffffff" }} />

              <Row justify="space-between" type="flex" className="sidebar">
                <Col>
                  <span>
                    <b>Check-in date</b>
                  </span>
                </Col>
                <Col>
                  <span>{form["checkin-picker"]}</span>
                </Col>
              </Row>
              <Row justify="space-between" type="flex" className="sidebar">
                <Col>
                  <span>
                    <b>Check-out date</b>
                  </span>
                </Col>
                <Col>
                  <span>{form["checkout-picker"]}</span>
                </Col>
              </Row>
              <Row justify="space-between" type="flex" className="sidebar">
                <Col>
                  <span>
                    <b>Guest Number</b>
                  </span>
                </Col>
                <Col>
                  <span>{form["guestnumber"]}</span>
                </Col>
              </Row>
            </React.Fragment>
          ) : null}

          {props.stage >= 1 ? (
            <React.Fragment>
              <hr style={{ borderColor: "#ffffff" }} />
              <Row>
                <h3 className="sidebar">
                  <b>Extra</b>
                </h3>
              </Row>

              <Row justify="space-between" type="flex" className="sidebar">
                <Col>
                  <span>
                    <b>Capacity</b>
                  </span>
                </Col>
                <Col>
                  <span>{(form.capacity && form.capacity.label) || null}</span>
                </Col>
              </Row>
              <Row justify="start" type="flex" className="sidebar">
                <Col>
                  <span>
                    <b>Catering</b>
                  </span>
                </Col>
              </Row>
              <Row justify="space-between" type="flex" className="sidebar">
                <Col>
                  {(form.catering && form.catering.label) || null} x (
                  {form.guestnumber || null})
                </Col>
                <Col>
                  {(form.guestnumber || null) *
                    ((form.catering && form.catering.price) || null)}{" "}
                  Baht
                </Col>
              </Row>
              <Row justify="start" type="flex" className="sidebar">
                <Col>
                  <span>
                    <b>Equipment</b>
                  </span>
                </Col>
              </Row>

              {form.equipment.map(e => (
                <React.Fragment>
                  <Row
                    type="flex"
                    justify="space-between"
                    className="sidebar"
                    style={{ margin: 0 }}
                  >
                    <Col>
                      {" "}
                      {e.label} x ({e.n})
                    </Col>
                    <Col> {e.n * e.price} Baht</Col>
                  </Row>
                </React.Fragment>
              ))}

              <hr style={{ borderColor: "#ffffff" }} />

              <Row type="flex" justify="space-between" className="sidebar">
                <Col>
                  <b>Price</b>
                </Col>
                <Col>{form.price}</Col>
              </Row>
            </React.Fragment>
          ) : null}
        </Col>
      </Row>
    </div>
  );
}
