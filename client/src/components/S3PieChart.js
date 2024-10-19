// src/components/S3PieChart.js
import React from "react";
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./S3PieChart.css"; // Import the CSS file

const data = [
  { name: "Account A", value: 400 },
  { name: "Account B", value: 300 },
  { name: "Account C", value: 300 },
  { name: "Account D", value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const S3PieChart = () => {
  return (
    <div className="pie-chart-container">
      <div className="pie-chart-header">
        <div className="pie-chart-title">Account Distribution</div>
        <div className="pie-chart-subtitle">A breakdown of account values</div>
      </div>
      <RechartsPieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RechartsPieChart>
    </div>
  );
};

export default S3PieChart;
