import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import food1 from "../images/home-food1.avif";
import food2 from "../images/home-food2.avif";
import Order from "./Order/Order";
import "../styles/home.css";
export default function Home() {
  return (
    <Box>
      <Grid
        className={"homepage-1"}
        container
        spacing={5}
        sx={{
          //   flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Grid item>
          <Typography variant="h2">Best Restaurant in Town</Typography>
          <Typography variant="h6" sx={{ marginBottom: "40px" }}>
            We provide the best food in town, best delivery and dine in service
          </Typography>
          <Button variant="outlined" sx={{ marginRight: "40px" }}>
            <Link to={"/order"}>Order Now</Link>
          </Button>
          <Button variant="outlined">
            <Link to={"/reserve"}>Reservation</Link>
          </Button>
        </Grid>
        <Grid item>
          <Box>
            <img
              src={food1}
              width={"500px"}
              height={"500px"}
              style={{ borderRadius: "50%" }}
            />
          </Box>
        </Grid>
      </Grid>
      <br />
      <Grid
        className={"homepage-2"}
        container
        spacing={5}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "150px",
          minHeight: "80vh",
        }}
      >
        <Grid item>
          <Box>
            <img
              src={food2}
              width={"500px"}
              height={"500px"}
              style={{ borderRadius: "50%" }}
            />
          </Box>
        </Grid>
        <Grid item width={"40%"}>
          <Typography variant="h2">Our most popular Dish</Typography>
          <Typography variant="h6" sx={{ marginBottom: "40px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            earum, voluptatibus tempore dolores animi in rerum, itaque odio
            blanditiis incidunt modi voluptates ex quis alias ea dolor
            architecto deserunt fugit?
          </Typography>
          <Button variant="outlined" sx={{ marginRight: "40px" }}>
            <Link to={"/order"}>Order Now</Link>
          </Button>
        </Grid>
      </Grid>
      <Order />
    </Box>
  );
}
