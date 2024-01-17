import { Add, Clear, Remove, ShoppingBasket } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import {
  decreaseQuantity,
  increaseQuantity,
  deleteItem,
  deleteItemsAll,
} from "../../../store/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    marginLeft: "24px",
    marginTop: "24px",
  },
  basket: {
    width: "350px",
  },
  deleteCart: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  order: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceProduct: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  incDec: {
    width: 85,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#F5F4F2",
    padding: "8px",
    borderRadius: "12px",
  },
});
const Cart = () => {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isCartEmpty = cartItems.length === 0;

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  const handleDeleteAllItems = (itemId) => {
    dispatch(deleteItemsAll(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  return (
    <>
      <Box className={classes.container}>
        <Card className={classes.basket} sx={{ borderRadius: 5 }}>
          <CardContent>
            <Box className={classes.deleteCart}>
              <Box sx={{ display: "flex" }}>
                <ShoppingBasket sx={{ color: yellow[800] }} />
                <Typography
                  sx={{ fontSize: 20, fontWeight: 600, marginLeft: 1 }}
                >
                  Корзина
                </Typography>
              </Box>
              <Button
                color="error"
                sx={{ alignItems: "center" }}
                onClick={handleDeleteAllItems}
              >
                Очистить
              </Button>
            </Box>
          </CardContent>

          <CardContent className={classes.contents} sx={{ paddingTop: 0 }}>
            {cartItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  marginBottom: 2,
                  paddingBottom: 2,
                  borderBottom: "1px solid #F5F4F2;",
                }}
              >
                <Box className={classes.order}>
                  <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                    {item.name}
                  </Typography>
                  <Clear onClick={() => handleDeleteItem(item.id)} />
                </Box>
                <Box className={classes.priceProduct}>
                  <Typography
                    sx={{ color: yellow[800], fontSize: 22, fontWeight: 600 }}
                  >
                    {item.price} TJS
                  </Typography>

                  <Box className={classes.incDec}>
                    <Remove onClick={() => handleDecreaseQuantity(item.id)} />
                    <Typography sx={{ fontSize: 22, fontWeight: 500 }}>
                      {item.quantity}
                    </Typography>
                    <Add onClick={() => handleIncreaseQuantity(item.id)} />
                  </Box>
                </Box>
              </Box>
            ))}
          </CardContent>
          <CardContent>
            <Button
              className={classes.total}
              variant="contained"
              color="success"
              disabled={isCartEmpty}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "12px",
              }}
              onClick={() => {
                navigate(`/rest/adress`);
              }}
            >
              Итого <Box sx={{ fontSize: 24 }}>{totalAmount} TJS</Box>
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Cart;
