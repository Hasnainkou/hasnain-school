import React from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { ADMINSIGN } from './redux/actions/action';

const AdminSignup = () => {
    const [inputdata, setInputData] = useState("");
    const [pass, setPass] = useState("");
    const [rpass, setRpass] = useState("");
    const adminsignup = useSelector((state) => state.cartreducer.adminsignup);
    const dispatch = useDispatch();

    const checkd = () => {
        const alldataobj = {
            adminname : inputdata,
            adminpass : pass
        }
        if ( inputdata && rpass === pass && pass.length !== 0) {
         dispatch(ADMINSIGN(alldataobj));
      alert("Sign Up Successful")
        } else if (rpass !== pass){
            alert('Password should be same');
        }
         else {
          alert('Please Enter the all input details');
        }
      }

  return (
    <div className="st-input">
      <div className="st-main-div">
        <div className="img-div-sg">
          <img src="./te.jpg" alt="" className='img-main-st-sg' />
        </div>
        <h3 style={{textAlign:"center"}}>Admin Register</h3>
        <div >Username<sup className='sup'>*</sup> </div>
        <div className='in-main-sg '>
          <input type="text" value={inputdata} id="demo" onChange={(e) => setInputData(e.target.value)} placeholder='Enter Your Username' className='in-main-sg ht-sg' /></div>
          <div >Password<sup className='sup'>*</sup> </div>
        <div className='in-main-sg'>
          <input type="password" value={pass} id="demo1" onChange={(e) => setPass(e.target.value)} className='in-main-sg ht-sg' placeholder='Enter Your Password' /></div>

          <div >Re Enter Password<sup className='sup'>*</sup> </div>
        <div className='in-main-sg'>
          <input type="password" value={rpass} id="demo2" onChange={(e) => setRpass(e.target.value)} className='in-main-sg ht-sg' placeholder='Re Enter Your Password' /></div>



        <div className="sub-btnnw">
          <div onClick={checkd} className='btnsubss'>Sign Up</div>
        </div>
      </div>
    </div>
  )
}

export default AdminSignup;