import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiToolsData } from '../assets/assets';
import { useUser } from '@clerk/clerk-react';

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="px-4 sm:px-10 md:px-20 py-16 text-center">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Powerful AI Tools</h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {AiToolsData.map((item, index) => (
          <div
            key={index}
            onClick={() => user && navigate(item.path)}
            className="cursor-pointer bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition w-80 h-60 flex flex-col justify-between"
          >
            <div className="flex flex-col items-start">
              <div
                className="w-14 h-14 flex items-center justify-center rounded-md mb-3"
                style={{ background: `linear-gradient(to bottom, ${item.bg.from}, ${item.bg.to})` }}
              >
                <item.Icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-gray-800">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-600 text-left leading-snug">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
