import React, { Component } from "react";
import { Form, Input, Select, Card, Row, Col, Button } from "antd";

const { Option } = Select;

class Register extends Component {
  state = {
    confirmDirty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
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
            <Card title={<h1>Register</h1>} style={{ paddingTop: "10px" }}>
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
                <Form.Item label="Confirm Password" hasFeedback>
                  {getFieldDecorator("confirm", {
                    rules: [
                      {
                        required: true,
                        message: "Please confirm your password!"
                      },
                      {
                        validator: this.compareToFirstPassword
                      }
                    ]
                  })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item label={"Fullname"}>
                  {getFieldDecorator("nickname", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your nickname!",
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Phone Number">
                  {getFieldDecorator("phone", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your phone number!"
                      }
                    ]
                  })(
                    <Input
                      addonBefore={prefixSelector}
                      style={{ width: "100%" }}
                    />
                  )}
                </Form.Item>
                <Row type="flex" justify="center">
                  <Col>
                    <Button htmlType="submit" type="primary">
                      Submit
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
const WrappedRegisterForm = Form.create()(Register);
export default WrappedRegisterForm;
