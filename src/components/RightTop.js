import React, { Fragment } from "react";
import styles from "./RightTop.module.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const RightTop = () => {
  return (
    <Fragment>
      <div className={styles.content}>
        <div className={styles.notification}>
          <Badge
            variant="dot"
            color="primary"
            style={{ margin: 10, marginLeft: 20 }}
          >
            <NotificationsIcon style={{ color: "white" }} />
          </Badge>
          <span style={{ color: "white", margin: 10, marginLeft: 20 }}>
            John Bayer
          </span>
          <Avatar style={{ marginLeft: 20 }}>J</Avatar>
        </div>
        <div className={styles.add}>
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>
            Add
          </Button>
        </div>
        <div className={styles.search}>
          <IconButton aria-label="search">
            <SearchIcon style={{color:'white'}} />
          </IconButton>
          <InputBase placeholder="Search For application here" style={{color:'white'}} />
        </div>
      </div>
    </Fragment>
  );
};
export default RightTop;
