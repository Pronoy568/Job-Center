import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./Statistics.css";

const data = [
  {
    name: "Assignment 1",
    Mark: 60,
  },
  {
    name: "Assignment 2",
    Mark: 58,
  },
  {
    name: "Assignment 3",
    Mark: 60,
  },
  {
    name: "Assignment 4",
    Mark: 60,
  },
  {
    name: "Assignment 5",
    Mark: 35,
  },
  {
    name: "Assignment 6",
    Mark: 58,
  },
  {
    name: "Assignment 7",
    Mark: 60,
  },
];

export default function App() {
  return (
    <div className="AreaChartContainer">
      <AreaChart
        width={900}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="2 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="linear" dataKey="Mark" stroke="#929292" fill="#9292ac" />
      </AreaChart>
    </div>
  );
}
