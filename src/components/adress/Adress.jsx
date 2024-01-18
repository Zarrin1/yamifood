import React from "react";
import { Box, Button, List, ListItem, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteItemsAll } from "../../store/features/cart/cartSlice";
import { ArrowBack } from "@mui/icons-material";

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
    <Box className={classes.container} sx={{ position: "relative" }}>
      <Box className={classes.banner}>
        <img
          src="../../src/assets/bellaBan.png"
          alt="Banner"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <ArrowBack
        sx={{ position: "absolute", top: 30, left: 10, color: "#fff" }}
        onClick={() => {
          navigate(-1);
        }}
      />
      <Box
        className={classes.main}
        sx={{
          textAlign: "center", // Center the content horizontally
        }}
      >
        <Box sx={{ margin: "0 auto", maxWidth: "400px" }}>
          <List className={classes.lists}>
            <ListItem>
              <TextField
                id="name"
                label="Имя"
                variant="standard"
                value={name}
                onChange={handleInputChange}
                sx={{ width: "100%", marginBottom: 2, fontSize: 20 }}
              />
            </ListItem>

            <ListItem>
              <TextField
                id="phoneNumber"
                label="Номер"
                variant="standard"
                value={phoneNumber}
                onChange={handleInputChange}
                sx={{ width: "100%", marginBottom: 2 }}
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
              />
            </ListItem>

            <ListItem>
              <TextField
                id="adressStr"
                label="Адресс"
                variant="standard"
                value={adressStr}
                onChange={handleInputChange}
                sx={{ width: "100%", marginBottom: 2 }}
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
      </Box>
    </Box>
  );
};

export default Adress;
