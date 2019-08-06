import React, { Component } from 'react';
import CreateBatch from './CreateBatch';
import './Batchdetail.css';

class Batchdetail extends Component{
    render(){
        // onClick = () =>{
        //     this.ref.CreateBatch.getAlert()
        // }
        return(
            <div>
                <div className="add-box"></div>
                {/* <CreateBatch ref="createbatch" /> */}
                {/* <button onClick={this.onClick.bind(this)}>Click Me</button> */}
                <CreateBatch />
            </div>
        );
    }
}
export default Batchdetail;