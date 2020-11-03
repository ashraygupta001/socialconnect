import React, { Fragment } from "react";
import styles from "./Sidebar.module.css";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AssessmentRoundedIcon from "@material-ui/icons/AssessmentRounded";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import FolderRoundedIcon from "@material-ui/icons/FolderRounded";
import AssignmentTurnedInRoundedIcon from "@material-ui/icons/AssignmentTurnedInRounded";
import PeopleOutlineRoundedIcon from "@material-ui/icons/PeopleOutlineRounded";
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = () => {
  return (
    <Fragment>
          <BusinessRoundedIcon
            style={{ fontSize: 40, color: "white", paddingTop: 30 }}
          />
          <HomeRoundedIcon
            style={{
              color: "rgb(29, 136, 207)",
              marginTop: 50,
              fontSize: 30,
              width: 90,
            }}
            className={styles.activeTab}
          />
          <AssessmentRoundedIcon className={styles.sideTabs} />
          <SaveRoundedIcon className={styles.sideTabs} />
          <FolderRoundedIcon className={styles.sideTabs} />
          <AssignmentTurnedInRoundedIcon className={styles.sideTabs} />
          <PeopleOutlineRoundedIcon className={styles.sideTabs} />
          <QuestionAnswerRoundedIcon className={styles.sideTabs} />
          <ExitToAppRoundedIcon className={styles.sideTabs} />
          <SettingsIcon className={styles.sideTabs} style={{marginTop:330}} />
    </Fragment>
  );
};

export default Sidebar;