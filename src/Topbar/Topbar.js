import React, { Component } from 'react';
import '../Topbar/Topbar.css';

class Topbar extends Component{
    render(){
        return(
            <div className="top-bar">
            {/* <div className="Bar">-</div>
            <div className="Bar">-</div>
            <div className="Bar">-</div> */}
                <div className="top-bar-icon">
                    <ul>
                        <li className="topbar-font"><i className="fa fa-bell"></i></li>
                        <li><i className="fa fa-envelope"></i></li>
                        <li className="pro-pic"></li>
                        <li><i class="fa fa-gear"></i></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Topbar;