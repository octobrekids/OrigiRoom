import React from "react";
import { Row, Col, Card,Result, Button } from "antd";

export default function Success(props) {
  console.log("yey", props);

  const form = props.data;
  const room = props.room;

  return (
    <div>
    
      <Row type="flex" justify="center">
        <Col span={20}>
        <Card>
        <Result
        style={{padding:10}}
        status="success"
        title="Payment Success!"
        subTitle="Reservation number: 1234, Payment Success!, You can check reservation in your email."
      />
        </Card>
          <Card style={{marginTop: '2%'}}>
            <Row type="flex" justify="center">
              <h1>Confirmation</h1>
            </Row>
            <Row type="flex" justify="start">
              <Col span={8}>
                <b>Company Name</b>
              </Col>
              <Col span={16}>{form.companyName}</Col>
            </Row>
            <Row type="flex" justify="start">
              <Col span={8}>
                <b>Contact person</b>
              </Col>
              <Col span={16}>{form.contactPerson}</Col>
            </Row>
            <Row type="flex" justify="start">
              <Col span={8}>
                <b>Mobile</b>
              </Col>
              <Col span={16}>{form.Mobile}</Col>
            </Row>
            <Row type="flex" justify="start">
              <Col span={8}>
                <b>Full invoicing address</b>
              </Col>
              <Col span={16}>{form.fullInvoice}</Col>
            </Row>
            <Row type="flex" justify="start">
              <Col span={8}>
                <b>VAT Identification Number</b>
              </Col>
              <Col span={16}>{form.vatNumber}</Col>
            </Row>
            <hr style={{ borderColor: "#fff" }} />

            <Row type="flex" justify="space-between">
              <Col>
                <b>Venue : {room.name}</b>
              </Col>
              <Col>{(room.pricing && room.pricing.price) || null} Baht</Col>
            </Row>

            <Row type="flex" justify="space-between">
              <Col>
                <b>{(form.capacity && form.capacity.label) || null}</b>
              </Col>
              <Col>{form.guestnumber} people</Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col>
                <b>
                  {(form.catering && form.catering.label) || null} x (
                  {form.guestnumber})
                </b>
              </Col>
              <Col>
                {(Number(form.guestnumber) * (form.catering && form.catering.price || null))}
                Baht
              </Col>
            </Row>
            {form.equipment.map(eq => {
              return (
                <Row type="flex" justify="space-between">
                  <Col>
                    <b>
                      {eq.label} x ({eq.n})
                    </b>
                  </Col>
                  <Col>
                   {eq.price * eq.n} Baht
                  </Col>
                </Row>
              );
            })}
            <hr />
            <Row type="flex" justify="space-between">
            <Col>Processing Fee</Col>
            <Col>500 Baht</Col>
            </Row>
           
            <hr />
            <Row type="flex" justify="space-between">
            <Col><b style={{color:'#1890ff'}}>Total</b></Col>
            <Col> <b  style={{color:'#1890ff'}}>{form.price + 500} Baht</b></Col>
            </Row>
            <Row type="flex" justify="center"><Button type="primary"><a href="/user/">Home</a></Button></Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
