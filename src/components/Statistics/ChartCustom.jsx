import React from "react";
import { Tooltip, ResponsiveContainer, PieChart, Pie } from "recharts";
import "./Statistics.css";

const data = [
  { name: "Assignment 1", value: 60 },
  { name: "Assignment 2", value: 58 },
  { name: "Assignment 3", value: 60 },
  { name: "Assignment 4", value: 60 },
  { name: "Assignment 5", value: 35 },
  { name: "Assignment 6", value: 58 },
  { name: "Assignment 7", value: 60 },
];

export default function App() {
  return (
    <div
      className="ChartCustomContainer"
      style={{ width: "100%", height: 300 }}
    >
      <ResponsiveContainer>
        <PieChart width={1000} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#4d4d66"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
