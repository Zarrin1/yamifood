import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  types: {
    display: "flex",
    background: "#F5F4F2",
    alignItems: "center",
    borderRadius: "15px",
    padding: "10px",
    marginTop: "16px",
  },
  butun: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
    borderRadius: "15px",
    fontSize: "16px",
    color: "red",
    fontWeight: "400",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ddd",
    },
    "&:not(:last-child)": {
      marginRight: "8px",
    },
    "&.active": {
      backgroundColor: "#3f51b5",
      color: "#fff",
    },
  },
});

const Types = () => {
  const classes = useStyles();

  return (
    <Box className={classes.types}>
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          borderRadius: "15px",
          fontSize: "14px",
          color: "black",
          fontWeight: "400",
          cursor: "pointer",
        }}
      >
        Все
      </Button>
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          borderRadius: "15px",
          fontSize: "14px",
          color: "black",
          fontWeight: "400",
          cursor: "pointer",
        }}
        className={classes.butun}
      >
        Топ
      </Button>
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          borderRadius: "15px",
          fontSize: "14px",
          color: "black",
          fontWeight: "400",
          cursor: "pointer",
        }}
        className={classes.btns}
      >
        Национальная
      </Button>
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          borderRadius: "15px",
          fontSize: "14px",
          color: "black",
          fontWeight: "400",
          cursor: "pointer",
        }}
        className={classes.btns}
      >
        Суши
      </Button>
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          borderRadius: "15px",
          fontSize: "14px",
          color: "black",
          fontWeight: "400",
          cursor: "pointer",
        }}
        className={classes.btns}
      >
        Бургеры
      </Button>
    </Box>
  );
};

export default Types;
