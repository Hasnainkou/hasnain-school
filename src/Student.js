import React from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { SFIND, LOGOUT } from './redux/actions/action';

const Student = () => {
  const [inputdata, setInputData] = useState("");
  const [pass, setPass] = useState("");
  const [saved, setSaved] = useState({});
  const sname = useSelector((state) => state.cartreducer.student);
  const sdata = useSelector((state) => state.cartreducer.searchdata);
  const stlogin = useSelector((state) => state.cartreducer.stlogin);
  const stdata = useSelector((state) => state.cartreducer.stdata);
  const noticeboard = useSelector((state) => state.cartreducer.noticeboard);
  const dispatch = useDispatch();
  const Bruno = sname.find((person) => person.sname === inputdata)

  const logout = () => {
    dispatch(LOGOUT());
    setInputData("");
    setPass("")
  }

  const passchange = (e) => {
    setPass(e.target.value)
    if (Bruno) {
      setSaved(Bruno)
    }
  }

  const checkd = () => {
    if (saved.spassword == pass) {
      dispatch(SFIND(Bruno));
    } else {
      alert('Invalid credentials');
    }
  }
  return (
    <div >
      {stlogin && (
        <div className="st-input">
          <div className="st-main-div">
            <div className="img-div">
              <img src="./st.jpg" alt="" className='img-main-st' />
            </div>
            <h3>Enter Your Login Credentials</h3>
            <div className='in-main'>
              {/* <div className="work-left"> Name<sup className='sup'>*</sup>  : </div> */}
              <input type="text" value={inputdata} id="demo" onChange={(e) => setInputData(e.target.value)} placeholder='Username' className='in-main' /></div>

            <div className='in-main'>
              <input type="password" value={pass} id="demo" onChange={passchange} className='in-main' placeholder='Password' /></div>


            <div className="sub-btnnw">
              <div onClick={checkd} className='btnsubss'>Log In</div>
            </div>


          </div>
        </div>
      )}

      {stdata && (<>
        <div className='std-logout'>

          <div className="master-div-sted">
            <div>Your Name:  {sdata.sname}</div>
            <div> Class: {sdata.sclass}</div>
            <div> Gender: {sdata.sgender}</div>
            <div className="sub-btnnqaw">
              <div onClick={logout} className='btnsubwsa'>Log Out</div>
            </div>
          </div>

        </div>


        <div style={{ textAlign: "center", fontSize: "20px", marginTop: "20px" }}>Notice Board</div>

        {noticeboard.map((elem) => {
          return (<div key={elem.id} className="main-bored ">
            <div className="disply-flex-puroi">
              <div className="header"> <span className="spanpur"> Topic: </span> {elem.name}</div>
              <div className="headerw"> <span className="spanpur"> Discription: </span> {elem.discription}</div>
              <div style={{ display: "flex" }}>

              </div>
            </div>
          </div>
          )
        })}
        {noticeboard.length === 0 && (<div style={{ textAlign: "center", fontSize: "18px", marginTop: "15px", backgroundColor: "black", color: "white" }} className='no-notie'>No Notice To Show Right Now</div>)}
      </>
      )}


    </div>
  )
}

export default Student;