import { Box, Typography } from "@mui/material";

const Deliver = () => {
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
      <Typography sx={{ fontSize: 40, fontWeight: 900, textAlign: "center" }}>
        Спасибо за заказ!
      </Typography>
      <Box
        sx={{ width: 500, height: 500, marginTop: 0 }}
        component="img"
        src="../../src/assets/deliver.png"
      />
    </Box>
  );
};

export default Deliver;
