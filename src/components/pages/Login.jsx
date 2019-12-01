import React, { Component } from "react";
import { Form, Input, Select, Card, Row, Col, Button } from "antd";
import { withRouter } from "react-router-dom";
import User from "../data/User";
import queryString from "querystring";

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

  onLogin = e => {
    e.preventDefault();
    return this.props.form.validateFields((err, values) => {
      if (err) return;
      console.log("input", values);
      const valid = User.login(values.email, values.password);
      if (!valid)
        return this.setState(prevState => {
          return {
            ...prevState,
            valid: false
          };
        });

      const qs = this.props.history.location.search;
      const id = queryString.parse(qs)["?id"];
      if (id) return this.props.history.push(`/user/reserve?id=${id}`);
      return this.props.history.push("/user/");
    });
  };

  onChange = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        valid: true
      };
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
              <Form {...formItemLayout} onSubmit={this.onLogin}>
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
                  })(<Input onChange={this.onChange} />)}
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
                  })(<Input.Password onChange={this.onChange} />)}
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
