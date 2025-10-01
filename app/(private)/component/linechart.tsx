'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 15000 },
  { month: 'Feb', revenue: 18000 },
  { month: 'Mar', revenue: 22000 },
  { month: 'Apr', revenue: 25000 },
  { month: 'May', revenue: 28000 },
  { month: 'Jun', revenue: 32000 },
  { month: 'Jul', revenue: 35000 },
  { month: 'Aug', revenue: 38000 },
  { month: 'Sep', revenue: 42000 },
  { month: 'Oct', revenue: 45000 },
  { month: 'Nov', revenue: 48000 },
  { month: 'Dec', revenue: 52000 }
];

const formatCurrency = (value: number) => {
  return `$${(value / 1000)}K`;
};

export default function RevenueGrowthChart() {
  return (
    <div className="w-[100%]  h-96 p-6 bg-[white] rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 ">Revenue Growth</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="month" 
            stroke="#666"
            fontSize={12}
            
          />
          <YAxis 
            tickFormatter={formatCurrency}
            stroke="#666"
            fontSize={12}
          />
          <Tooltip 
            formatter={(value: number) => [formatCurrency(value), 'Revenue']}
            labelStyle={{ color: '#666' }}
            contentStyle={{ 
              backgroundColor: '#f9f9f9', 
              border: '1px solid #ddd',
              borderRadius: '8px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#2563eb" 
            strokeWidth={3}
            dot={{ fill: '#2563eb', strokeWidth: 2, r: 5 }}
            activeDot={{ r: 7, stroke: '#2563eb', strokeWidth: 2, fill: '#fff' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}