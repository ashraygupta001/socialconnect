import React, { Fragment } from "react";
import styles from "./RightSide.module.css";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import MessageRoundedIcon from "@material-ui/icons/MessageRounded";
const RightSide = () => {
  return (
    <Fragment>
      <div className={styles.flex}>
        <p style={{ margin: 10, alignSelf: "center" }}>Hello John</p>
        <p style={{ margin: 10, alignSelf: "center" }}>
          {" "}
          You have 8 new application Today
        </p>
        <div className={styles.applicants}>
          <div className={styles.person}>
            <AccountCircleRoundedIcon style={{ margin: 5, fontSize: 35 }} />
            <div>
              <p>Rosie Metts</p>
              <p>Xyz</p>
            </div>
            <CallRoundedIcon style={{ marginLeft: 230 }} />
            <MessageRoundedIcon style={{ marginLeft: 30 }} />
          </div>
          <div className={styles.person}>
            <AccountCircleRoundedIcon style={{ margin: 5, fontSize: 35 }} />
            <div>
              <p>Rosie Metts</p>
              <p>Xyz</p>
            </div>
            <CallRoundedIcon style={{ marginLeft: 230 }} />
            <MessageRoundedIcon style={{ marginLeft: 30 }} />
          </div>
          <div className={styles.person}>
            <AccountCircleRoundedIcon style={{ margin: 5, fontSize: 35 }} />
            <div>
              <p>Rosie Metts</p>
              <p>Xyz</p>
            </div>
            <CallRoundedIcon style={{ marginLeft: 230 }} />
            <MessageRoundedIcon style={{ marginLeft: 30 }} />
          </div>
          <div className={styles.person}>
            <AccountCircleRoundedIcon style={{ margin: 5, fontSize: 35 }} />
            <div>
              <p>Rosie Metts</p>
              <p>Xyz</p>
            </div>
            <CallRoundedIcon style={{ marginLeft: 230 }} />
            <MessageRoundedIcon style={{ marginLeft: 30 }} />
          </div>
          <div className={styles.person}>
            <AccountCircleRoundedIcon style={{ margin: 5, fontSize: 35 }} />
            <div>
              <p>Rosie Metts</p>
              <p>Xyz</p>
            </div>
            <CallRoundedIcon style={{ marginLeft: 230 }} />
            <MessageRoundedIcon style={{ marginLeft: 30 }} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RightSide;
