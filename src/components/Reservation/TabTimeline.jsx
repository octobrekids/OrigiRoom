import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

export default function TabTimeline(props) {
  return (
    <Steps size="small" current={props.page}>
      {/* <Step title="Finished" /> */}
      <Step title="Room Details" />
      <Step title="Extra" />
      <Step title="Contact Details" />
      <Step title="Invoice Address" />
      <Step title="Payment" />
    </Steps>
  );
}
