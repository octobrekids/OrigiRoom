import React, { Component } from 'react'
import {Row,Col} from 'antd'
import RoomCard from './Home/RoomCard'

export default class Home extends Component {
    render() {
        return (
            <div>
            <Row type="flex" justify="center">
            <Col span={20}>
                <span>search</span>
                <Row><h1>Top Reservation</h1></Row>
                <RoomCard />
                </Col>
                </Row>
           
            </div>
        )
    }
}
