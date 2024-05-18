import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container } from "@mui/material";
import React from "react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
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
          sx={{ width: "100px", height: "100px" }}
          onClick={() => loginWithRedirect()}
        >
          Login to App
        </Button>
      </Container>
    </>
  );
}
