import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { TNAME, TGENDER, DLT, WORK, REALDLT, REALEDIT, TNUMBER, TADDRESS  } from './redux/actions/action';
import {AiOutlineEdit, AiOutlineDelete  } from 'react-icons/ai';
import "./style.css";
import { useState } from 'react';

const AddTeachers = () => {
  const [classn, setClassn] = useState("1st");

  const teachername = useSelector((state) => state.cartreducer.teachername);
  const teachergender = useSelector((state) => state.cartreducer.teachergender);
  const workvalues = useSelector((state) => state.cartreducer.workvalue);
  const contectnumber = useSelector((state) => state.cartreducer.contectnumber);
  const address = useSelector((state) => state.cartreducer.address);

  const cartses = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();
  console.log(cartses);

  const changename = (ev) => {
    dispatch(TNAME(ev));
  }
  const changegender = (ev) => {
    dispatch(TGENDER(ev));
  }
  const changework = (ev) => {
    dispatch(WORK(ev));
  }

  const changenumber = (ev) => {
    dispatch(TNUMBER(ev));
  }
  const changeaddress = (ev) => {
    dispatch(TADDRESS(ev));
  }

  const sorting = (ev) => {
    const val = ev.target.value
    setClassn(val)
      }
 
  const deleteItems = (ev) => {
    dispatch(REALDLT(ev));
  }

  const editItem = (ev) => {
    dispatch(REALEDIT(ev));
  }

  
  const saves = () => {
    if (workvalues && teachername && teachergender && contectnumber && address && classn) {
      const allinpudata = {
        id: new Date().getTime().toString(),
        name: teachername,
        gender: teachergender,
        work: workvalues,
        number: contectnumber,
        address: address,
        classes: classn
      }
      dispatch(DLT(allinpudata));
    } else {
      alert("Please Enter a Valid Data")
    }

  }
  return (

    <div className='admin-right'>
<div className="add-teacher">ADD NEW TECHER</div>
      <div className="add-space">



        <div className="work-main">
          <div className="work-left"> Name<sup className='sup'>*</sup>  : </div>
          <div className="work-text">
            <input type="text" placeholder="Enter Name"
              value={teachername}
              onChange={(e) => changename(e.target.value)}
              className="  login-in"
            />
          </div>
        </div>

        <div className="work-main">
          <div className="work-left">Gender<sup className='sup'>*</sup>  : </div>
          <div className="work-text">
            <input type="text" placeholder="Enter Gender"
              value={teachergender}
              onChange={(e) => changegender(e.target.value)}
              className="input-fild "
            />
          </div>
        </div>

        <div className="work-main">
          <div className="work-left">Work <sup className='sup'>*</sup> Experience : </div>
          <div className="work-text">
            <input type="text" placeholder="Enter Work Experience"
              value={workvalues}
              onChange={(e) => changework(e.target.value)}
              className="  login-in"
            />
          </div>
        </div>



      </div>








      <div className="add-space">



        <div className="work-main">
          <div className="work-left"> Number <sup className='sup'>*</sup> : </div>
          <div className="work-text">
            <input type="number" placeholder="Enter Contect Number"
              value={contectnumber}
              onChange={(e) => changenumber(e.target.value)}
              className="  login-in"
            />
          </div>
        </div>

        <div className="work-main">
          <div className="work-left">Address <sup className='sup'>*</sup> : </div>
          <div className="work-text">
            <input type="text" placeholder="Enter Address"
              value={address}
              onChange={(e) => changeaddress(e.target.value)}
              className="input-fild "
            />
          </div>
        </div>

        <div className="work-main">
          <div className="work-left">CHOOSE CLASS <sup className='sup'>*</sup> : </div>
          <div className="work-text">
            
            <select
              name="sort"
              id="sort"
              className="  login-inn"
             onClick={sorting}
              >
                       <option value="1st"> class 1st</option>
              <option value="#" disabled></option>
              <option value="2nd">class 2nd</option>
              <option value="#" disabled></option>
              <option value="3rd">class 3rd</option>
              <option value="#" disabled></option>
              <option value="4th">class 4th</option>
              <option value="#" disabled></option>
              <option value="5th">class 5th</option>
            </select>
         
          </div>
        </div>



      </div>






      <div className="sub-btnn">
        <div onClick={saves} className='btnsub'>Save</div>
      </div>




      {cartses.map((elem) => {
        return (<div key={elem.id} className="main-bored ">
          <div className="disply-flex-pur">
            <div className="head"> <span className="spanpur"> TEACHER NAME: </span> {elem.name}</div>
            <div className="head"> <span className="spanpur"> GENDER: </span> {elem.gender}</div>
            <div className="head"> <span className="spanpur"> WORK: </span> {elem.work}</div>

            <div className="head"> <span className="spanpur"> TEACHER NUMBER: </span> {elem.number}</div>
            <div className="head"> <span className="spanpur"> ADDRESS: </span> {elem.address}</div>
            <div className="head"> <span className="spanpur"> CLASSES: </span> {elem.classes}</div>


            <div style={{ display: "flex" }}>
              <button onClick={() => editItem(elem.id)} className="edit-board"><AiOutlineEdit/>Edit</button>
              <button onClick={() => deleteItems(elem.id)} className="delete-board"><AiOutlineDelete/>Delete</button>
            </div>
          </div>
        </div>
        )
      })}
    </div>

  )
}

export default AddTeachers;