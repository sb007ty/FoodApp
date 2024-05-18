import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container } from "@mui/material";
import React from "react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <Container
      sx={{
        width: "300px",
        height: "300px",
        border: "2px solid black",
        marginTop: "50px",
        borderRadius: "25px",
        backgroundColor: "wheat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onClick={() =>
          logout({
            logoutParams: { returnTo: window.location.origin + "/login" },
          })
        }
      >
        Log Out from App
      </Button>
    </Container>
  );
};

export default Logout;
