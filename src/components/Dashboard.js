import React, { Fragment } from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "./Sidebar";
import RightTop from "./RightTop";
import Main from "./Main";
import RightSide from "./RightSide";

const Dashboard = () => {
  return (
    <Fragment>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.heading}>
          <p style={{ color: "white", fontSize: 25 }}>Dashboard</p>
          <p style={{ color: "white", marginTop: 5 }}>
            Monday ,{" "}
            <span style={{ color: "rgb(29, 136, 207)" }}>2 July 2020</span>
          </p>
        </div>
        <div className={styles.rightTop}>
          <RightTop />
        </div>
        <div className={styles.main}>
          <Main />
        </div>
        <div className={styles.right}>
          <RightSide />
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
