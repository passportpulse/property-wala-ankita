import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';


import { BadgeCheck } from "lucide-react";

const data = [
  { name: 'BUY', value: 33.3, path: '/buy', color: '#1D4ED8' },
  { name: 'SELL', value: 33.3, path: '/sell', color: '#F97316' },
  { name: 'RENT', value: 33.3, path: '/rent', color: '#10B981' },
];

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="#FFFFFF"
        strokeWidth={2}
      />
    </g>
  );
};

// --- NEW: Function to draw Arrows and External Labels ---
const renderCustomizedLabel = (props) => {
  const { cx, cy, midAngle, outerRadius, fill, payload, navigate } = props;
  const RADIAN = Math.PI / 180;

  // Coordinates for the start of the arrow (near the pie)
  const sx = cx + (outerRadius + 5) * Math.cos(-midAngle * RADIAN);
  const sy = cy + (outerRadius + 5) * Math.sin(-midAngle * RADIAN);

  // Coordinates for the elbow of the arrow
  const mx = cx + (outerRadius + 25) * Math.cos(-midAngle * RADIAN);
  const my = cy + (outerRadius + 25) * Math.sin(-midAngle * RADIAN);

  // Coordinates for the text position
  const ex = mx + (Math.cos(-midAngle * RADIAN) >= 0 ? 1 : -1) * 15;
  const ey = my;
  const textAnchor = Math.cos(-midAngle * RADIAN) >= 0 ? 'start' : 'end';

  return (
    <g
      className="cursor-pointer transition-all duration-300 hover:opacity-70"
      onClick={() => navigate(payload.path)}
    >
      {/* The Arrow / Connector Line */}
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" strokeWidth={1.5} />
      <circle cx={ex} cy={ey} r={2.5} fill={fill} stroke="none" />

      {/* The Label Text */}
      <text
        x={ex + (Math.cos(-midAngle * RADIAN) >= 0 ? 1 : -1) * 8}
        y={ey}
        dy={5}
        textAnchor={textAnchor}
        fill={fill}
        className="text-[12px] font-bold tracking-wider uppercase"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {payload.name}
      </text>
    </g>
  );
};

const RealEstatePie = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  // Helper function to handle navigation
  const handleNavigation = (targetPath) => {
    if (targetPath) {
      navigate(targetPath);
    }
  };

  return (
    <div className="w-full h-64 md:h-80 flex justify-center items-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={80}
            dataKey="value"
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onMouseDown={(entry) => handleNavigation(entry.path)}
            onClick={(entry) => handleNavigation(entry.path)}
            label={(props) => renderCustomizedLabel({ ...props, navigate })}
            className="outline-none cursor-pointer"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke="#FFFFFF"
                strokeWidth={2}
                className="cursor-pointer"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealEstatePie;