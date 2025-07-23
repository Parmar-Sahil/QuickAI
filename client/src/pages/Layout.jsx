import React, { useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Menu, X } from 'lucide-react';
import { SignIn, useUser } from '@clerk/clerk-react';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  return user ? (
    <div className="w-full h-screen overflow-hidden">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 h-14 border-b border-gray-200 bg-white shadow-sm z-30">
        <img
          src={assets.logo}
          alt="logo"
          className="h-8 cursor-pointer"
          onClick={() => navigate('/')}
        />

        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
          />
        )}
      </nav>

      <div className="flex h-[calc(100%-3.5rem)]"> {/* 3.5rem = 14 * 0.25rem */}
        {/* Sidebar */}
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <SignIn />
    </div>
  );
};

export default Layout;
