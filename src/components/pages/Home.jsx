import React, { Component } from "react";
import { Row, Col, Carousel } from "antd";
import RoomCard from "../Home/RoomCard";
import RoomData from '../data/Room'

export default class Home extends Component {
  render() {
    console.log(RoomData.rooms)
    return (
      <div>
      
        <Row>
          <Carousel autoplay>
            <div>
              <img src="../assets/room/room1.jpg" className="carousel-img" alt=""/>
            </div>
            <div>
            <img src="../assets/room/room2.jpg" className="carousel-img"  alt=""/>
            </div>
            <div>
            <img src="../assets/room/room3.jpg" className="carousel-img"  alt=""/>
            </div>
            <div>
            <img src="../assets/room/room4.jpg" className="carousel-img"  alt=""/>
            </div>
          </Carousel>
        </Row>

        <Row type="flex" justify="center" style={{marginTop: '5%'}}>
          <Col span={20}>
            <Row>
              <h1>Top Reservation</h1>
            </Row>
            {
              RoomData.rooms[0] && RoomData.rooms
              .filter(e => e.category === '1')
              .slice(0, 3)
              .map(e => {
              return (<RoomCard data={e}/>)
            })
          }
          </Col>
        </Row>

        <Row type="flex" justify="center" style={{marginTop: '5%'}}>
          <Col span={20}>
            <Row>
              <h1>Top Reservation</h1>
            </Row>
            {
              RoomData.rooms[0] && RoomData.rooms
              .filter(e => e.category === '2')
              .slice(0, 3)
              .map(e => {
              return (<RoomCard data={e}/>)
            })
          }
          </Col>
        </Row>

      
      </div>
    );
  }
}
