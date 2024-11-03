import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaSearch, FaPlusSquare, FaBell, FaUser } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: '/main', icon: FaHome, label: 'Home' },
    { path: '/main/search', icon: FaSearch, label: 'Search' },
    { path: '/main/upload', icon: FaPlusSquare, label: 'Upload' },
    { path: '/main/notifications', icon: FaBell, label: 'Notifications' },
    { path: '/main/profile', icon: FaUser, label: 'Profile' },
  ];

  return (
    <nav className="flex justify-around items-center bg-white border-t border-gray-200 py-2 md:flex-col md:justify-start md:border-t-0 md:border-r md:h-screen md:w-20 md:py-8">
      {navItems.map((item) => (
        <Link 
          key={item.path}
          to={item.path} 
          className={`flex flex-col items-center md:mb-8 ${location.pathname === item.path ? 'text-blue-500' : 'text-gray-500'}`}
        >
          <item.icon className="text-2xl mb-1" />
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
