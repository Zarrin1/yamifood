import React from "react";
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
    backgroundColor: "#fff",
    color: "#000",
    borderBottom: "2px solid yellow",
    borderRadius: "10px",
  },
  tabLabel: {
    fontWeight: "bold",
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
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        orientation="horizontal" // Set to "vertical" for vertical tabs
        sx={{
          "& .MuiTab-root": {
            minWidth: "auto", // Adjust tab minimum width for responsiveness
          },
        }}
      >
        <Tab
          label="Все"
          className={activeTab === 0 ? classes.activeTab : ""}
          sx={{ fontSize: { xs: "12px", md: "16px" } }} // Adjust font size for different screen sizes
        />
        <Tab
          label="Топ"
          className={activeTab === 1 ? classes.activeTab : ""}
          sx={{ fontSize: { xs: "12px", md: "16px" } }}
        />
        <Tab
          label="Национальная"
          className={activeTab === 2 ? classes.activeTab : ""}
          sx={{ fontSize: { xs: "12px", md: "16px" } }}
        />
        <Tab
          label="Суши"
          className={activeTab === 3 ? classes.activeTab : ""}
          sx={{ fontSize: { xs: "12px", md: "16px" } }}
        />
        <Tab
          label="Fast-food"
          className={activeTab === 4 ? classes.activeTab : ""}
          sx={{ fontSize: { xs: "12px", md: "16px" } }}
        />
        <Tab
          label="Турецкая"
          className={activeTab === 5 ? classes.activeTab : ""}
          sx={{ fontSize: { xs: "12px", md: "16px" } }}
        />
      </Tabs>
    </Box>
  );
};

export default Types;
