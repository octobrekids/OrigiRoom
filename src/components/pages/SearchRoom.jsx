import React, { Component } from "react";
import { Form, Row, Col, Input, Card } from "antd";
import RoomData from "../data/Room";
import RoomCard from "../Home/RoomCard";
import Fuse from "fuse.js";

class SearchRoom extends Component {
  state = {
    rooms: [],
    search: [],
    fuse: {}
  };

  componentDidMount() {
    const options = {
      shouldSort: true,
      minMatchCharLength: 1,
      keys: ["floor", "type", "name"]
    };
    const fuse = new Fuse(RoomData.rooms, options);
    console.log("fuse", fuse);

    return this.setState(prevState => {
      return {
        ...prevState,
        rooms: RoomData.rooms,
        search: RoomData.rooms,
        fuse
      };
    });
  }

  onSearch = e => {
    const word = e.target.value;
    if (word.length === 0)
      return this.setState(prevState => {
        return {
          ...prevState,
          search: prevState.rooms
        };
      });

    const search = this.state.fuse.search(word);
    this.setState(prevState => {
      return {
        ...prevState,
        search: search
      };
    });
    // console.log(search, e.target.value);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={20} style={{ marginTop: "10%" }}>
            <Card title={<h1>Search Room</h1>}>
              <Row gutter={16} type="flex" justify="center">
                <Col span={10}>
                  <Form.Item hasFeedback>
                    {getFieldDecorator("roomName")(
                      <Input
                        onChange={this.onSearch}
                        placeholder="Room Name e.g. A01 Flex"
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  {" "}
                  <Form.Item hasFeedback className="login-form">
                    {getFieldDecorator("floor")(
                      <Input placeholder="Floor e.g. 1,2" />
                    )}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  {" "}
                  <Form.Item hasFeedback className="login-form">
                    {getFieldDecorator("type")(
                      <Input placeholder="Type e.g. Party, Seminar" />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row type="flex" justify="start">
          <Col span={20}>
            <Row type="flex" justify="space-between">
              {this.state.search.map(e => (
                <RoomCard data={e} />
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
const WrappedSearchRoom = Form.create()(SearchRoom);
export default WrappedSearchRoom;
