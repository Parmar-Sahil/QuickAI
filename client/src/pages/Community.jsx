import React, { useEffect, useState } from 'react';
import { dummyPublishedCreationData } from '../assets/assets';
import { useUser } from '@clerk/clerk-react';
import { Heart } from 'lucide-react';

const Community = () => {
  const { user } = useUser();
  const [creations, setCreations] = useState([]);

  const fetchCreationData = async () => {
    setCreations(dummyPublishedCreationData);
  };

  useEffect(() => {
    if (user) {
      fetchCreationData();
    }
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Community Creations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {creations.map((creation, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition"
          >
            <img
              src={creation.content}
              alt="Generated content"
              className="w-full h-56 sm:h-60 object-cover"
            />

            <div className="p-4 flex flex-col justify-between h-full">
              <p className="text-gray-800 text-sm sm:text-base font-medium line-clamp-2">{creation.prompt}</p>

              <div className="flex items-center justify-between mt-3">
                <p className="text-sm text-gray-500">{creation.likes.length} Likes</p>

                <Heart
                  className={`min-w-5 h-5 hover:scale-110 cursor-pointer transition-colors ${
                    creation.likes.includes(user.id)
                      ? 'fill-red-500 text-red-600'
                      : 'text-gray-400 hover:text-red-500'
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
