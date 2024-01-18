import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveTab,
  setActiveTab,
} from "../../store/features/type/TypeSlice";

const useStyles = makeStyles({
  types: {
    background: "#F5F4F2",
    borderRadius: "15px",
    padding: "10px",
    marginTop: "16px",
  },
  activeTab: {
    backgroundColor: "#fff !important",
    color: "#000 !important",
    borderBottom: "yellow !important",
    borderRadius: "10px !important",
  },
});

const Types = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);

  const handleTabChange = (event, newValue) => {
    dispatch(setActiveTab(newValue));
  };

  return (
    <Box className={classes.types}>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Все" className={activeTab === 0 ? classes.activeTab : ""} />
        <Tab label="Топ" className={activeTab === 1 ? classes.activeTab : ""} />
        <Tab
          label="Национальная"
          className={activeTab === 2 ? classes.activeTab : ""}
        />
        <Tab
          label="Суши"
          className={activeTab === 3 ? classes.activeTab : ""}
        />
        <Tab
          label="Fast-food"
          className={activeTab === 4 ? classes.activeTab : ""}
        />
        <Tab
          label="Турецкая"
          className={activeTab === 5 ? classes.activeTab : ""}
        />
      </Tabs>
    </Box>
  );
};

export default Types;
