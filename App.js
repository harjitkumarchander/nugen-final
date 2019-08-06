import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { YAxis, XAxis, Tooltip, data , AreaChart, Area, CartesianGrid, BarChart, Bar, Legends} from 'recharts';
import Sidebar from './Sidebar/Sidebar';
import Topbar from './Topbar/Topbar';
import Course from './Courses/Course';
// import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter, Router, Route} from 'react-router-dom';
import Chart1 from './Chart1';
import Login from './Login/Login';
import DashboardNew from './Dashboard/DashboardNew';
import CreateBatch from './Batch/CreateBatch';
import Addcourse from './Addmissions/Addcourse';
import Addmission from './Addmissions/Addmission';
import Batchdetail from './Batch/Batchdetail';
// import Login from './Login/Login';

function App() {
  return (
    // <Router>
    <div className="App">
      {/* <Login /> */}
      <Sidebar />
      {/* <Route path="/" exact component={Sidebar} /> */}
      <Topbar />
      {/* <Dashboard /> */}
      {/* <DashboardNew /> */}
      {/* <Login history={this.props.history}/> */}
      {/* <Chart1 />       */}
      {/* <Login /> */}
      {/* <Addmission /> */}
      {/* <CreateBatch /> */}
      {/* <Addcourse /> */}
      <Route exact path="/dashboardNew" component={DashboardNew} />
      <Route path="/addmission" component={Addmission} />
      <Route path="/batchdetail" component={Batchdetail} />
      <Route path="/course" component={Course} />
      {/* <Route path="/createbatch" component={CreateBatch} /> */}
    </div>
    // </Router>
  );
}

export default App;
