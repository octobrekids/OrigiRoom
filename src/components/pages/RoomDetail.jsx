import React from "react";
import { Row, Col, Card, Icon, Button, Layout } from "antd";
import { withRouter, Link } from "react-router-dom";
import RoomData from "../data/Room";
import queryString from "query-string";
import { Join, join } from "path";

const { Footer } = Layout;
function mapImage(src) {
  return join("/assets", "room", src);
}

function mapImageIcon(src) {
  return join("/assets", "icon", src);
}

function RoomDetail(props) {
  console.log(RoomData.rooms);

  const qs = props.history.location.search;
  const { id } = queryString.parse(qs);
  const room = RoomData.getRoom(id);
  console.log("room id", room);

  console.log("catering", room.catering[0].icon);

  return (
    <div>
      <Row className="header-roomdetail">
        <Col span={16}>
          <img src={mapImage(room.image)} className="roomdetail-img" />
        </Col>
        <Col span={8} style={{ marginTop: 250 }}>
          <Row type="flex" justify="center">
            <p className="roomdetail-header">{room.name}</p>
          </Row>
          <Row type="flex" justify="center">
            <Link to={`/user/reserve?id=${id}`}>
              <Button type="primary" size="large" style={{ width: 200 }}>
                Reserve Now
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>

      <Row type="flex" justify="center" style={{ marginTop: "2%" }}>
        <Col span={18}>
          <Row>
            <h1>{room.name}</h1>
          </Row>
          <Row>
            <span>
              <b>Capacity</b>
            </span>
          </Row>
          <Row>
            <span>Recommended number of guests: 1 - {room.capacity[0].n}</span>
          </Row>

          <Row
            gutter={16}
            style={{
              paddingBottom: "20px",
              paddingRight: "10px",
              marginTop: "1%"
            }}
          >
            {room.capacity.map(e => {
              return (
                <Col span={4}>
                  <Card className="extra" bordered={false}>
                    <Row>
                      <Col span={12}>
                        <img src={mapImageIcon(e.icon)} className="iconExtra" />
                      </Col>
                      <Col span={12}>
                        <Row>
                          <span>
                            <b>{e.label}</b>
                          </span>
                        </Row>
                        <Row>
                          <span>{e.n}</span>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>

      {/* Pricing */}

      <Row type="flex" justify="center">
        <Col span={18}>
          <Row style={{ marginTop: "2%" }}>
            <h2>
              <b>Pricing</b>
            </h2>
          </Row>
          <Row>
            <span>
              <h4>
                <b>Price: {room.pricing.price} Baht</b>
              </h4>
            </span>
          </Row>
          <Row>
            <span>
              Minimum booking fee (excl. Extras): {room.pricing.minFee} Baht
            </span>
          </Row>
          <Row>
            <span>Cleaning fees: {room.pricing.cleaningFee} Baht</span>
          </Row>
          <Row>
            <span>All prices excluding tax.</span>
          </Row>
          <br />
          <Row>
            <p>
              <b>Cancellation policy:</b> Full refund of fees for cancellation
              up to 30 days prior to event, 50% refund of fees for cancellation
              up to 7 days
              <br />
              prior to event Highlights (included): Elevator for easy access,
              Wheelchair accessible space, Cooking in kitchen possible
            </p>
          </Row>
        </Col>
      </Row>

      {/* Catering Set */}

      <Row type="flex" justify="center" style={{ marginTop: "2%" }}>
        <Col span={18}>
          <Row>
            <h2>
              <b>Catering Set</b>
            </h2>
          </Row>

          <Row gutter={16}>
            {room.catering.map(e => {
              return (
                <Col span={12} style={{ marginBottom: 16 }}>
                  <Card className="extra" bordered={false}>
                    <Row>
                      <Col span={8} style={{ marginLeft: 40 }}>
                        <img
                          src={mapImageIcon(e.icon)}
                          className="iconCatering"
                        />
                      </Col>
                      <Col span={12}>
                        <Row>
                          <span>
                            <b>{e.label}</b>
                          </span>
                        </Row>
                        <Row>
                          <span>{e.price} Baht</span>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>

      {/* Equipment */}

      <Row type="flex" justify="center" style={{ marginTop: "2%" }}>
        <Col span={18}>
          <Row>
            <h2>
              <b>Equipment</b>
            </h2>
          </Row>
          <Row type="flex" gutter={16}>
            {room.equipment.map(e => {
              return (
                <Col span={12} style={{ marginBottom: 16 }}>
                  <Card className="extra" bordered={false}>
                    <Row>
                      <Col span={8} style={{ marginLeft: 40 }}>
                        <img
                          src={mapImageIcon(e.icon)}
                          className="iconCatering"
                        />
                      </Col>
                      <Col span={12}>
                        <Row>
                          <span>
                            <b>{e.label}</b>
                          </span>
                        </Row>
                        <Row>
                          <span>{e.price} Baht</span>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>

      {/* Description */}

      <Row type="flex" justify="center" style={{ marginTop: "2%" }}>
        <Col span={18}>
          <Row>
            <h2>
              <b>Description</b>
            </h2>
          </Row>
          <Row>
            <p>{room.description}</p>
          </Row>
        </Col>
      </Row>

      <Footer style={{ marginTop: "5%" }}>
        <Row type="flex" justify="center">
          Copy Right by OrigiRoom
        </Row>
      </Footer>
    </div>
  );
}

export default withRouter(RoomDetail);
