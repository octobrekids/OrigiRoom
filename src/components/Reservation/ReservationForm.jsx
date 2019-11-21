import React, { Component } from "react";
import { Form, Input, Button, DatePicker } from "antd";

class ReservationForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }

      const newValues = {
        ...values,
        'date-picker': values['date-picker'].format('YYYY-MM-DD'),
        'date2-picker': values['date-picker'].format('YYYY-MM-DD')
      };

      console.log(values);
      this.props.onSubmit(newValues);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={{marginLeft:'10%'}}>
        <h1>1) Room Details</h1>
        <Form layout="inline">
          <Form.Item label="Check-in Date">
            {getFieldDecorator("date-picker", {
              rules: [
                {
                  required: true,
                  message: "Please select check-in date"
                }
              ]
            })(<DatePicker />)}
          </Form.Item>

          <Form.Item label="Check-out Date">
            {getFieldDecorator("date2-picker", {
              rules: [
                {
                  required: true,
                  message: "Please select check-out date"
                }
              ]
            })(<DatePicker />)}
          </Form.Item>
        </Form>

        <Form.Item label="Name" className="login-form" asFeedback>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        {/* <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item> */}
      </Form>
    );
  }
}
const WrappedReservationForm = Form.create({ name: "reservation" })(
  ReservationForm
);

export default WrappedReservationForm;
