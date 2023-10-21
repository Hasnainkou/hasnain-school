import React from 'react';
import { useSelector } from 'react-redux';

const AdminHome = () => {
  const teachername = useSelector((state) => state.cartreducer.carts);
  const student = useSelector((state) => state.cartreducer.student);
  const admindataall = useSelector((state) => state.cartreducer.admindataall);
  const arrylength = teachername.length
  const stdlength = student.length

  return (<>
    <div className='admin-right'>
      <div className="add-space">
        <div className="adhome-f ad-home">
          <div> <img src="./img1.png" alt="dv" className="adgome-img" /></div>
          <div className='ad-home-total'>Total Student</div>
          <div className='ad-home-total'>{stdlength}</div>
        </div>

        <div className="adhome-f ad-home">
          <div> <img src="./img2.png" alt="dv" className="adgome-img" /></div>
          <div className='ad-home-total'>Total Classes</div>
          <div className='ad-home-total'>5</div>
        </div>

        <div className="adhome-f ad-home">
          <div> <img src="./img3.png" alt="dv" className="adgome-img" /></div>
          <div className='ad-home-total'>Total Teachers</div>
          <div className='ad-home-total'>{arrylength}</div>
        </div>
      </div>
      <h3 style={{textAlign:"center"}}>Welcome to the dashboard "{admindataall.adminname}"</h3>
    </div>
  
    </>
  )
}

export default AdminHome;