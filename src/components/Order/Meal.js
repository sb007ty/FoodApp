import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function Meal({ strMealThumb, strMeal }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        sx={{
          border: "2px solid black",
          backgroundColor: "beige",
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

        <Typography
          sx={{
            width: "auto",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {strMeal}
        </Typography>
      </Paper>
    </Grid>
  );
}
