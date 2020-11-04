import React, { Fragment } from "react";
import styles from "./MotivationPage.module.css";
import BusinessIcon from "@material-ui/icons/Business";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const MotivationPage = () => {
  return (
    <Fragment>
      <div className={styles.page}>
        <div className={styles.left}>
          <BusinessIcon style={{ fontSize: 40 }} />
          <div style={{ display: "flex", marginTop: 150 }}>
            <AccountCircleIcon style={{ fontSize: 40 }} />
            <span style={{ marginLeft: 10 }}>
              Anand Agarwal <p>AGGGGGg</p>
            </span>
          </div>
          <p style={{ marginTop: 50 }}>Motivation</p>
          <div style={{ display: "flex" }}>
            <p style={{ marginTop: 50, opacity: 0.7 }}>Productivity</p>
            <p>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: 40, marginLeft: 50 }}
              >
                Add
              </Button>
            </p>
          </div>
          <p style={{ marginTop: 50, opacity: 0.7 }}>Design</p>
          <p style={{ marginTop: 50, opacity: 0.7 }}>Study</p>
          <div className={styles.leftBox}>
            <AirplanemodeActiveIcon
              style={{ color: "pink", fontSize: 40, margin: 10 }}
            />
            <p>Hellloooo</p>
            <Button variant="contained" color="secondary">
              Add
            </Button>
          </div>
          <p style={{ marginTop: 50 }}>Logout</p>
        </div>
        <div className={styles.right}>
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: 30, margin: 30, fontWeight: 700 }}>
                Motivation
              </p>
              <span style={{ marginTop: 30, marginLeft: 870 }}>
                <AvatarGroup max={5}>
                  <Avatar>H</Avatar>
                  <Avatar>H</Avatar>
                  <Avatar>H</Avatar>
                  <Avatar>H</Avatar>
                  <Avatar>H</Avatar>
                </AvatarGroup>
              </span>
              <span style={{ marginTop: 25, marginLeft: 30 }}>
                <Fab color="secondary" aria-label="add">
                  <AddIcon />
                </Fab>
              </span>
            </div>
            <div style={{display: 'flex', marginLeft: 30}} >
              <p style={{borderBottom: '1px solid pink'}}>All</p>
              <p style={{marginLeft: 30, opacity:0.7}} >Actions</p>
              <p style={{marginLeft: 30, opacity:0.7}} >Actions</p>
              <p style={{marginLeft: 30, opacity:0.7}} >Actions</p>
              <p style={{marginLeft: 30, opacity:0.7}} >Actions</p>
               <p style={{marginLeft: 30, marginTop: -7}}><Button variant="contained" color="secondary">Add</Button></p>
            </div>
            <div className={styles.photos}>
              <div className={styles.col1}>
                <div className={styles.border}></div>
                <div className={styles.border}></div>
              </div>
              <div className={styles.col2}>
                <div style={{ height: 230}} className={styles.border}></div>
              </div>
              <div className={styles.col3}>
                <div style={{ height: 230}} className={styles.border}></div>
              </div>
              <div className={styles.last} >
              <div style={{ height: 380}} className={styles.border}></div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default MotivationPage;
