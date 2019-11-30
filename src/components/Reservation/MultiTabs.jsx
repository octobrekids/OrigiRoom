import React from "react";
import { Tabs } from "antd";
import ReservationForm from "../Reservation/ReservationForm";
import ExtraForm from "../Reservation/ExtraForm";
import ContactDetails from "../Reservation/ContactDetails"
import Invoice from "../Reservation/Invoice"
import Payment from "../Reservation/Payment"

const { TabPane } = Tabs;

function onTabClick(d) {
  console.log("on tab click", d);
}

// use forward ref to foward reference
export default React.forwardRef((props, ref) => {
  console.log("multab ref", props, ref);

  return (
    <Tabs onChange={onTabClick} activeKey={props.page}>
      <TabPane key="0">
        <ReservationForm
          // special props form ant design providers docs here
          // https://ant.design/components/form/#Form.create(options)
          onType={props.onType}
          wrappedComponentRef={form => {
            ref.current = form;
          }}
        />
      </TabPane>
      <TabPane key="1">
        <ExtraForm 
        room={props.room}
        onType={props.onType}
          wrappedComponentRef={form => {
            ref.current = form;
          }}
          />
      </TabPane>
      <TabPane key="2">
      <ContactDetails />
      </TabPane>
      <TabPane key="3">
      <Invoice />
      </TabPane>
      <TabPane key="4">
      <Payment />
      </TabPane>
    </Tabs>
  );
});
