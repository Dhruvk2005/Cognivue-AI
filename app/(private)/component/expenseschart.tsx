'use client'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const expenseData = [
  { name: 'Marketing', value: 35, color: '#3B82F6' },
  { name: 'Operations', value: 25, color: '#60A5FA' },
  { name: 'Salaries', value: 30, color: '#93C5FD' },
  { name: 'Other', value: 10, color: '#DBEAFE' }
];

export default function ExpenseBreakdown() {
  return (
    <div className="w-[100%] bg-white rounded-lg p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Expense Breakdown</h3>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
          View All
        </button>
      </div>

      <div className="flex items-center gap-6">
        {/* Donut Chart */}
        <div className="w-52 h-52">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3">
          {expenseData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[20px] text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}