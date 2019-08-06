import React, { Component } from 'react';
// import './nugen-logo.png';
import { Link, Redirect } from 'react-router-dom';
import Course from '../Courses/Course';
// import DashboardNew from './Dashboard/DashboardNew';
import './Sidebar.css';
class Sidebar extends Component{
    render(){
        return(
            <div className="course-box">
                 <div className="side-bar-box">
                    <div className="heading"><h4>Nugen</h4></div>
                    <div className="dashboard">
                        <div className="main-app">Main App</div>
                            <div className="dash awe-font"><i className='fas fa-home'></i><Link to="/dashboardnew"> Dashboard</Link></div>        
                            <div className="dash awe-font"><i className='fas fa-user'></i><Link to="/addmission">Addmissions</Link></div>
                            <div className="dash awe-font"><i className='fas fa-hand-paper'></i>Attendance</div>
                            <div className="dash awe-font"><i className='fas fa-address-card'></i>Personal details</div>
                        <div className="account-app">Account</div>
                            <div className="dash awe-font"><i className='fas fa-fire'></i>Account Details</div>
                            <div className="dash awe-font"><i className='fas fa-cog'></i>Account Setting</div>
                            <div className="dash awe-font"><i className='fas fa fa-inr'></i>Expenditure</div>
                            <div className="dash awe-font"><i className='fas fa fa-credit-card'></i>installments</div>
                            
                        <div className="upload-app">Uploads</div>
                        <div className="dash awe-font"><i className='fas fa-users'></i><Link to="/batchdetail">Batch Details</Link></div>
                            <div className="dash awe-font"><i className='fas fa-bars'></i><Link to="/course">Course Details</Link></div>
                            <div className="dash awe-font"><i className='fas fa-book-open'></i>Assignments</div>
                            <div className="dash awe-font"><i className='fas fa-upload'></i>Upload Tab</div>
                        {/* <button className="btn">Log Out</button> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default Sidebar;