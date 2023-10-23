import React from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
const Home = () => {
  return (
    <div className='homemain'>
      <div className="homeimgdiv">    <img src="home.jpg" alt="" className='homeimg' /></div>
      <div className="hometextdiv">
        <h1>Welcome to School Management Application </h1>
        <p className='homep'>The modern education technology provides us with a more practical and efficient set up for teaching techniques. In order to make classes more interesting and interactive, schools are now constructing a hybrid learning environment around the students.</p>
        <div className="homeget">
          <NavLink to="/shifter" className="textdec">
        
              <Button variant="contained"  className="btnsubewsdr green"> Get Started</Button>
            </NavLink>
            
        </div>
      </div>
    </div>
  )
}

export default Home;