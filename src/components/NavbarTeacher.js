import React, { useEffect } from 'react';
import "./compostyle.css";
import { useDispatch } from 'react-redux';
import { TOGGLESTD, TOGGLENOTI } from '../redux/actions/action';
import { useSelector } from "react-redux";
import {  AiOutlineCalendar } from 'react-icons/ai';
import { PiGraduationCapBold } from 'react-icons/pi';


const NavbarTeacher = () => {
  const teachersstudnt = useSelector((state) => state.cartreducer.teachersstudnt);
  const teachersnotice = useSelector((state) => state.cartreducer.teachersnotice);

  const dispatch = useDispatch();

  const toggletestudent = (e) => {
    dispatch(TOGGLESTD(e));
  }
  const toggletenotice = (e) => {
    dispatch(TOGGLENOTI(e));
  }

  return (
    <div className='navmain'>
      <div className="nav-center">

        <div className="navstudents nav-ad" onClick={() => toggletestudent(teachersstudnt)}>      <PiGraduationCapBold />    Students</div>
        <div className="nav-noties nav-ad" onClick={() => toggletenotice(teachersnotice)}>   <AiOutlineCalendar /> Notices</div>


      </div>
    </div>
  )
}

export default NavbarTeacher;