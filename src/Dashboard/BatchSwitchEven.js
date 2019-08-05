import React, { Component } from "react";
import Switch from "react-switch";
 
class BatchSwitchEven extends Component {
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
        <div className="batch1-onoff">
            <label>
                <span className="evening-btn">Evening</span>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
            </label>
        </div>
    );
  }
}
export default BatchSwitchEven;