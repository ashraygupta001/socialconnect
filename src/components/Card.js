import React, { Fragment } from "react";
import styles from "./Card.module.css";
import CallMadeSharpIcon from "@material-ui/icons/CallMadeSharp";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = ({
  Text,
  Number,
  Icon,
  Growth,
  color,
  backgroundColor,
  progress,
  progressText
}) => {
  return (
    <Fragment>
      <div className={styles.card} style={{ backgroundColor: backgroundColor }}>
        <div style={{ justifySelf: "center", alignSelf: "center" }}>
          <p
            style={{
              color: "white",
              fontSize: 10,
            }}
          >
            {Text}
          </p>
        </div>
        <div
          style={{
            color: "white",
            justifySelf: "end",
            alignSelf: "center",
            marginRight: 15,
          }}
        >
          <span>...</span>
        </div>
        <div className={styles.num}>
          <p>{Number}</p>
        </div>
        <div className={styles.progress}>
          <CircularProgressbar
            value={progress}
            text={progressText}
            strokeWidth={5}
            styles={buildStyles({
              textColor: color,
              pathColor: color,
              trailColor: 'rgb(200, 198, 195)',
              textSize: '15px',
            })}
          />
        </div>
        <div className={styles.growth}>
          {Icon === "Growth" ? (
            <CallMadeSharpIcon
              style={{ color: color, fontSize: 20, marginRight: 5 }}
            />
          ) : (
            <CallReceivedIcon
              style={{ color: color, fontSize: 20, marginRight: 5 }}
            />
          )}
          <span style={{ color: color }}>{Growth}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
