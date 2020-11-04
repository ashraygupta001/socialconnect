import React, { Fragment } from "react";
import styles from "./LineChart.module.css";
import AssignmentReturnedOutlinedIcon from '@material-ui/icons/AssignmentReturnedOutlined';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LChart = () => {
  return (
    <Fragment>
      <div className={styles.chart}>
        <p style={{margin: 10}}>
          Application Received
          <span style={{marginLeft: 90}}>This Year</span>
          <span style={{marginLeft: 60, opacity: 0.7}}>This week</span>
          <span style={{marginLeft: 60, opacity: 0.7}}>Today</span>
          <span style={{marginLeft: 60, opacity: 0.7}}> <AssignmentReturnedOutlinedIcon /> Download</span>
          <span className={styles.text}> ... </span>
        </p>
        <LineChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </Fragment>
  );
};

export default LChart;
