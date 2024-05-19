import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Meal from "../Order/Meal";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartMeals = useSelector((state) => state.meals.cart);
  function getMeals() {
    console.log("bro in cart");
    if (cartMeals.length == 0) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Button variant="outlined">
            <Link to={"/order"}>Its never too late to order</Link>
          </Button>
        </Box>
      );
    }
    return (
      <Grid container spacing={5}>
        {cartMeals.map((item) => {
          return <Meal key={item.idMeal} {...item} />;
        })}
      </Grid>
    );
  }
  function getTotalCost() {
    let totalCost = 0;
    cartMeals.forEach((item) => {
      console.log(+item.idMeal.slice(0, 2), totalCost);
      totalCost = totalCost + +item.idMeal.slice(0, 2);
    });
    return totalCost + "$";
  }
  return (
    <Container>
      {getMeals()}
      {cartMeals.length > 0 && (
        <Typography>Total Cost - {getTotalCost()}</Typography>
      )}
    </Container>
  );
}
