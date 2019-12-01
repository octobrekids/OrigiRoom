import React, { Component } from "react";
import { Row, Col, Card, InputNumber, Form } from "antd";
import { join } from "path";
import OptionCard from "./OptionCard";
import OptionCardEquipment from "./OptionCardEquipment";

function mapImage(src) {
  return join("/assets", "room", src);
}

function mapImageIcon(src) {
  return join("/assets", "icon", src);
}

class ExtraForm extends Component {
  state = {
    capacity: {
      label: ""
    },
    catering: {
      label: ""
    },
    equipment: []
  };

  //handleSubmit = () => new Promise((resolve, reject) => resolve(this.state));
  // new Promise((resolve, reject) => {
  //   this.props.form.validateFields((err, values) => {
  //     if (err) return reject(err);
  //     console.log("Received values of form: ", values);
  //     resolve({ stage: 2, ...values });
  //   });
  //});

  //handleStatus = () => {
  // this.props.form.validateFields((err, values) => {
  //   if (err) return this.props.onType({ status: false, values });
  //   return this.props.onType({ status: true, values });
  // });
  //};

  handleSubmit = () =>
    new Promise((resolve, reject) => {
      resolve(this.state);
    });

  onCapacity = value => {
    console.log(value);
    let status = false;
    if (this.state.capacity) status = true;
    return this.setState(
      prevState => {
        return {
          ...prevState,
          capacity: value
        };
      },
      () => this.props.onType({ status, values: this.state })
    );
  };

  onCatering = value => {
    const status = true;
    console.log(value);
    return this.setState(
      prevState => {
        return {
          ...prevState,
          catering: value
        };
      },
      () => this.props.onType({ status, values: this.state })
    );
  };

  onEquip = value => {
    return this.setState(
      prevState => {
        console.log("on equi[", prevState);
        let equipment = prevState.equipment;
        if (!equipment.some(e => e.label === value.label))
          equipment.push(value);
        else
          equipment = equipment.map(e => {
            if (e.label === value.label) return value;
            else return e;
          });
        return {
          equipment
        };
      },
      () => this.props.onType({ status: true, values: this.state })
    );
  };

  toggleEquip = value => {
    console.log("toggle", value);
    return this.setState(prevState => {
      console.log("on equi[", prevState);
      let equipment = prevState.equipment;
      const found = equipment.filter(e => e.label !== value.label);
      console.log("toggle", found);
      if (!found) equipment.push(value);
      else equipment = found;
      return {
        equipment
      };
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log("cur state extra form", this.state);
    console.log("jubjub", this.props.room);
    return (
      <div style={{ marginLeft: "10%" }}>
        <h1>2) Extras</h1>
        <Row>
          {" "}
          <span>
            <b>Capacity</b>
          </span>
        </Row>
        <Row style={{ marginBottom: "10px" }}>
          <span> Floor Size: {this.props.room.size} </span>{" "}
        </Row>

        <Row
          gutter={16}
          style={{ paddingBottom: "20px", paddingRight: "10px" }}
        >
          {this.props.room.capacity.map(e => {
            let selected = false;
            if (e.label === this.state.capacity.label) selected = true;
            return (
              <div onClick={() => this.onCapacity(e)}>
                <OptionCard
                  selected={selected}
                  data={{ ...e, icon: mapImageIcon(e.icon) }}
                />
              </div>
            );
          })}
        </Row>

        <Row>
          {" "}
          <span>
            <b>Catering</b>
          </span>
        </Row>

        <Row
          gutter={16}
          style={{ paddingBottom: "20px", paddingRight: "10px" }}
        >
          {this.props.room.catering.map(e => {
            let selected = false;
            if (e.label === this.state.catering.label) selected = true;
            return (
              <div onClick={() => this.onCatering(e)}>
                <OptionCard
                  selected={selected}
                  data={{ ...e, icon: mapImageIcon(e.icon), n: e.price }}
                />
              </div>
            );
          })}
        </Row>

        <Row>
          {" "}
          <span>
            <b>Equipment</b>
          </span>
        </Row>

        <Row
          gutter={16}
          style={{ paddingBottom: "20px", paddingRight: "10px" }}
        >
          {this.props.room.equipment.map(e => {
            let selected = false;
            if (this.state.equipment.some(s => s.label === e.label))
              selected = true;

            // console.log("extra eq", this.state.equipment);
            return (
              <div onClick={() => this.toggleEquip(e)}>
                <OptionCardEquipment
                  selected={selected}
                  data={{ ...e, icon: mapImageIcon(e.icon), n: e.price }}
                  onChange={this.onEquip}
                />
              </div>
            );
          })}
        </Row>
      </div>
    );
  }
}

const WrappedExtraForm = Form.create()(ExtraForm);

export default WrappedExtraForm;
