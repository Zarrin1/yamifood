import { Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    width: "800px",
    position: "relative",
    marginTop: "24px",
  },
  imgRes: {
    width: "100%",
    height: "100%",
  },
  raiting: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    bottom: "0",
  },
  reiting: {
    display: "flex",
    marginLeft: "24px",
    alignItems: "center",
    background: '#F5F4F2',
    padding: '6px',
    borderRadius: '10px'
  },
  belka: {
    color: "white",
  },
});
const NameRes = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <Box
          component="img"
          src="../../src/assets/bellaPizza.png"
          className={classes.imgRes}
        />
        <Box className={classes.raiting} sx={{marginBottom: 2}}>
          <Typography className={classes.belka} sx={{ fontSize: 30, marginLeft: 4 }}>
            Bella Pizza
          </Typography>
          <div className={classes.reiting}>
            <Star sx={{ color: yellow[800] }} />
            <Typography sx={{ fontSize: 20,  marginLeft: 1,  }}>4</Typography>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default NameRes;
