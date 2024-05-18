import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { LinkOffOutlined, ShoppingCart } from "@mui/icons-material";
import "../styles/header.css";
import { useSelector } from "react-redux";
import Login from "./login/Login";
import Logout from "./login/Logout";
import { useAuth0 } from "@auth0/auth0-react";
export default function Header() {
  const { user, isAuthenticated } = useAuth0();
  console.log(user, isAuthenticated, " auth-status");
  const linkStyle = ({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: "black",
      viewTransitionName: isTransitioning ? "slide" : "",
      textDecoration: "none",
      marginRight: "50px",
    };
  };
  const totalMealsInCart = useSelector((state) => {
    let total = 0;
    state.meals.cart.forEach((item) => {
      total += item.count;
    });
    return total;
  });

  return (
    <Box
      position="sticky"
      sx={{ paddingBottom: "20px", backgroundColor: "whitesmoke" }}
    >
      <Grid
        container
        sx={{
          flexDirection: "column",

          paddingLeft: "50px",
          paddingTop: "20px",
          paddingRight: "50px",
          "@media (min-width: 400px)": {
            flexDirection: "row",
            alignItems: "center",
          },
          // columnGap: "30px",
        }}
      >
        {/* <Grid item>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
        </Grid> */}
        {/* <Toolbar sx={{ gap: "10px" }}> */}
        <Grid item>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "black", marginRight: "50px" }}
          >
            <span
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
                color: "black",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            >
              F
            </span>
            Foodio
          </Typography>
        </Grid>

        <Grid item>
          {" "}
          <NavLink
            style={linkStyle}
            className={"home-link header-link"}
            to={"home"}
          >
            Home
          </NavLink>
        </Grid>

        <Grid item>
          <NavLink style={linkStyle} to={"reserve"}>
            Reserve
          </NavLink>
        </Grid>

        <Grid item>
          <NavLink style={linkStyle} to={"order"}>
            Order
          </NavLink>
        </Grid>

        <Grid
          item
          sx={{
            "@media (min-width: 700px)": {
              marginLeft: "auto",
            },
          }}
        >
          {" "}
          <NavLink style={linkStyle} to={"cart"} className={"cart-link"}>
            <IconButton variant="outlined">
              <ShoppingCart />
              {totalMealsInCart}
            </IconButton>
          </NavLink>
        </Grid>

        {!isAuthenticated && (
          <Grid item>
            <NavLink to={"login"}>
              <Button sx={{ color: "black" }}>Login</Button>
            </NavLink>
          </Grid>
        )}

        {isAuthenticated && (
          <Grid item>
            <NavLink to={"logout"}>
              <Button sx={{ color: "black" }}>Logout</Button>
            </NavLink>
          </Grid>
        )}
      </Grid>
      {/* </Toolbar> */}
    </Box>
  );
}
