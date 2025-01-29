import Login from "../pages/Login";
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
    
  )
};

export default AppRouter