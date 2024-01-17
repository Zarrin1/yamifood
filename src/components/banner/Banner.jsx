import { Box, ImageList } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  banners: {
    display: "flex",
    textAlign: "center",
    marginTop: '24px',
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.banners}>
        <Box
          component="img"
          src="../../src/assets/shashlik.png"
        />
        <Box
          component="img"
          sx={{
            marginLeft: 5,
          }}
          src="../../src/assets/ban2.png"
        />
      </Box>
    
    </>
  );
};

export default Banner;
