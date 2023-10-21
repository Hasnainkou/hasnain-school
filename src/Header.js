import React from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom';
import { BsSpeedometer2 } from 'react-icons/bs';
import { GoGift } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import { PiGraduationCapBold } from 'react-icons/pi';

const Header = () => {
    return (
        <div className='navbar1'>
            <ul className="navyi">
                <li>
                    <NavLink to="/login" className="textdec">
                        <GoGift />      Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/acadmicsasion" className="textdec">
                        <BsSpeedometer2 /> Acadmicsasion
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className="textdec">
                        <GoGift />     Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/master" className="textdec">
                        <GoGift />    Master
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/organization" className="textdec">
                        <AiOutlineCalendar />  Organization
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/schoolregistration" className="textdec">
                        <PiGraduationCapBold />   SchoolRegistration
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" className="textdec">
                        <GoGift />    Users
                    </NavLink>
                </li>

            </ul>



        </div>
    )
}

export default Header;