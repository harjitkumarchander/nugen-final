import React, { Component } from "react";
import Switch from "react-switch";
 
class BatchSwitchMorn extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
    return (
        <div className="batch-onoff">
            <label>
                <span className="morning-btn">Morning</span>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
            </label>
        </div>
    );
  }
}
export default BatchSwitchMorn;