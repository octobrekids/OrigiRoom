import React, { Component } from "react";
import {Form,Row,Col,Input} from "antd";

class ContactDetails extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form style={{ marginLeft: "10%" }}>
        <h1>3) Contact Details</h1>
        <Row type="flex" justify="end">
          <Col span={12}>
          <Form.Item label="First name" className="login-form" hasFeedback>
          {getFieldDecorator("firstName", {
            rules: [
              {
                required: true,
                message: "Please Enter First name"
              }
            ]
          })(<Input onKeyUp={this.handleStatus} />)}
        </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item label="Last name" className="login-form" hasFeedback>
          {getFieldDecorator("lastName", {
            rules: [
              {
                required: true,
                message: "Please Enter Last name"
              }
            ]
          })(<Input onKeyUp={this.handleStatus} />)}
        </Form.Item>
          </Col>
        </Row>

        <Row type="flex" justify="end">
        <Col span={12}>
        <Form.Item label="Company Email" className="login-form" hasFeedback>
        {getFieldDecorator("companyEmail", {
          rules: [
            {
              required: true,
              message: "Please Enter Company Email"
            }
          ]
        })(<Input onKeyUp={this.handleStatus} />)}
      </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item label="Mobile Phone" className="login-form" hasFeedback>
        {getFieldDecorator("mobilePhone", {
          rules: [
            {
              required: true,
              message: "Please Enter Mobile Phone"
            }
          ]
        })(<Input onKeyUp={this.handleStatus} />)}
      </Form.Item>
        </Col>
      </Row>
</Form>
       
    );
  }
}

const WrappedContactDetailsForm = Form.create()(ContactDetails);

export default WrappedContactDetailsForm;