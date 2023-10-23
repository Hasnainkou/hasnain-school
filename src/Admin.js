import React from 'react';
import { useSelector } from "react-redux";
import AddTeachers from './AddTeachers';
import NavbarAdmin from './components/NavbarAdmin';
import "./style.css";
// import AdminCom from './AdminCom';
import AdminHome from './AdminHome';
import AdminNotice from './AdminNotice';
import AdminStudents from './AdminStudents';
import AdminSignup from './AdminSignup';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Admin = () => {
  const teacherstoggle = useSelector((state) => state.cartreducer.teacherstoggle);
  const teachersnotice = useSelector((state) => state.cartreducer.teachersnotice);
  const teachersstudnt = useSelector((state) => state.cartreducer.teachersstudnt);

  const adminloginboard = useSelector((state) => state.cartreducer.adminloginboard);
  const adminsignupboard = useSelector((state) => state.cartreducer.adminsignupboard);
  const adminmainboard = useSelector((state) => state.cartreducer.adminmainboard);
  const teachershome = useSelector((state) => state.cartreducer.teachershome);
  return (<>

    {adminloginboard && (
          <SignIn />
    )}
    {adminsignupboard && (
      <SignUp/>
      // <AdminSignup />
    )}

    {adminmainboard && (

      <div className='admin-main' >
        <NavbarAdmin />

        {teacherstoggle && (
          <AddTeachers />
        )}
        {teachershome && (
          <AdminHome />
        )}
        {teachersnotice && (
          <AdminNotice />
        )}
        {teachersstudnt && (
          <AdminStudents />
        )}
      </div>
    )}


  </>
  )
}

export default Admin;