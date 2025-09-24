'use client'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const customerData = [
  { month: 'Jan', new: 200, returning: 150 },
  { month: '', new: 250, returning: 180 },
  { month: 'Feb', new: 220, returning: 160 },
  { month: '', new: 280, returning: 200 },
  { month: '', new: 300, returning: 220 },
  { month: 'Mar', new: 320, returning: 240 },
  { month: '', new: 350, returning: 260 },
  { month: '', new: 380, returning: 280 },
  { month: '', new: 420, returning: 300 },
  { month: 'Apr', new: 650, returning: 450 },
  { month: '', new: 480, returning: 350 },
  { month: '', new: 720, returning: 500 },
  { month: '', new: 750, returning: 520 },
  { month: 'Jun', new: 780, returning: 540 }
];

export default function CustomerAcquisition() {
  return (
    <div className="w-full bg-white rounded-lg p-6 shadow-sm">
      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Customer Acquisition</h3>

      {/* Chart */}
      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={customerData} barCategoryGap="2%">
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
              interval={0}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
              ticks={[0, 500, 1000]}
              domain={[0, 1000]}
            />
            <Bar dataKey="new" stackId="a" fill="#3B82F6" radius={[0, 0, 0, 0]} />
            <Bar dataKey="returning" stackId="a" fill="#93C5FD" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-600" />
          <span className="text-sm text-gray-700">New</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-300" />
          <span className="text-sm text-gray-700">Returning</span>
        </div>
      </div>
    </div>
  );
}