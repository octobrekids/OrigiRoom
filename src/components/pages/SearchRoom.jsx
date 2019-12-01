import React from 'react'
import { Form,Row,Col,Button,Icon } from 'antd'



export default function SearchRoom() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div>
        <Form.Item label={Field1}>
        {getFieldDecorator('field1', {
          rules: [
            {
              required: true,
              message: 'Input something!',
            },
          ],
        })(<Input placeholder="placeholder" />)}
      </Form.Item>
        </div>
    )
}
