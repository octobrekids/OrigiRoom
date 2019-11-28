import React, { Component } from "react";
import {Form,Row,Col,Input} from "antd";

class Invoice extends Component {
//     handleSubmit = () =>
//     new Promise((resolve, reject) => {
//       this.props.form.validateFields((err, values) => {
//         if (err) return reject(err);
//         console.log("Received values of form: ", values);
//         resolve({ stage: 1, ...values });
//       });
//     });

//   handleStatus = () => {
//     this.props.form.validateFields((err, values) => {
//       if (err) return this.props.onType({ status: false, values });
//       return this.props.onType({ status: true, values });
//     });
//   };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form style={{ marginLeft: "10%" }}>
        <h1>4) Invoice Address</h1>
        <Row type="flex" justify="end">
          <Col span={12}>
          <Form.Item label="Company Name" className="login-form" hasFeedback>
          {getFieldDecorator("companyName", {
            rules: [
              {
                required: true,
                message: "Please Enter Guest Number"
              }
            ]
          })(<Input onKeyUp={this.handleStatus} />)}
        </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item label="Contact person" className="login-form" hasFeedback>
          {getFieldDecorator("contactPerson", {
            rules: [
              {
                required: true,
                message: "Please Enter Guest Number"
              }
            ]
          })(<Input onKeyUp={this.handleStatus} />)}
        </Form.Item>
          </Col>
        </Row>

        <Row type="flex" justify="end">
        <Col span={24}>
        <Form.Item label="Full invoicing address" className="long-form" hasFeedback>
        {getFieldDecorator("fullInvoice")(<Input onKeyUp={this.handleStatus} />)}
      </Form.Item>
        </Col>
      </Row>

      <Row type="flex" justify="end">
      <Col span={24} >
      <Form.Item label="VAT Identification Number (required for payment with invoice)" className="long-form" hasFeedback>
      {getFieldDecorator("vatNumber")(<Input onKeyUp={this.handleStatus} />)}
    </Form.Item>
      </Col>
      </Row>
</Form>
       
    );
  }
}

const WrappedInvoiceForm = Form.create()(Invoice);

export default WrappedInvoiceForm;