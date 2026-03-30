import { FaEquals } from 'react-icons/fa';
import type { IconType } from 'react-icons';

type StatsType = {
  title: string;
  value: string;
  icon: IconType;
  trend: string;
  trendDirection: 'up' | 'down' | 'equal';
};

import {TrendingUp,TrendingDown} from "lucide-react"

function StatsCards({ title, value, icon: Icon, trend, trendDirection }: StatsType) {
  function getDirection() {
    if (trendDirection === 'up') return <div className="text-green-500"><TrendingUp /></div>;
    if (trendDirection === 'down') return <div className="text-red-500"><TrendingDown /></div>;
    return <FaEquals className="text-gray-500" />;
  }

  return (
    <div className="text-white p-4 outline-1 outline-[#525e6d] rounded-md shadow-lg w-1/3">
      <div className="flex justify-between items-center mb-4">
        <div className='outline-1 outline-[#D02752]/50 text-[#D02752] rounded-md p-1'><Icon className="lg:text-2xl text-lg" /></div>
        <div
          className={`flex gap-2 ${trendDirection === 'up' ? 'text-green-500' : trendDirection === 'down' ? 'text-red-500' : 'text-gray-500'
            }`}
        >
          {getDirection()} {trend}
        </div>
      </div>
      <div className="text-3xl font-bold mb-2 flex items-center">{value}</div>

      <div>
        <p className="font-semibold text-sm text-gray-400">{title}</p>
      </div>
    </div>
  );
}

export default StatsCards;