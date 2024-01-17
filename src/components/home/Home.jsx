import { Box } from "@mui/material";
import Banner from "../banner/Banner";
import MainContent from "../main/MainContent";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    padding: '0px 50px',
    margin: '0px',
    background:'white',
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <Banner />
        <MainContent />
      </Box>
    </>
  );
};

export default Home;
