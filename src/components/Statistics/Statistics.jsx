import React from "react";
import ChartArea from "./ChartArea";
import ChartCustom from "./ChartCustom";
import "./Statistics.css";

const Statistics = () => {
  return (
    <div>
      <h1 className="TitleChart">
        Here is the Chart From my assignment marks.
      </h1>
      <div className="ChartStatisticsContainer">
        <ChartArea></ChartArea>
        <ChartCustom></ChartCustom>
      </div>
    </div>
  );
};

export default Statistics;
