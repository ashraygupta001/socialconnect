import React, { Fragment } from "react";
import styles from "./Main.module.css";
import CallMadeSharpIcon from "@material-ui/icons/CallMadeSharp";

const Main = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.topleft}>
          <div>
            <p
              style={{
                color: "white",
                fontSize: 15,
                paddingLeft: 20,
                paddingTop: 25,
              }}
            >
              Total Applications
            </p>
          </div>
          <div className={styles.num}>
            <p>7956</p>
          </div>
          <div className={styles.growth}>
            <CallMadeSharpIcon style={{color:'blueviolet', fontSize:20, marginRight:5}} />
            <span>+3.59%</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
