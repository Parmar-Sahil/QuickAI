import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-10 md:px-20 lg:px-24 xl:px-32 pt-12 bg-white text-gray-500 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-300 pb-8">
        {/* Logo and Description */}
        <div className="md:max-w-md">
          <img className="h-9" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            Experience the power of AI with QuickAi.<br />
            Transform your content creation with our suite of premium AI tools. Write articles,
            generate images, and enhance your workflow.
          </p>
        </div>

        {/* Links and Newsletter */}
        <div className="flex flex-col sm:flex-row gap-10 flex-1 justify-between">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-md">
            <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
            <p className="text-sm mb-4">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className="flex items-center gap-2">
              <input
                className="border border-gray-300 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full h-10 rounded px-3"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-blue-600 text-white h-10 px-4 rounded hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs sm:text-sm pt-6 pb-4 text-gray-400">
        © 2025 QuickAi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;