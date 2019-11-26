import React, { Component } from "react";
import { Form, Input, DatePicker, Row, Col } from "antd";

class ReservationForm extends Component {
  handleSubmit = () => new Promise((resolve, reject) => {
      this.props.form.validateFields((err, values) => {
        if(err) return reject(err)
        console.log("Received values of form: ", values);
        resolve({stage: 1, ...values})
      });

  })

  render() {
    console.log("hhhh", this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <Form style={{ marginLeft: "10%" }}>
        <h1>1) Room Details</h1>
        <Row type="flex" justify="right">
          <Col span={12}>
            <Form.Item label="Check-in Date">
              {getFieldDecorator("checkin-picker", {
                rules: [
                  {
                    required: true,
                    message: "Please select check-in date"
                  }
                ]
              })(<DatePicker className="date-picker" />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Check-out Date">
              {getFieldDecorator("checkout-picker", {
                rules: [
                  {
                    required: true,
                    message: "Please select check-out date"
                  }
                ]
              })(<DatePicker className="date-picker" />)}
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Guest Number" className="login-form" asFeedback>
          {getFieldDecorator("guest-number", {
            rules: [
              {
                required: true,
                message: "Please Enter Guest Number"
              }
            ]
          })(<Input />)}
        </Form.Item>
      </Form>
    );
  }
}
const WrappedReservationForm = Form.create()(ReservationForm);

export default WrappedReservationForm;

