import React from "react";
import { Card, Row, Col, Rate } from "antd";
import { Join, join } from "path";
import { Link } from "react-router-dom";

const { Meta } = Card;

function mapImage(src) {
  return join("/assets", "room", src);
}

export default function RoomCard(props) {
  const data = props.data;
  if (!data) return null;

  return (
    <Link to={`/user/roomdetail?id=${data.id}`}>
      <Col span={6}>
        {" "}
        <Card
          className="roomCard"
          cover={
            <img
              alt="example"
              className="roomCard-img"
              src={mapImage(data.image)}
            />
          }
        >
          <p className="roomCard">{data.name}</p>
          <Rate disabled defaultValue={data.rate} className="rate" />
          <Row>
            <Col span={8}>
              <div className="boxCard">{data.size || 0} sqm</div>
            </Col>
            <Col span={8}>
              <div className="boxCard">
                <img
                  src="../assets/icon/multiple-user.png"
                  className="iconCard"
                ></img>{" "}
                {data.capacity[0].n || 0}
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Link>
  );
}
