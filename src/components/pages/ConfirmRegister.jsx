import React from 'react'
import { Row, Col,Result, Button, Card } from 'antd'

export default function ConfirmRegister() {
    return (
        <div>
        <Row type="flex" justify="center">
        <Col span={20} style={{marginTop:'10%'}}>
       <Card> <Result
        status="success"
        title="Register Success!"
        subTitle="Register success, Back to home."
        extra={[
          <Button type="primary" key="console">
           <a href="/user/"> Back to Home</a>
          </Button>,
        ]}
      />
      </Card>
        </Col>
        </Row>
            
        </div>
    )
}
