import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteItemsAll } from "../../store/features/cart/cartSlice";

const useStyles = makeStyles({});

const Adress = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(deleteItemsAll());

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adressStr, setAdressStr] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "name") {
      setName(value);
    } else if (id === "phoneNumber") {
      setPhoneNumber(value);
    } else if (id === "adressStr") {
      setAdressStr(value);
    }

    const allFieldsFilled =
      name !== "" && phoneNumber !== "" && adressStr !== "";
    setIsBtnDisabled(!allFieldsFilled);
  };

  return (
    <>
      <Box className={classes.banner}>
        <Box
          sx={{ width: "100%" }}
          component="img"
          src="../../src/assets/bellaBan.png"
          className={classes.imgRes}
        />
      </Box>
      <Box
        className={classes.container}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          padding: "0px 50px",
        }}
      >
        <Box className={classes.main} sx={{ padding: 0, margin: 0 }}>
          <List className={classes.lists}>
            <ListItem sx={{ padding: 0 }}>
              <TextField
                id="name"
                label="Имя"
                variant="standard"
                value={name}
                onChange={handleInputChange}
                sx={{ width: "500px", marginBottom: 2, fontSize: 20 }}
              />
            </ListItem>

            <ListItem sx={{ padding: 0 }}>
              <TextField
                id="phoneNumber"
                label="Номер"
                variant="standard"
                value={phoneNumber}
                onChange={handleInputChange}
                sx={{ width: "500px", marginBottom: 2 }}
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*", // Разрешаем только цифры
                }}
              />
            </ListItem>

            <ListItem sx={{ padding: 0 }}>
              <TextField
                id="adressStr"
                label="Адресс"
                variant="standard"
                value={adressStr}
                onChange={handleInputChange}
                sx={{ width: "500px", marginBottom: 2 }}
              />
            </ListItem>

            <Button
              className={classes.total}
              variant="contained"
              color="success"
              sx={{
                borderRadius: "12px",
              }}
              onClick={() => {
                navigate("/rest/adress/deliver");
              }}
              disabled={isBtnDisabled}
            >
              Заказать
            </Button>
          </List>
        </Box>

        <Box
          className={classes.check}
          sx={{
            background: "#FDC243",
            width: 350,
            borderRadius: 5,
            padding: 2,
            margin: 0,
          }}
        >
          <List>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ padding: 0, fontSize: 20 }}>Pizza</Typography>
              <Typography sx={{ padding: 0, fontSize: 20 }}>2 TJS</Typography>
            </ListItem>

            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "2px solid #fff",
                marginTop: "20px",
              }}
            >
              <Typography sx={{ padding: 0, fontSize: 18 }}>Итоги</Typography>
              <Typography sx={{ padding: 0, fontSize: 20 }}>2 TJS</Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Adress;
