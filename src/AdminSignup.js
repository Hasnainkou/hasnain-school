import React from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { ADMINSIGN } from './redux/actions/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';

const AdminSignup = () => {
  const [inputdata, setInputData] = useState("");
  const [pass, setPass] = useState("");
  const [rpass, setRpass] = useState("");
  const adminsignup = useSelector((state) => state.cartreducer.adminsignup);
  const dispatch = useDispatch();

  const checkd = () => {
    const alldataobj = {
      adminname: inputdata,
      adminpass: pass
    }
    if (inputdata && rpass === pass && pass.length !== 0) {
      dispatch(ADMINSIGN(alldataobj));
      alert("Signup Successful")
    } else if (rpass !== pass) {
      toast.error('Password should be same', {
        position: "top-center",
      });
    }
    else {
      toast.error('Please enter the all input details', {
        position: "top-center",
      });
    }
  }

  return (
    <div className="st-input">
      <div className="st-main-div">
        <div className="img-div-sg">
          <img src="./te.jpg" alt="" className='img-main-st-sg' />
        </div>
        <h3 style={{ textAlign: "center" }}>Admin Register</h3>
        <div >Username<sup className='sup'>*</sup> </div>
        <div className='in-main-sg '>
          <input type="text" value={inputdata} id="demo" onChange={(e) => setInputData(e.target.value)} placeholder='Enter Your Username' className='in-main-sg ht-sg' /></div>
        <div >Password<sup className='sup'>*</sup> </div>
        <div className='in-main-sg'>
          <input type="password" value={pass} id="demo1" onChange={(e) => setPass(e.target.value)} className='in-main-sg ht-sg' placeholder='Password' /></div>

        <div >Confirm Password<sup className='sup'>*</sup> </div>
        <div className='in-main-sg'>
          <input type="password" value={rpass} id="demo2" onChange={(e) => setRpass(e.target.value)} className='in-main-sg ht-sg' placeholder='Confirm Password' /></div>

        <div className="sub-btnnw">
          {/* <div onClick={checkd} className='btnsubss'>Sign Up</div> */}
          <Button variant="contained" onClick={checkd} className='btnsubss'>Sign Up</Button>
        </div>
      </div>
      <ToastContainer />

    </div>
  )
}

export default AdminSignup;