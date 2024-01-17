import { makeStyles } from "@mui/styles";
import Menu from "./menu/Menu";
import NameRes from "./nameRes/NameRes";
import { Box } from "@mui/material";
import Cart from "./cart/Cart";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    padding: "0px 50px",
    margin: "0px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "relative",
    background: "#F5F4F2"
  },
});
const Restaurant = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <Box className={classes.container}>
        <ArrowBack
          sx={{ position: "absolute", top: 30, left: 10 }}
          onClick={() => {
            navigate('/');
          }}
        />
        <Box>
          <NameRes />
          <Menu />
        </Box>
        <Cart />
      </Box>
    </>
  );
};

export default Restaurant;
