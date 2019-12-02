import React, { Component } from "react";
import { Form, Row, Col, Input, Card } from "antd";

class Payment extends Component {
  handleSubmit = () =>
  new Promise((resolve, reject) => {
    this.props.form.validateFields((err, values) => {
      if (err) return reject(err);
      console.log("Received values of form: ", values);
      resolve({ stage: 4, ...values });
    });
  });

handleStatus = () => {
  this.props.form.validateFields((err, values) => {
    if (err) return this.props.onType({ status: false, values });
    return this.props.onType({ status: true, values });
  });
};
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form style={{ marginLeft: "10%" }}>
        <h1>5) Payment</h1>
        <Row type="flex" justify="start">
          <Col span={12}>
            <Form.Item label="Email" className="login-form" hasFeedback>
              {getFieldDecorator("Email", {
                rules: [
                  {
                    required: true,
                    message: "Please Enter Email"
                  }
                ]
              })(<Input onKeyUp={this.handleStatus} />)}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Card className="long-form">
            <Row type="flex" justify="end">
              <Col span={24}>
                <Form.Item
                  label="Cardholder Name"
                  className="cardholderName"
                  hasFeedback
                >
                  {getFieldDecorator("cardholderName", {
                rules: [
                  {
                    required: true,
                    message: "Please Enter Cardholder Name"
                  }
                ]
            })(
                    <Input onKeyUp={this.handleStatus} />
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row type="flex" justify="space-between" gutter={4}>
              <Col span={12}>
                <Form.Item
                  label="Card Number"
                  className="long-form"
                  hasFeedback
                >
                  {getFieldDecorator("cardNumber", {
                    rules: [
                      {
                        required: true,
                        message: "Please Enter Card Number"
                      }
                    ]
                })(
                    <Input onKeyUp={this.handleStatus} />
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Expired Date (MM/YY)"
                  className="long-form"
                  hasFeedback
                >
                  {getFieldDecorator("expiredDate", {
                    rules: [
                      {
                        required: true,
                        message: "Please Enter Expired Date"
                      }
                    ]
                })(
                    <Input onKeyUp={this.handleStatus} />
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="CVV"
                  className="long-form"
                  hasFeedback
                >
                  {getFieldDecorator("cvv", {
                    rules: [
                      {
                        required: true,
                        message: "Please Enter CVV"
                      }
                    ]
                })(
                    <Input onKeyUp={this.handleStatus} />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Row>
      </Form>
    );
  }
}

const WrappedPaymentForm = Form.create()(Payment);

export default WrappedPaymentForm;
