import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";

const Shifter = () => {
    return (
        <div className='shift-main'>
            <div className="navyi11">
                <NavLink to="/admin" className="textdec3">   <div className="header-center-li-w">
                    Admin
                </div>
                </NavLink>
                <NavLink to="/teacher" className="textdec3">     <div className="header-center-li-w">
                    Teacher
                </div>
                </NavLink>
                <NavLink to="/student" className="textdec3">    <div className="header-center-li-w">
                    Student
                </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Shifter;