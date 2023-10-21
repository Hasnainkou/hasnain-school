import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { NOTICEADD, DELETENOTICE } from './redux/actions/action';
import "./style.css";
import { RxCrossCircled } from 'react-icons/rx';

const AdminNotice = () => {
  const noticeboard = useSelector((state) => state.cartreducer.noticeboard);
  console.log(noticeboard)
  const dispatch = useDispatch();
  const submithand = (event) => {
    event.preventDefault();
    const topic = event.target.topic.value
    const name = event.target.name.value
    const allinpudata = {
      id: new Date().getTime().toString(),
      name: topic,
      discription: name,
    }
    dispatch(NOTICEADD(allinpudata));
    event.target.reset();
  }

  const deletenotice = (ev) => {
    dispatch(DELETENOTICE(ev));
  }

  return (
    <div className='admin-main'>
      <div className="admin-right">
        <div className="notisdiv">
          <form onSubmit={submithand}>
            <div className='width-in'> <div className='width-tag'>  Topic<sup className='sup'>*</sup> </div>
              <div><input type="text" name='topic' required placeholder='Enter Topic Name...' className='topic' /> </div>  </div>
            <div className='width-in'> <div className='width-tag'>   Description<sup className='sup'>*</sup> </div>
              <div><input type="text" name='name' required placeholder='Enter Details...' className='details' /> </div>  </div>
            <div className="notice-sub"><input type="submit" className='width-in btnsub' /></div>
          </form></div>

        <div style={{ textAlign: "center", fontSize: "20px" }}>Notice Board</div>

        {noticeboard.map((elem) => {
          return (<div key={elem.id} className="main-bored ">
            <div className="disply-flex-puroi">
              <div className="header"> <span className="spanpur"> Topic: </span> {elem.name}</div>
              <div className="headerw"> <span className="spanpur"> Discription: </span> {elem.discription}</div>
              <div style={{ display: "flex" }}>

                <button onClick={() => deletenotice(elem.id)} className="delete-board-n"><RxCrossCircled /> </button>
              </div>
            </div>
          </div>
          )
        })}
        {noticeboard.length === 0 && (<div style={{ textAlign: "center", fontSize: "18px", marginTop: "15px" }} className='no-notie'>No Notice To Show Right Now</div>)}
      </div>
    </div>
  )
}

export default AdminNotice;