import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "@fontsource/material-icons";
import { Star } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { yellow } from "@mui/material/colors";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Types from "../../types/Types";
import { useSelector } from "react-redux";
import { selectActiveTab } from "../../../store/features/type/TypeSlice";

const useStyles = makeStyles({
  container: {
    margin: "24px 0px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "16px",
  },
  cartoch: {
    width: "100%",
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
  const [activeTab, setActiveTab] = useState(0);

  const cardsData = [
    {
      id: 1,
      name: "Bella Pizza",
      category: "all",
      image: "../../../src/assets/bella.png",
      rating: 4,
    },
    {
      id: 2,
      name: "Merve",
      category: "top",
      image: "../../../src/assets/merve.png",
      rating: 5,
    },
    {
      id: 3,
      name: "KFC",
      category: "Fast",
      image: "../../../src/assets/kfc.png",
      rating: 2,
    },
    {
      id: 4,
      name: "Sambusa 1",
      category: "Nation",
      image: "../../../src/assets/samsa.png",
      rating: 5,
    },
    {
      id: 5,
      name: "28 Monkey",
      category: "Top",
      image: "../../../src/assets/monkey.png",
      rating: 5,
    },
    {
      id: 6,
      name: "Origami",
      category: "Sushi",
      image: "../../../src/assets/origami.png",
      rating: 1,
    },
    {
      id: 7,
      name: "Pizza",
      category: "Fast",
      image: "../../../src/assets/pizza.png",
      rating: 4,
    },
    {
      id: 8,
      name: "Assado",
      category: "Turkey",
      image: "../../../src/assets/assado.png",
      rating: 5,
    },
    {
      id: 9,
      name: "Sait Efendi",
      category: "Turkey",
      image: "../../../src/assets/afandi.png",
      rating: 2,
    },
  ];

  const filteredCards = cardsData.filter((card) => {
    return (
      activeTab === 0 ||
      card.category.toLowerCase() === Types[activeTab].toLowerCase()
    );
  });

  return (
    <>
      <Types activeTab={activeTab} setActiveTab={setActiveTab} />
      <Box className={classes.container}>
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            className={classes.cartoch}
            onClick={() => {
              navigate(`/rest`);
            }}
          >
            <CardMedia component="img" height="194" image={card.image} />
            <CardContent className={classes.contents}>
              <Typography variant="body2" color="black" sx={{ fontSize: 20 }}>
                {card.name}
              </Typography>
              <div className={classes.reiting}>
                <Star sx={{ color: yellow[800] }} />
                <Typography sx={{ fontSize: 20, marginLeft: 1 }}>
                  {card.rating}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Cards;
