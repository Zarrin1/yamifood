import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Deliver = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Занимаем всю высоту видимой области
      }}
    >
      <Typography sx={{ fontSize: 30, fontWeight: 700, textAlign: "center" }}>
        Спасибо за заказ!
      </Typography>
      <Box
        sx={{ width: 450, height: 450, marginTop: 0, padding: 0 }}
        component="img"
        src="../../src/assets/deliver.png"
      />
      <Button
        sx={{
          borderRadius: "12px",
          background: "#FDC243",
          color: "#fff",
          padding: "15px",
          fontSize: "16px",
          fontWeight: "600",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Главная
      </Button>
    </Box>
  );
};

export default Deliver;
