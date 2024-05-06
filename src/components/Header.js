import { AppBar, IconButton, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { LinkOffOutlined, ShoppingCart } from "@mui/icons-material";
import "../styles/header.css";
export default function Header() {
  const linkStyle = ({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: "black",
      viewTransitionName: isTransitioning ? "slide" : "",
      textDecoration: "none",
      marginRight: "50px",
    };
  };
  return (
    <AppBar
      position="sticky"
      sx={{ marginBottom: "50px", backgroundColor: "whitesmoke" }}
    >
      <Toolbar sx={{ gap: "10px" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, color: "black" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ color: "black" }}>
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

        <NavLink
          style={linkStyle}
          className={"home-link header-link"}
          to={"home"}
        >
          Home
        </NavLink>

        <NavLink style={linkStyle} to={"reserve"}>
          Reserve
        </NavLink>

        <NavLink style={linkStyle} to={"order"}>
          Order
        </NavLink>

        <NavLink style={linkStyle} to={"reserve"} className={"cart-link"}>
          <ShoppingCart />
        </NavLink>

        <Button sx={{ color: "black" }}>Login</Button>
      </Toolbar>
    </AppBar>
  );
}
