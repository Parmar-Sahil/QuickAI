import { Protect, useClerk, useUser} from '@clerk/clerk-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  House,
  SquarePen,
  Hash,
  Image,
  Eraser,
  Scissors,
  FileText,
  Users,
  LogOut
} from 'lucide-react';

const Sidebar = ({ sidebar, setSidebar }) => {
  const navItems = [
    { to: '/ai', label: 'Dashboard', Icon: House },
    { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
    { to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash },
    { to: '/ai/generate-image', label: 'Generate Images', Icon: Image },
    { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
    { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
    { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
    { to: '/ai/community', label: 'Community', Icon: Users },
  ];

  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full">
        <img
          src={user.imageUrl}
          alt="User avatar"
          className="w-16 h-16 rounded-full mx-auto"
        />
        <h1 className="mt-2 text-center font-medium text-gray-700">
          {user.fullName}
        </h1>
      </div>

      <div className="flex flex-col gap-2 w-full px-4">
        {navItems.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/ai'}
            onClick={() => setSidebar(false)}
            className={({ isActive }) =>
              `px-3.5 py-2.5 flex items-center gap-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }>
                {
                    ({isActive}) => (
                        <>
                            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
                            {label}
                        </>
                    )
                }
            
          </NavLink>
        ))}
      </div>

      <div className="mb-6 w-full px-4">
  <div
    onClick={openUserProfile}
    className="flex items-center justify-between p-3 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer"
  >
  <img src={user.imageUrl} alt="user" className='w-8 rounded-full' />
    <div className="flex flex-col text-sm">
      <span className="font-medium text-gray-800">{user.fullName}</span>
      <span className="text-gray-600">
        <Protect plan="premium" fallback="Free">Premium</Protect> Plan
      </span>
    </div>
    <LogOut
      onClick={(e) => {
        e.stopPropagation(); // prevent triggering openUserProfile
        signOut();
      }}
      className="w-5 h-5 text-red-500 hover:text-red-600"
    />
  </div>
</div>

    </div>
  );
};

export default Sidebar;
