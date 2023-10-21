import React from 'react';
import { useSelector } from "react-redux";
import AddTeachers from './AddTeachers';
import NavbarTeacher from './components/NavbarTeacher';
import "./style.css";
import AdminCom from './AdminCom';
import AdminHome from './AdminHome';
import AdminNotice from './AdminNotice';
import AdminStudents from './AdminStudents';



const Teacher = () => {

  const teacherstoggle = useSelector((state) => state.cartreducer.teacherstoggle);
  const teacherscom = useSelector((state) => state.cartreducer.teacherscom);
  const teachersnotice = useSelector((state) => state.cartreducer.teachersnotice);
  const teachersstudnt = useSelector((state) => state.cartreducer.teachersstudnt);
  const teachershome = useSelector((state) => state.cartreducer.teachershome);

  return (
    <div className='admin-main' >
      <NavbarTeacher />

  
           {teachersnotice && (
        <AdminNotice  />
      )}
           {teachersstudnt && (
        <AdminStudents />
      )}


    </div>
  )
}

export default Teacher;