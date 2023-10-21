import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";



const Shifter = () => {


    return (
        <div className='shift-main'>

            <div className="navyi11">

                <div className="header-center-li">
                    
                    <NavLink to="/admin" className="textdec3">
                        Admin
                    </NavLink>
                </div>
                <div className="header-center-li">
                    <NavLink to="/teacher" className="textdec3">
                        Teacher
                    </NavLink>
                </div>
                <div className="header-center-li">
                    <NavLink to="/student" className="textdec3">
                        Student
                    </NavLink>
                </div>
            </div>


{/* 
            <div className="shiftadmin">

            </div>
            <div className="shiftteacher">

            </div>
            <div className="shiftstudent">

            </div> */}
        </div>
    )
}

export default Shifter;