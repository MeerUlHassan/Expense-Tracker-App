import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const maxDataPoints = props.newdatapoints.map(
    (dataPoints) => dataPoints.value
  );
  const maxValue = Math.max(...maxDataPoints);
  return (
    <div>
      {props.newdatapoints.map((Points) => (
        <ChartBar
          key={Points.label}
          label={Points.label}
          value={Points.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
