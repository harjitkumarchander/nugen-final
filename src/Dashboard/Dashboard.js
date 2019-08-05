import React, { Component } from 'react';
import '../Dashboard/Dashboard.css';
import Chart1 from '../Chart1';
import Chart2 from './Chart/Chart2';
class Dashboard extends Component{
    render(){
        return(
            <div className="main"> 
            <div className="dash1">Dashboard-1 <Chart1 /> </div>
            <div className="dash2">Dashboard-2
            <Chart2 />
            </div>
            <div className="dash3">Dashboard-3</div>
            <div className="dash4">Dashboard-4</div>
            <div className="dash5">Dashboard-5</div>
            <div className="dash6">Dashboard-6</div>
            <div className="dash7">Dashboard-7</div>
            <div className="dash8">Dashboard-8</div>
            </div>
        );
    }
}
export default Dashboard;