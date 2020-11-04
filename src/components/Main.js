import React, { Fragment } from "react";
import styles from "./Main.module.css";
import Card from "./Card";

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
      </div>
    </Fragment>
  );
};

export default Main;
