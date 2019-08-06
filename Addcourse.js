import React, { Component } from 'react';
import './Addcourse.css';
class Addcourse extends Component{
    render(){
        return(
            <div>
                <div className="add-course-box">
                <div className="add-course-heading">Add New Course
                <div className="close-btn"><i class="fas fa-times"></i></div>
                </div>
                <table align="center" cellpadding = "10"></table>
                <tr>
                    <h3>Course Name</h3>
                        <input type="text" name="First_Name" maxlength="30" placeholder="Course Name" />
                </tr>
                <tr>
                    <h3>Description</h3>
                        <input type="text" name="First_Name" maxlength="30" placeholder="Description" />
                </tr>
                <button id="add-course-btn">Add New Course<i class='fas add-plus fa-plus'></i></button>
                </div>
            </div>
        );
    }
}
export default Addcourse;