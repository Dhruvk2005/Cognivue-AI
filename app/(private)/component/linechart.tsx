'use client'
import React, { useEffect, useRef } from 'react';

interface DataPoint {
  x: number;
  y: number;
  label: string;
}

interface Dataset {
  name: string;
  data: DataPoint[];
  color: string;
}

const LineChartComponent: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Sample data
  const datasets: Dataset[] = [
    {
      name: 'Sales',
      color: '#3b82f6',
      data: [
        { x: 0, y: 4000, label: 'Jan' },
        { x: 1, y: 3000, label: 'Feb' },
        { x: 2, y: 2000, label: 'Mar' },
        { x: 3, y: 2780, label: 'Apr' },
        { x: 4, y: 1890, label: 'May' },
        { x: 5, y: 2390, label: 'Jun' },
        { x: 6, y: 3490, label: 'Jul' },
        { x: 7, y: 4000, label: 'Aug' },
        { x: 8, y: 3200, label: 'Sep' },
        { x: 9, y: 4100, label: 'Oct' },
        { x: 10, y: 3800, label: 'Nov' },
        { x: 11, y: 4500, label: 'Dec' }
      ]
    },
    {
      name: 'Revenue',
      color: '#ef4444',
      data: [
        { x: 0, y: 2400, label: 'Jan' },
        { x: 1, y: 1398, label: 'Feb' },
        { x: 2, y: 9800, label: 'Mar' },
        { x: 3, y: 3908, label: 'Apr' },
        { x: 4, y: 4800, label: 'May' },
        { x: 5, y: 3800, label: 'Jun' },
        { x: 6, y: 4300, label: 'Jul' },
        { x: 7, y: 2400, label: 'Aug' },
        { x: 8, y: 2100, label: 'Sep' },
        { x: 9, y: 4600, label: 'Oct' },
        { x: 10, y: 3200, label: 'Nov' },
        { x: 11, y: 5100, label: 'Dec' }
      ]
    }
  ];

  const width = 600;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 60, left: 80 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Calculate scales
  const allYValues = datasets.flatMap(d => d.data.map(p => p.y));
  const maxY = Math.max(...allYValues);
  const minY = Math.min(...allYValues);
  const yRange = maxY - minY;
  const maxX = 11; // 12 months (0-11)

  const scaleX = (x: number) => (x / maxX) * chartWidth + margin.left;
  const scaleY = (y: number) => height - margin.bottom - ((y - minY) / yRange) * chartHeight;

  // Generate path for line
  const generatePath = (data: DataPoint[]) => {
    return data.map((point, index) => {
      const x = scaleX(point.x);
      const y = scaleY(point.y);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  // Generate Y-axis ticks
  const yTicks = [];
  const tickCount = 5;
  for (let i = 0; i <= tickCount; i++) {
    const value = minY + (yRange / tickCount) * i;
    yTicks.push({
      value: Math.round(value),
      y: scaleY(value)
    });
  }

  return (
    <div className="w-[60%]  bg-[#002A65] p-6  rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[white] mb-6 text-center">
        Monthly Sales & Revenue Report
      </h2>
      
      <div className="flex justify-center">
        <svg width={width} height={height} ref={svgRef} className="border border-gray-200 rounded">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
            </pattern>
          </defs>
          
          {/* Background grid */}
          <rect 
            x={margin.left} 
            y={margin.top} 
            width={chartWidth} 
            height={chartHeight} 
            fill="url(#grid)" 
          />
          
          {/* Y-axis */}
          <line 
            x1={margin.left} 
            y1={margin.top} 
            x2={margin.left} 
            y2={height - margin.bottom} 
            stroke="#ffffffff" 
            strokeWidth="2"
          />
          
          {/* X-axis */}
          <line 
            x1={margin.left} 
            y1={height - margin.bottom} 
            x2={width - margin.right} 
            y2={height - margin.bottom} 
            stroke="#ffffffff" 
            strokeWidth="2"
          />
          
          {/* Y-axis labels */}
          {yTicks.map((tick, index) => (
            <g key={index}>
              <line 
                x1={margin.left - 5} 
                y1={tick.y} 
                x2={margin.left} 
                y2={tick.y} 
                stroke="#ffffffff" 
              />
              <text 
                x={margin.left - 10} 
                y={tick.y + 4} 
                textAnchor="end" 
                className="text-sm fill-[white]"
              >
                ${tick.value.toLocaleString()}
              </text>
            </g>
          ))}
          
          {/* X-axis labels */}
          {datasets[0].data.map((point, index) => (
            <g key={index}>
              <line 
                x1={scaleX(point.x)} 
                y1={height - margin.bottom} 
                x2={scaleX(point.x)} 
                y2={height - margin.bottom + 5} 
                stroke="#ffffffff" 
              />
              <text 
                x={scaleX(point.x)} 
                y={height - margin.bottom + 20} 
                textAnchor="middle" 
                className="text-sm fill-[white]"
              >
                {point.label}
              </text>
            </g>
          ))}
          
          {/* Data lines */}
          {datasets.map((dataset, datasetIndex) => (
            <g key={datasetIndex}>
              {/* Line */}
              <path 
                d={generatePath(dataset.data)} 
                fill="none" 
                stroke={dataset.color} 
                strokeWidth="3"
                className="hover:stroke-opacity-80 transition-all duration-200"
              />
              
              {/* Data points */}
              {dataset.data.map((point, pointIndex) => (
                <circle 
                  key={pointIndex}
                  cx={scaleX(point.x)} 
                  cy={scaleY(point.y)} 
                  r="5" 
                  fill={dataset.color}
                  stroke="white"
                  strokeWidth="2"
                  className="hover:r-7 transition-all duration-200 cursor-pointer"
                >
                  <title>{`${dataset.name}: ${point.label} - $${point.y.toLocaleString()}`}</title>
                </circle>
              ))}
            </g>
          ))}
          
          {/* Chart title */}
          <text 
            x={width / 2} 
            y={25} 
            textAnchor="middle" 
            className="text-lg font-semibold fill-[white] "
          >
          </text>
          
          {/* Y-axis title */}
          <text 
            x={20} 
            y={height / 2} 
            textAnchor="middle" 
            className="text-sm font-medium fill-[white] "
            transform={`rotate(-90, 20, ${height / 2})`}
          >
            Amount ($)
          </text>
          
          {/* X-axis title */}
          <text 
            x={width / 2} 
            y={height - 10} 
            textAnchor="middle" 
            className="text-sm font-medium fill-[white]"
          >
            Month
          </text>
        </svg>
      </div>
      
      {/* Legend */}
      <div className="flex  justify-center mt-4 space-x-6">
        {datasets.map((dataset, index) => (
          <div key={index} className="flex items-center">
            <div 
              className="w-4 h-4 rounded mr-2" 
              style={{ backgroundColor: dataset.color }}
            ></div>
            <span className="text-sm font-medium text-[white]">{dataset.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineChartComponent;