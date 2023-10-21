import React, { useEffect } from 'react';
import "./compostyle.css";
import { useDispatch } from 'react-redux';
import { TOGGLETEACHERS, TOGGLEHOME, TOGGLESTD, TOGGLENOTI, TOGGLECOM} from '../redux/actions/action';
import { useSelector } from "react-redux";
import { AiOutlineHome, AiOutlineCalendar  } from 'react-icons/ai';
import { GiTeacher} from 'react-icons/gi';
import { PiGraduationCapBold } from 'react-icons/pi';
 

const NavbarTeacher = () => {
   const teachersstudnt= useSelector((state) => state.cartreducer.teachersstudnt);
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