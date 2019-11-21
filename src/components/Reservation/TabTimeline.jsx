import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

export default function TabTimeline(props) {
  return (
    <Steps size="small" current={props.page}>
      {/* <Step title="Finished" /> */}
      <Step title="stat" />
      <Step title="In Progress" />
      <Step title="Waiting" />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </Steps>
  );
}
