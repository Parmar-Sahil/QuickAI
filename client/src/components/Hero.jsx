import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[url('/gradientBackground.png')] bg-cover bg-no-repeat min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Hero content */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black">
        Create amazing content <br /> with <span className="text-primary">AI tools</span>
      </h1>

      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
        Transform your content creation with our suite of premium AI tools. Write articles,
        generate images, and enhance your workflow.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate('/ai')}
          className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition"
        >
          Start creating now
        </button>
        <button
          className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition"
        >
          Watch demo
        </button>
      </div>

      {/* User trust indicator */}
      <div className="mt-6 flex items-center gap-2">
        <img src={assets.user_group} alt="users" className="h-8" />
        <p className="text-sm text-gray-700 font-medium">Trusted by 10k+ people</p>
      </div>
    </div>
  );
};

export default Hero;
