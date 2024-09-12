/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Remove useNavigate import
import Navbar from './Components/Navbar/Navbar';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Partners from './Components/Partners/Partners';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Training from './Components/Training/Training';
import Enroll from './Components/Enroll/Enroll';
import Team from './Components/Team/Team';
import HomePage from './Components/Home/Home';

import TalentInitiatives from './Components/TalentInitiatives/TalentInitiatives';
import Collaborations from './Components/Collaborations/Collaborations';
// import Announcements from './Components/Annoucements/Annoucements';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setLoginUser] = useState({});
  const [playState, setPlayState] = useState(false);
  // const navigate = useNavigate(); // Remove useNavigate hook

  const handleLogin = (user) => {
    setLoginUser(user);
    setIsLoggedIn(true);
    // navigate('/home'); // Navigate to home page after login
  };

  const handleLogout = () => {
    setLoginUser({});
    setIsLoggedIn(false);
    // navigate('/login'); // Navigate to login page after logout
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login setLoginUser={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses isLoggedIn={isLoggedIn} />} />
        <Route path="/training" element={<Training />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Team />
      <TalentInitiatives/>
      <Partners/>
      <Collaborations/>
     
      <Footer />
     
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </Router>
  );
};

export default App;
