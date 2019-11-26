import React from "react";
import { Tabs } from "antd";
import ReservationForm from "../Reservation/ReservationForm";

const { TabPane } = Tabs;

function onTabClick(d) {
  console.log("on tab click", d);
}

// use forward ref to foward reference
export default React.forwardRef((props, ref) => {
  console.log("multab ref", ref);

  return (
    <Tabs
      onChange={onTabClick}
      activeKey={props.page}
    >
      <TabPane key="0">
        <ReservationForm
        // special props form ant design providers docs here
        // https://ant.design/components/form/#Form.create(options)
          wrappedComponentRef={form => {
            ref.current = form;
          }}
        />
      </TabPane>
      <TabPane key="1">Content of Tab Pane 2
      </TabPane>
      <TabPane key="2">Content of Tab Pane 3</TabPane>
      <TabPane key="3">Content of Tab Pane 3</TabPane>
      <TabPane key="4">Content of Tab Pane 3</TabPane>
    </Tabs>
  );
});
