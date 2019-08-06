import React, { Component } from 'react';
import './Addmission.css';
import Addcourse from './Addcourse';

class Addmission extends Component{
    render(){
        return(
            <div>
                <div className="add-box"></div>
                <Addcourse />
            </div>
        );
    }
}
export default Addmission;