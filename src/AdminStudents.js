import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { SNAME, SGENDER, SSAVE, STDDLT, STDEDIT, CHPASS } from './redux/actions/action';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import "./style.css";
import { useState } from 'react';

const AdminStudent = () => {
  const [classn, setClassn] = useState("1st");
  const sname = useSelector((state) => state.cartreducer.sname);
  const sgender = useSelector((state) => state.cartreducer.sgender);
  const student = useSelector((state) => state.cartreducer.student);
  const spassword = useSelector((state) => state.cartreducer.spassword);
  const dispatch = useDispatch();

  const changenamest = (ev) => {
    dispatch(SNAME(ev));
  }
  const changegenderst = (ev) => {
    dispatch(SGENDER(ev));
  }

  const sorting = (ev) => {
    const val = ev.target.value
    setClassn(val)
  }


  const deleteItems = (ev) => {
    dispatch(STDDLT(ev));
  }

  const editItem = (ev) => {
    dispatch(STDEDIT(ev));
  }


  const changegepass = (ev) => {
    dispatch(CHPASS(ev));
  }

  const saves = () => {
    if (classn && sname && sgender) {
      const allinpudata = {
        id: new Date().getTime().toString(),
        sname: sname,
        sgender: sgender,
        sclass: classn,
        spassword: spassword
      }
      dispatch(SSAVE(allinpudata));
    } else {
      alert("Please Enter a Valid Data")
    }
  }


  let fisrtclass = student.filter(
    (curItem) => curItem.sclass == "1st"
  );
  let secondclass = student.filter(
    (curItem) => curItem.sclass == "2nd"
  );
  let thirdclass = student.filter(
    (curItem) => curItem.sclass == "3rd"
  );
  let fourthclass = student.filter(
    (curItem) => curItem.sclass == "4th"
  );
  let fifthclass = student.filter(
    (curItem) => curItem.sclass == "5th"
  );

  return (

    <div className='admin-right'>
      <div className="add-teacher">ADD NEW STUDENT</div>

      <div className="add-space">
        <div className="work-main">
          <div className="work-left"> Name<sup className='sup'>*</sup>  : </div>
          <div className="work-text">
            <input type="text" placeholder="Enter Username"
              value={sname}
              onChange={(e) => changenamest(e.target.value)}
              className="  login-in"
            />
          </div>
        </div>

        <div className="work-main">
          <div className="work-left">Gender<sup className='sup'>*</sup>  : </div>
          <div className="work-text">
            <input type="text" placeholder="Enter Gender"
              value={sgender}
              onChange={(e) => changegenderst(e.target.value)}
              className="input-fild "
            />
          </div>
        </div>

        <div className="work-main">
          <div className="work-left">CHOOSE CLASS <sup className='sup'>*</sup>  </div>
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
      <div className="work-main" style={{ marginLeft: "20px" }}>
        <div className="work-left">Password<sup className='sup'>*</sup>  : </div>
        <div className="work-text">
          <input type="text" placeholder="Enter Password"
            value={spassword}
            onChange={(e) => changegepass(e.target.value)}
            className="input-fild-new "
          />
        </div>
      </div>

      <div className="sub-btnn">
        <div onClick={saves} className='btnsub'>Save</div>
      </div>


      {/* first class */} <div className="mater-div-ad">
        <div style={{ textAlign: "center", fontSize: "20px", }} className='class-div'>1st Class</div></div>
      {fisrtclass.map((elem) => {
        return (<div key={elem.id} className="main-bored ">
          <div className="disply-flex-pur">
            <div className="head"> <span className="spanpur"> STUDENT NAME: </span> {elem.sname}</div>
            <div className="head"> <span className="spanpur"> GENDER: </span> {elem.sgender}</div>
            <div className="head"> <span className="spanpur"> CLASS: </span> {elem.sclass}</div>

            <div style={{ display: "flex" }}>
              <button onClick={() => editItem(elem.id)} className="edit-board"><AiOutlineEdit />Edit</button>
              <button onClick={() => deleteItems(elem.id)} className="delete-board"><AiOutlineDelete />Delete</button>
            </div>
          </div>
        </div>
        )
      })}

      {/* first class end */}

      {/* secondclass class */} <div className="mater-div-ad">
        <div style={{ textAlign: "center", fontSize: "20px", }} className='class-div'>2nd Class</div></div>
      {secondclass.map((elem) => {
        return (<div key={elem.id} className="main-bored ">
          <div className="disply-flex-pur">
            <div className="head"> <span className="spanpur"> STUDENT NAME: </span> {elem.sname}</div>
            <div className="head"> <span className="spanpur"> GENDER: </span> {elem.sgender}</div>
            <div className="head"> <span className="spanpur"> CLASS: </span> {elem.sclass}</div>

            <div style={{ display: "flex" }}>
              <button onClick={() => editItem(elem.id)} className="edit-board"><AiOutlineEdit />Edit</button>
              <button onClick={() => deleteItems(elem.id)} className="delete-board"><AiOutlineDelete />Delete</button>
            </div>
          </div>
        </div>
        )
      })}

      {/* secondclass end */}

      {/* thirdclass class */} <div className="mater-div-ad">
        <div style={{ textAlign: "center", fontSize: "20px", }} className='class-div'>3rd Class</div></div>
      {thirdclass.map((elem) => {
        return (<div key={elem.id} className="main-bored ">
          <div className="disply-flex-pur">
            <div className="head"> <span className="spanpur"> STUDENT NAME: </span> {elem.sname}</div>
            <div className="head"> <span className="spanpur"> GENDER: </span> {elem.sgender}</div>
            <div className="head"> <span className="spanpur"> CLASS: </span> {elem.sclass}</div>

            <div style={{ display: "flex" }}>
              <button onClick={() => editItem(elem.id)} className="edit-board"><AiOutlineEdit />Edit</button>
              <button onClick={() => deleteItems(elem.id)} className="delete-board"><AiOutlineDelete />Delete</button>
            </div>
          </div>
        </div>
        )
      })}

      {/* thirdclass end */}

      {/* fourthclass class */} <div className="mater-div-ad">
        <div style={{ textAlign: "center", fontSize: "20px", }} className='class-div'>4th Class</div></div>
      {fourthclass.map((elem) => {
        return (<div key={elem.id} className="main-bored ">
          <div className="disply-flex-pur">
            <div className="head"> <span className="spanpur"> STUDENT NAME: </span> {elem.sname}</div>
            <div className="head"> <span className="spanpur"> GENDER: </span> {elem.sgender}</div>
            <div className="head"> <span className="spanpur"> CLASS: </span> {elem.sclass}</div>

            <div style={{ display: "flex" }}>
              <button onClick={() => editItem(elem.id)} className="edit-board"><AiOutlineEdit />Edit</button>
              <button onClick={() => deleteItems(elem.id)} className="delete-board"><AiOutlineDelete />Delete</button>
            </div>
          </div>
        </div>
        )
      })}

      {/* fourthclass end */}

      {/* fifthclass */} <div className="mater-div-ad">
        <div style={{ textAlign: "center", fontSize: "20px" }} className='class-div'>5th Class</div></div>
      {fifthclass.map((elem) => {
        return (<div key={elem.id} className="main-bored ">
          <div className="disply-flex-pur">
            <div className="head"> <span className="spanpur"> STUDENT NAME: </span> {elem.sname}</div>
            <div className="head"> <span className="spanpur"> GENDER: </span> {elem.sgender}</div>
            <div className="head"> <span className="spanpur"> CLASS: </span> {elem.sclass}</div>

            <div style={{ display: "flex" }}>
              <button onClick={() => editItem(elem.id)} className="edit-board"><AiOutlineEdit />Edit</button>
              <button onClick={() => deleteItems(elem.id)} className="delete-board"><AiOutlineDelete />Delete</button>
            </div>
          </div>
        </div>
        )
      })}

      {/* fifthclass end */}
    </div>

  )
}

export default AdminStudent;