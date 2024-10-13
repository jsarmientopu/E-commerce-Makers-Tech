import * as React from "react";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Typography } from "@mui/material";

// Color Palette for Pie Chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const PieChartMine = ({ data: chartData }) => {
  return (
    <div className="w-[45%] flex flex-col items-center">
      <Typography
        variant="h5"
        className="mb-4 font-bold text-purple-800"
        sx={{ fontWeight: "bold" }}
      >
        Product Distribution by Category in Stock
      </Typography>
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};
export default PieChartMine;
