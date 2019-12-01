import React, { Component } from "react";
import { Form, Input, Select, Card, Row, Col, Button } from "antd";
import { withRouter } from "react-router-dom";
import User from "../data/User";

const { Option } = Select;

class Login extends Component {
  state = {
    auth: "",
    valid: true
  };

  componentDidMount() {
    const alreadyAuth = User.getAuth();
    if (alreadyAuth) return this.props.history.push("/user/");
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  onLogin = () => {
    return this.props.form.validateFields((err, values) => {
      if (err) return;
      const valid = User.login(values.email, values.password);
      // if(!valid)
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
            <Card title={<h1>Login</h1>} style={{ paddingTop: "10px" }}>
              {!this.state.valid ? <span>พาสเวิร์ดผิด หน้าโง่</span> : null}
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
                <Row type="flex" justify="center">
                  <Col style={{ marginTop: "20px" }}>
                    No Account?{" "}
                    <a href="/register">
                      <u>Register here</u>
                    </a>
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
export default withRouter(WrappedLoginForm);
