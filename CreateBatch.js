import React, { Component } from 'react';
import './CreateBatch.css';
class CreateBatch extends Component{
    // getAlert(){
    //     alert("clicked");
    // }
    render(){
        return(
            <div className="createbatch">
                <div className="createbatchform">
                <div className="batch-heading">Create Batch
                <div className="close-btn"><i class="fas close fa-times"></i></div>
                </div>
                <table align="center" cellpadding = "10"></table>
                <tr>
                    <h3>TOTAL STUDENTS</h3>
                        <input type="number" name="First_Name" maxlength="30" placeholder="Total Student" />
                </tr>
                <tr>
                    <h3>BATCH NAME</h3>
                        <input type="text" name="First_Name" maxlength="30" placeholder="Batch Name" />
                </tr>
                <tr>
                    <h3>COURSE NAME</h3>
                        <input type="text" name="First_Name" maxlength="30" placeholder="Course Name" />
                </tr>
                <tr>
                    <h3>BATCH TIMING</h3>
                        <input type="text" name="First_Name" maxlength="30" placeholder="Timing" />
                </tr>
                <button id="create-btn">Create</button>
 
                </div>
            </div>
        );
    }
}
export default CreateBatch;