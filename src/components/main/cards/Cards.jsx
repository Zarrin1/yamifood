import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "@fontsource/material-icons";
import { Star } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { yellow } from "@mui/material/colors";
import { NavLink, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    margin: "24px 0px",
  },
  ranks: {
    display: "flex",
    justifyContent: "space-between",
    margin: "24px",
  },
  cartoch: {
    width: "360px",
    borderRadius: "5px",
    alignItems: "center",
  },
  contents: {
    display: "flex",
    justifyContent: "space-between",
  },

  reiting: {
    display: "flex",
    alignItems: "center",
  },
});

const Cards = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.ranks}>
          <Card
            className={classes.cartoch}
            onClick={() => {
              navigate(`/rest`);
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image="../../../src/assets/bella.png"
            />
            <CardContent className={classes.contents}>
              <Typography variant="body2" color="black" sx={{ fontSize: 20 }}>
                Bella Pizza
              </Typography>
              <div className={classes.reiting}>
                <Star sx={{ color: yellow[800] }} />
                <Typography sx={{ fontSize: 20, marginLeft: 1 }}>4</Typography>
              </div>
            </CardContent>
          </Card>

          <Card
            className={classes.cartoch}
            onClick={() => {
              navigate(`/rest`);
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image="../../../src/assets/merve.png"
            />
            <CardContent className={classes.contents}>
              <Typography variant="body2" color="black" sx={{ fontSize: 20 }}>
                Merve
              </Typography>
              <div className={classes.reiting}>
                <Star sx={{ color: yellow[800] }} />
                <Typography sx={{ fontSize: 20, marginLeft: 1 }}>3</Typography>
              </div>
            </CardContent>
          </Card>

          <Card
            className={classes.cartoch}
            onClick={() => {
              navigate(`/rest`);
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image="../../../src/assets/monkey.png"
            />
            <CardContent className={classes.contents}>
              <Typography variant="body2" color="black" sx={{ fontSize: 20 }}>
                28 Monkey
              </Typography>
              <div className={classes.reiting}>
                <Star sx={{ color: yellow[800] }} />
                <Typography sx={{ fontSize: 20, marginLeft: 1 }}>5</Typography>
              </div>
            </CardContent>
          </Card>
        </Box>

        <Box className={classes.ranks}>
          <Card
            className={classes.cartoch}
            onClick={() => {
              navigate(`/rest`);
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image="../../../src/assets/origami.png"
            />
            <CardContent className={classes.contents}>
              <Typography variant="body2" color="black" sx={{ fontSize: 20 }}>
                Origami
              </Typography>
              <div className={classes.reiting}>
                <Star sx={{ color: yellow[800] }} />
                <Typography sx={{ fontSize: 20, marginLeft: 1 }}>3</Typography>
              </div>
            </CardContent>
          </Card>

          <Card
            className={classes.cartoch}
            onClick={() => {
              navigate(`/rest`);
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image="../../../src/assets/samsa.png"
            />
            <CardContent className={classes.contents}>
              <Typography variant="body2" color="black" sx={{ fontSize: 20 }}>
                Самбуса 1
              </Typography>
              <div className={classes.reiting}>
                <Star sx={{ color: yellow[800] }} />
                <Typography sx={{ fontSize: 20, marginLeft: 1 }}>2</Typography>
              </div>
            </CardContent>
          </Card>

          <Card
            className={classes.cartoch}
            onClick={() => {
              navigate(`/rest`);
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image="../../../src/assets/kfc.png"
            />
            <CardContent className={classes.contents}>
              <Typography variant="body2" color="black" sx={{ fontSize: 20 }}>
                KFC
              </Typography>
              <div className={classes.reiting}>
                <Star sx={{ color: yellow[800] }} />
                <Typography sx={{ fontSize: 20, marginLeft: 1 }}>1</Typography>
              </div>
            </CardContent>
          </Card>
        </Box>

        <Box className={classes.ranks}>
          <Card
            className={classes.cartoch}
            onClick={() => {
              navigate(`/rest`);
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image="../../../src/assets/assado.png"
            />
            <CardContent className={classes.contents}>
              <Typography variant="body2" color="black" sx={{ fontSize: 20 }}>
                Assado
              </Typography>
              <div className={classes.reiting}>
                <Star sx={{ color: yellow[800] }} />
                <Typography sx={{ fontSize: 20, marginLeft: 1 }}>2</Typography>
              </div>
            </CardContent>
          </Card>

          <Card
            className={classes.cartoch}
            onClick={() => {
              navigate(`/rest`);
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image="../../../src/assets/pizza.png"
            />
            <CardContent className={classes.contents}>
              <Typography variant="body2" color="black" sx={{ fontSize: 20 }}>
                Pizza
              </Typography>
              <div className={classes.reiting}>
                <Star sx={{ color: yellow[800] }} />
                <Typography sx={{ fontSize: 20, marginLeft: 1 }}>3</Typography>
              </div>
            </CardContent>
          </Card>

          <Card
            className={classes.cartoch}
            onClick={() => {
              navigate(`/rest`);
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image="../../../src/assets/afandi.png"
            />
            <CardContent className={classes.contents}>
              <Typography variant="body2" color="black" sx={{ fontSize: 20 }}>
                Sait Efendi
              </Typography>
              <div className={classes.reiting}>
                <Star sx={{ color: yellow[800] }} />
                <Typography sx={{ fontSize: 20, marginLeft: 1 }}>5</Typography>
              </div>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Cards;
