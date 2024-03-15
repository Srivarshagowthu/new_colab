import React from 'react'
import HomePage from './Components/Homepage/HomePage';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import ResourcesPage from './Components/ResourcePage/ResourcePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './Components/ContactUs/ContactUs';
import Community from './Components/Community/Community';

function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resources" element={<ResourcesPage/>}/>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/community" element={<Community/>} />
        </Routes>
      </div>
  )
}

export default App
