import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="flex-grow overflow-hidden md:order-2">
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
}

export default MainLayout;
