import React, { useEffect, useState } from 'react';
import { dummyCreationData } from '../assets/assets';
import { Gem, Sparkles } from 'lucide-react';
import { Protect } from '@clerk/clerk-react';
import CreationItem from '../components/CreationItem';

const Dashboard = () => {
  const [creation, setCreation] = useState([]);

  const getDashboardData = async () => {
    setCreation(dummyCreationData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="space-y-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Total Creations</p>
            <h2 className="text-3xl font-semibold">{creation.length}</h2>
          </div>
          <div className="text-blue-500 bg-blue-100 p-3 rounded-full">
            <Sparkles />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Plan Status</p>
            <h2 className="text-xl font-semibold">
              <Protect plan="premium" fallback="Free">Premium</Protect>
            </h2>
          </div>
          <div className="text-pink-500 bg-pink-100 p-3 rounded-full">
            <Gem />
          </div>
        </div>
      </div>

      {/* Recent Creations */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Creations</h3>
        <div className="space-y-4">
          {creation.map((item) => (
            <CreationItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
