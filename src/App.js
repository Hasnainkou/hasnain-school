import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import Home from './Home';
import Header from './components/Header';
import Admin from './Admin';
import Student from './Student';
import Teacher from './Teacher';
import Shifter from './Shifter';
function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/shifter" element={<Shifter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
