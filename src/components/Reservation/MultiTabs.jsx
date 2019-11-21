import React from "react";
import { Tabs, Row } from "antd";
import ReservationForm from '../Reservation/ReservationForm'

const { TabPane } = Tabs;

function onTabClick(d) {
  console.log("on tab click", d);
}

export default function MultiTabs(props) {
  console.log(props);
  return (
    <Tabs
      onChange={onTabClick}
      activeKey={props.page}
      
      // renderTabBar={} 
    >

      <TabPane key="0">
        <ReservationForm onSubmit={props.onSubmit}/>
      </TabPane>
      <TabPane key="1">
        Content of Tab Pane 2
      </TabPane>
      <TabPane key="2">
        Content of Tab Pane 3
      </TabPane>

    </Tabs>
  );
}
