import React from "react";
import { NavLink } from "react-router-dom";
import "./compostyle.css";

const Nav = () => {
    return (
        <>
            <div className="navdisplay">
                <ul className="navyi">
                    <li>
                        <NavLink to="/" className="textdec">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin" className="textdec">
                            Admin
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/teacher" className="textdec">
                            Teacher
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/student" className="textdec">
                            Student
                        </NavLink>
                    </li>

                </ul>

            </div>

        </>

    );
}

export default Nav;