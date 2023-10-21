import React from 'react';
import "./compostyle.css";
import { useDispatch } from 'react-redux';
import { TOGGLETEACHERS, TOGGLEHOME, TOGGLESTD, TOGGLENOTI, TOGGLECOM} from '../redux/actions/action';
import { useSelector } from "react-redux";
import { AiOutlineHome, AiOutlineCalendar  } from 'react-icons/ai';
import { GiTeacher} from 'react-icons/gi';
import { PiGraduationCapBold } from 'react-icons/pi';
 

const NavbarAdmin = () => {
  const teachershome = useSelector((state) => state.cartreducer.teachershome);
  const teacherstoggle = useSelector((state) => state.cartreducer.teacherstoggle);
  const teachersstudnt= useSelector((state) => state.cartreducer.teachersstudnt);
  const teachersnotice = useSelector((state) => state.cartreducer.teachersnotice);
  const teacherscom = useSelector((state) => state.cartreducer.teacherscom);
  const dispatch = useDispatch();

  const togglehome = (e) => {
      dispatch(TOGGLEHOME(e));
  }
  const toggleteacher = (e) => {
    dispatch(TOGGLETEACHERS(e));
}
const toggletestudent = (e) => {
  dispatch(TOGGLESTD(e));
}
const toggletenotice = (e) => {
  dispatch(TOGGLENOTI(e));
}
const toggletecom = (e) => {
  dispatch(TOGGLECOM(e));
}
  return (
    <div className='navmain'>
      <div className="nav-center">
      <div className="nav-home nav-ad" onClick={() => togglehome(teachershome)}> <AiOutlineHome/>Admin Home</div>
      <div className="navteachers nav-ad"  onClick={() => toggleteacher(teacherstoggle)} > <GiTeacher/>  Teachers</div>
      <div className="navstudents nav-ad" onClick={() => toggletestudent(teachersstudnt)}>      <PiGraduationCapBold />    Students</div>
      <div className="nav-noties nav-ad" onClick={() => toggletenotice(teachersnotice)}>   <AiOutlineCalendar /> Notices</div>
      {/* <div className="complants nav-ad" onClick={() => toggletecom(teacherscom)}><GiTeacher/> Complaints</div> */}

      </div>
    </div>
  )
}

export default NavbarAdmin;