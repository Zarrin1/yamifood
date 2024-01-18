import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { yellow } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increaseQuantity,
} from "../../../store/features/cart/cartSlice";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  container: {
    marginTop: "24px",
  },
  menus: {
    margin: "16px 0px",
  },
  ranks: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cartoch: {
    width: "250px",
    borderRadius: "15px",
    alignItems: "center",
    marginBottom: "16px",
  },
  addCart: {
    marginTop: "14px !important",
    background: "#F5F4F2",
    color: "black",
    borderRadius: "10px",
  },
});

const Menu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [randomProducts, setRandomProducts] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      dispatch(increaseQuantity(existingProduct.id));
    } else {
      dispatch(addItem(product));
    }
  };

  const products = [
    {
      id: 1,
      name: "Пицца Ассорти",
      price: 30,
      description: "Белла Соус, Моцарелла",
      image: "../../../src/assets/assorti.png",
      quantity: 1,
    },

    {
      id: 2,
      name: "Пицца Сырная",
      description: "Mоцарелла, пармезан,",
      price: 40,
      image: "../../../src/assets/cheese.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Пицца Пепперони",
      description: "Моцарелла, томатный соус,",
      price: 67,
      image: "../../../src/assets/pepperoni.png",
      quantity: 1,
    },
    {
      id: 4,
      name: "Гамбургер Классика",
      description: "Белла Соус, Моцарелла",
      price: 67,
      image: "../../../src/assets/burger.png",
      quantity: 1,
    },
    {
      id: 5,
      name: "Сендвич",
      description: "Белла Соус, Моцарелла",
      price: 67,
      image: "../../../src/assets/sandwich.png",
      quantity: 1,
    },
    {
      id: 6,
      name: "BBQ Burger",
      description: "Белла Соус, Моцарелла",
      price: 67,
      image: "../../../src/assets/bbq.png",
      quantity: 1,
    },
    {
      id: 7,
      name: "Картошка Фри",
      description: "Белла Соус, Моцарелла",
      price: 67,
      image: "../../../src/assets/free.png",
      quantity: 1,
    },
    {
      id: 8,
      name: "Соус",
      description: "Белла Соус, Моцарелла",
      price: 67,
      image: "../../../src/assets/sous.png",
      quantity: 1,
    },
    {
      id: 9,
      name: "Наггетсы",
      description: "Белла Соус, Моцарелла",
      price: 67,
      image: "../../../src/assets/nagets.png",
      quantity: 1,
    },
  ];

  useEffect(() => {
    if (randomProducts.length == 0) {
      const shuffledProducts = products.sort(() => Math.random() - 0.5);
      const threeRandomProducts = shuffledProducts.slice(0, 3);
      setRandomProducts(threeRandomProducts);
    }
  }, [randomProducts]);

  return (
    <>
      <Box className={classes.container}>
        <Typography sx={{ fontSize: 28, fontWeight: 700 }}>Меню</Typography>

        <Box className={classes.menus}>
          <Box className={classes.ranks}>
            {randomProducts.map((product) => (
              <Card
                key={`${product.id}-${product.quantity}`}
                className={classes.cartoch}
                sx={{ borderRadius: "15px" }}
              >
                <CardMedia component="img" image={product.image} />
                <CardContent className={classes.contents}>
                  <Typography
                    variant="body2"
                    color="black"
                    sx={{ color: yellow[800], fontSize: 20, fontWeight: 600 }}
                  >
                    {product.price} TJS
                  </Typography>
                  <Typography
                    variant="body2"
                    color="black"
                    sx={{ fontSize: 20, fontWeight: 400, marginTop: 1 }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="black"
                    sx={{ fontSize: 16, fontWeight: 200 }}
                  >
                    {product.description}
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<Add />}
                    className={classes.addCart}
                    sx={{
                      background: "#F5F4F2",
                      color: "black",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Добавить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Menu;
