import React, { Component } from 'react';
import '../Dashboard/DashboardNew.css';
import Chart1 from '../Chart1';
import Chart2 from './Chart/Chart2';
import BatchSwitchMorn from './BatchSwitchMorn';
import BatchSwitchEven from './BatchSwitchEven';
// import Example from '../Dashboard/CourseTinyChart';
import CourseTinyChart from '../Dashboard/CourseTinyChart';
import CommentTinyChart from '../Dashboard/CommentTinyChart';
// import Date from '../Dashboard/Date';

class DashboardNew extends Component{
    render(){
        return(
            <div className="main"> 
                <div className="box1"><Chart1 />
                    <div className="attendance-chart">Attendance Chart</div>
                    <div className="attendance-chart-menu">
                        <ul>
                            <li>Daily</li>
                            <li>Weekly</li>
                            <li>Monthly</li>
                            <li>Yearly</li>
                        </ul>
                    </div>
                    <div className="last-month-class">20 Lec</div>
                    <div className="last-month-overview">Overview of last month</div>
                    <div className="current-month-class">20 Lec</div>
                    <div className="current-month-overview">Overview of Current month</div>
                    <div className="last-month-summery">Last month summery</div>
                </div>
                <div className="box2"><Chart2 />
                    <div className="my-activity">My Activity</div>
                </div>
                <div className="small-course-box">
                    <div className="small-boxes-heading">Course Completed</div>
                    <div className="course-tiny-chart"><CourseTinyChart /></div>
                    <div className="course-percentage">90% Completed</div>
                </div>
                <div className="small-batch-box">
                    <div className="small-boxes-heading">Batch</div>
                    <div id="page"><BatchSwitchMorn /></div>
                    <div><BatchSwitchEven /></div>
                    
                   
                </div>
                <div className="small-review-box">
                    <div className="small-boxes-heading">Reviews</div>
                    <div className="rate-experience">Rate Your experience</div>
                    <div className="star-rating1"><i class="fa fa-star"></i></div>
                    <div className="star-rating2"><i class="fa fa-star"></i></div>
                    <div className="star-rating3"><i class="fa fa-star"></i></div>
                    <div className="star-rating4"><i class="fa fa-star"></i></div>
                    <div className="star-rating5"><i class="fa fa-star"></i></div>
                </div>
                <div className="small-comment-box">
                    <div className="small-boxes-heading">Comments</div>
                    <div className="comment-tiny-chart"><CommentTinyChart /></div>
                </div>
                <div className="recent-activity">
                    <div className="activity-heading">Recent Activity</div>
                        <div className="upload-file">
                            <div className="upload-time">30 Mins Ago</div>
                            <div className="center-circle"><i className="fa fa-bars"></i></div>
                            <div className="task-uploaded">Task Uploaded by Harjit Kumar</div>
                        </div>
                        <div className="upload-file1">
                            <div className="upload-time">30 Mins Ago</div>
                            <div className="center-circle"><i className="fa fa-bars"></i></div>
                            <div className="task-uploaded">Task Uploaded by Harjit Kumar</div>
                        </div>
                        <div className="upload-file2">
                            <div className="upload-time">30 Mins Ago</div>
                            <div className="center-circle"><i className="fa fa-bars"></i></div>
                            <div className="task-uploaded">Task Uploaded by Harjit Kumar</div>
                        </div>
                        <div className="upload-file3">
                            <div className="upload-time">30 Mins Ago</div>
                            <div className="center-circle"><i className="fa fa-bars"></i></div>
                            <div className="task-uploaded">Task Uploaded by Harjit Kumar</div>
                        </div>
                        <div className="upload-file4">
                            <div className="upload-time">30 Mins Ago</div>
                            <div className="center-circle"><i className="fa fa-bars"></i></div>
                            <div className="task-uploaded">Task Uploaded by Harjit Kumar</div>
                        </div>
                        <div className="upload-file5">
                            <div className="upload-time">30 Mins Ago</div>
                            <div className="center-circle"><i className="fa fa-bars"></i></div>
                            <div className="task-uploaded">Task Uploaded by Harjit Kumar</div>
                        </div>
                        <div className="upload-file6">
                            <div className="upload-time">30 Mins Ago</div>
                            <div className="center-circle"><i className="fa fa-bars"></i></div>
                            <div className="task-uploaded">Task Uploaded by Harjit Kumar</div>
                        </div>
                        
                </div>
                <div className="activity-status">
                    <div className="status-heading">Activity Status</div>
                    <div className="add-btn">Add</div>
                    <div className="for-btn"><i class="fas fa-exclamation"></i></div>
                    <div className="delete-btn"><i class="fas fa-trash"></i></div>
                    <div className="print-btn"><i class="fa fa-print"></i></div>
                    <input placeholder="Search" className="search-box"/>
                    <div className="print-btn1"><i class="fa fa-print"></i></div>
                    <div className="act-status-header">
                        <ul>
                            <li>Sr. No.</li>
                            <li>Student Name</li>
                            <li>Task Name</li>
                            <li>Status</li>
                        </ul>
                    </div>
                    <div className="task-upload-status">
                        <ul>
                            <li>1</li>
                            <li>Harjit Kumar</li>
                            <li>Dashboard</li>
                            <li className="status-btn">Not Done</li>
                        </ul>
                    </div>
                    <div className="task-upload-status1">
                        <ul>
                            <li>2</li>
                            <li>Harjit Kumar</li>
                            <li>Dashboard</li>
                            <li className="status-btn">Not Done</li>
                        </ul>
                    </div>
                    <div className="task-upload-status2">
                        <ul>
                            <li>3</li>
                            <li>Harjit Kumar</li>
                            <li>Dashboard</li>
                            <li className="status-btn">Not Done</li>
                        </ul>
                    </div>
                    <div className="task-upload-status3">
                        <ul>
                            <li>4</li>
                            <li>Harjit Kumar</li>
                            <li>Dashboard</li>
                            <li className="status-btn">Not Done</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default DashboardNew;