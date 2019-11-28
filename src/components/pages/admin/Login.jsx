import React, { Component } from "react";
import { Form, Input, Select, Card, Row, Col, Button } from "antd";

const { Option } = Select;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      }
    };

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "66"
    })(
      <Select style={{ width: 70 }}>
        <Option value="66">+66</Option>
        <Option value="1">+1</Option>
      </Select>
    );

    return (
      <div>
        <Row span={24} type="flex" justify="center" style={{ marginTop: "5%" }}>
          <Col span={20}>
            <Card title={<h1>Admin Login</h1>} style={{ paddingTop: "10px" }}>
              <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="E-mail">
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        type: "email",
                        message: "The input is not valid Email"
                      },
                      {
                        required: true,
                        message: "Please input your Email"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Password" hasFeedback>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your password!"
                      },
                      {
                        validator: this.validateToNextPassword
                      }
                    ]
                  })(<Input.Password />)}
                </Form.Item>

                <Row type="flex" justify="center">
                  <Col>
                    <Button htmlType="submit" type="primary">
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
const WrappedLoginForm = Form.create()(Login);
export default WrappedLoginForm;
