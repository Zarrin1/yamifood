import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Types from "../types/Types";
import Cards from "./cards/Cards";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "block",
    marginTop: "24px",
    padding: "0px",
  },

  textRes: {
    fontSize: "32px",
    fontWeight: "700",
  },
});

const MainContent = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.textRes}>Рестораны</Box>
        <Cards />
      </Box>
    </>
  );
};

export default MainContent;
