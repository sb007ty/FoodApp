import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  addFavMeals,
  addMealToCart,
  addToCart,
  removeMealFromCart,
} from "../../redux/features/mealsSlice";
export default function Meal({ strMealThumb, strMeal, idMeal }) {
  console.log({ strMealThumb, strMeal, idMeal });
  const dispatch = useDispatch();
  const mealCount = useSelector((state) => {
    let count = 0;

    state.meals.cart.forEach((item) => {
      if (item["idMeal"] == idMeal) {
        count = item["count"];
      }
    });

    return count;
  });
  function addMeal() {
    dispatch(
      addMealToCart({
        strMeal: strMeal,
        price: idMeal[0] + idMeal[2],
        idMeal: idMeal,
        strMealThumb,
        count: 1,
      })
    );
  }
  function addMealFav() {
    dispatch(
      addFavMeals({
        strMeal: strMeal,
        price: idMeal[0] + idMeal[2],
        idMeal: idMeal,
        strMealThumb,
      })
    );
  }
  function removeMeal() {
    dispatch(
      removeMealFromCart({
        idMeal: idMeal,
      })
    );
  }
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        sx={{
          border: "2px solid black",
          backgroundColor: " #f0f0f0",
          borderRadius: "25px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          // padding: "10px",
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
        >
          {" "}
          <img
            src={strMealThumb}
            alt=""
            height={"200px"}
            width={"200px"}
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Box
          sx={{
            width: "auto",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="span" sx={{ marginRight: "5px" }}>
            {strMeal}
          </Typography>
          <Typography variant="span">-{idMeal[0] + idMeal[2] + "$"}</Typography>
        </Box>
        <Box
          sx={{
            width: "auto",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="span">
            <RemoveIcon sx={{ cursor: "pointer" }} onClick={removeMeal} />
          </Typography>
          <Typography variant="span" sx={{ marginRight: "5px" }}>
            {mealCount}
          </Typography>
          <Typography variant="span">
            <AddIcon sx={{ cursor: "pointer" }} onClick={addMeal} />
          </Typography>
          <Typography variant="span">
            <FavoriteIcon sx={{ cursor: "pointer" }} onClick={addMealFav} />
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
