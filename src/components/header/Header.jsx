import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    color: "white",
    padding: "10px",
    color: "yellow",
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "center",
    boxShadow: "0px 10px 18px 0px rgba(189, 187, 187, 0.25)",
    margin: "0",
    position: "sticky",
    top: "0",
    left: "0",
    background: "#fff",
    // boxShadow: '5px 5px 15px -5px #fde4e4',
    zIndex: "99999",
  },
  logo: {
    color: "#DC2C34",
    fontSize: "30px",
    fontWeight: "900",
    fontStyle: "normal",
  },
});

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <Box className={classes.container}>
        <Box
          onClick={() => {
            navigate("/");
          }}
        >
          <Typography variant="p" className={classes.logo}>
            Yami
          </Typography>
          <Typography
            variant="p"
            className={classes.logo}
            sx={{ color: "#FDC243" }}
          >
            Food
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;
