import React from 'react';
import { Route, Routes } from 'react-router-dom';
import VideoFeed from './VideoFeed';
import Profile from './Profile';
import Navbar from './Navbar';

function MainApp() {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="flex-grow overflow-hidden md:order-2">
        <Routes>
          <Route index element={<VideoFeed />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default MainApp;
