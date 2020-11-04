import React, { Fragment } from "react";
import styles from "./Main.module.css";
import Card from "./Card";
import LChart from "./LineChart";


const Main = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.leftCard}>
          <Card
            Text="Total Application"
            Number="7956"
            Icon="Growth"
            Growth="+3.59%"
            color="blueviolet"
            progressText="+70%"
            progress="70"
          />
        </div>
        <div className={styles.centerCard}>
          <Card
            Text="Shortlisted Candidates"
            Number="4658"
            Icon="Growth"
            Growth="+3.59%"
            color="white"
            backgroundColor="rgb(29, 136, 207)"
            progressText="+60%"
            progress="60"
          />
        </div>
        <div className={styles.rightCard}>
          <Card
            Text="Total Application"
            Number="7956"
            Icon="lose"
            Growth="+3.59%"
            color="rgb(206, 74, 74)"
            progressText="+40%"
            progress="40"
          />
        </div>
        <div className={styles.chartDiv}>
          <LChart />
        </div>
        <div className={styles.horizontalBars}>
          <p style={{ color: "white", margin: 12 }}>Total Application</p>
          <span
            style={{
              margin: 10,
              width: 10,
              height: 10,
              backgroundColor: "rgb(74, 160, 182)",
              borderRadius: "50%",
              display: "inline-block",
            }}
          >
            <span style={{ color: "rgb(74, 160, 182)", marginLeft: 15 }}>
              Application
            </span>
            <input type="range" value="70" style={{color: "rgb(74, 160, 182)"}}></input>
          </span>
          <span
            style={{
              margin: 10,
              marginTop: 40,
              width: 10,
              height: 10,
              backgroundColor: "rgb(74, 160, 182)",
              borderRadius: "50%",
              display: "inline-block",
            }}
          >
            <span style={{ color: "rgb(74, 160, 182)", marginLeft: 15 }}>
              Application
            </span>
            <input type="range" value="70" style={{color: "rgb(74, 160, 182)"}}></input>
          </span>
          <span
            style={{
              margin: 10,
              marginTop: 40,
              width: 10,
              height: 10,
              backgroundColor: "rgb(74, 160, 182)",
              borderRadius: "50%",
              display: "inline-block",
            }}
          >
            <span style={{ color: "rgb(74, 160, 182)", marginLeft: 15 }}>
              Application
            </span>
            <input type="range" value="70" style={{color: "rgb(74, 160, 182)"}}></input>
          </span>
          <span
            style={{
              margin: 10,
              marginTop: 40,
              width: 10,
              height: 10,
              backgroundColor: "rgb(74, 160, 182)",
              borderRadius: "50%",
              display: "inline-block",
            }}
          >
            <span style={{ color: "rgb(74, 160, 182)", marginLeft: 15 }}>
              Application
            </span>
            <input type="range" value="70" style={{color: "rgb(74, 160, 182)"}}></input>
          </span>
          <span
            style={{
              margin: 10,
              marginTop: 40,
              width: 10,
              height: 10,
              backgroundColor: "rgb(74, 160, 182)",
              borderRadius: "50%",
              display: "inline-block",
            }}
          >
            <span style={{ color: "rgb(74, 160, 182)", marginLeft: 15 }}>
              Application
            </span>
            <input type="range" value="70" style={{color: "rgb(74, 160, 182)"}}></input>
          </span> 
        </div>
        <div className={styles.ref}>

        </div>
        <div className={styles.pie}>
            <p style={{color:'white', margin: 5}}>Open Position by department</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
