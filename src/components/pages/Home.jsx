import React, { Component } from "react";
import { Row, Col, Carousel,Layout } from "antd";
import RoomCard from "../Home/RoomCard";
import RoomData from '../data/Room' 

const { Footer } = Layout;


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
              <h1>Seminar Collection</h1>
            </Row>
           <Row type='flex' justify='space-between'>
           {
            RoomData.rooms[0] && RoomData.rooms
            .filter(e => e.category === 'Seminar')
            .slice(0, 3)
            .map(e => {
            return (<RoomCard data={e}/>)
          })
        }
        </Row>
          </Col>
        </Row>

        <Row type="flex" justify="center" style={{marginTop: '5%'}}>
          <Col span={20}>
            <Row>
              <h1>Party x Seminar Collection</h1>
            </Row>
            <Row type='flex' justify='space-between'>
            {
              RoomData.rooms[0] && RoomData.rooms
              .filter(e => e.category === 'Party')
              .slice(0, 3)
              .map(e => {
              return (<RoomCard data={e}/>)
            })
          }
          </Row>
          </Col>
        </Row>
        <Footer style={{ marginTop: "5%" }}><Row type="flex" justify="center">Copy Right by OrigiRoom</Row></Footer>
      
      </div>
    );
  }
}
