import React, { useState } from 'react';
import { SIGNUPT,LOGINA } from './redux/actions/action';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import "./style.css";

const AdminLogin = () => {

  const [inputdata, setInputData] = useState("");
  const [pass, setPass] = useState("");
  const [saved, setSaved] = useState({});
  const adminsignup = useSelector((state) => state.cartreducer.adminsignup);
  const dispatch = useDispatch();
  // const Bruno = adminsignup.find((person) => person.adminname === inputdata)
// console.log(Bruno)
const userlogin = adminsignup.filter((el, k) => {
  return el.adminname === inputdata && el.adminpass === pass
});
  const passchange = (e) => {
    setPass(e.target.value)
    // if (Bruno) {
    //   setSaved(Bruno)
    // }
  }
  const signupclick = (e) => {
    dispatch(SIGNUPT());
  }
  
  const checkd = () => {
    if (userlogin.length === 0) {  
     toast.error('Invalid credentials', {
      position: "top-center",
  });
    } else {
      dispatch(LOGINA(userlogin[0]));
    }
  }
  return (
    <div className="st-input">
          <div className="st-main-div">
            <div className="img-div-sg">
              <img src="./te.jpg" alt="" className='img-main-st-sg' />
            </div>
            <h3 style={{textAlign:"center"}}>Admin Login</h3>
            <div className='in-main'>
                   <input type="text" value={inputdata} id="demowe" onChange={(e) => setInputData(e.target.value)} placeholder='Username' className='in-main' /></div>
            <div className='in-main'>
              <input type="password" value={pass} id="demoer" onChange={passchange} className='in-main' placeholder='Password' /></div>
            <div className="sub-btnnw">
              {/* <div onClick={checkd} className='btnsubss'>Log In</div> */}
              <Button variant="contained" onClick={checkd}  className='btnsubss'>Log In</Button>
            </div>
          
            <p style={{textAlign:"center"}}>Don't have an account? <span onClick={signupclick} className='sign-up-a'> Sign Up </span></p>
          </div>
          <ToastContainer />

        </div>
  )
}

export default AdminLogin;